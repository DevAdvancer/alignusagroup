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

    // Save to MongoDB
    try {
      await dbConnect();
      await FormSubmission.create({
        company: "Align USA Group",
        name,
        email,
        message,
      });
    } catch (dbError) {
      console.error("MongoDB Error:", dbError);
    }

    // Forward to FormSubmit
    const FORMSUBMIT_EMAIL = 'alignus26@gmail.com';
    const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (!formSubmitRes.ok) {
      const errorText = await formSubmitRes.text();
      console.error("FormSubmit Error:", errorText);
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}
