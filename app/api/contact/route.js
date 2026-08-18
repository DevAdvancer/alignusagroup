import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongodb";
import FormSubmission from "../../../lib/models/FormSubmission";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Save to MongoDB (primary — this is the source of truth)
    let dbSaved = false;
    try {
      await dbConnect();
      await FormSubmission.create({
        company: "Align USA Group",
        name,
        email,
        message,
      });
      dbSaved = true;
    } catch (dbError) {
      console.error("MongoDB Error:", dbError);
    }

    // Forward to FormSubmit (best-effort email notification)
    let emailSent = false;
    try {
      const FORMSUBMIT_EMAIL = 'alignus26@gmail.com';
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000); // 10s timeout

      const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, message }),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!formSubmitRes.ok) {
        const errorText = await formSubmitRes.text();
        console.error("FormSubmit Error:", formSubmitRes.status, errorText);
      } else {
        emailSent = true;
      }
    } catch (emailError) {
      console.error("FormSubmit fetch failed:", emailError.message);
    }

    // Succeed if we saved to DB — the submission is captured regardless of email
    if (dbSaved) {
      return NextResponse.json({ success: true, emailSent });
    }

    // Both failed — genuine error
    return NextResponse.json(
      { error: "Failed to save your message. Please try again." },
      { status: 500 }
    );
  } catch (err) {
    console.error("Contact API Error:", err);
    return NextResponse.json(
      { error: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}
