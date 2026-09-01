import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongodb";
import FormSubmission from "../../../lib/models/FormSubmission";

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    const firstName = formData.get("first_name");
    const lastName = formData.get("last_name");
    const email = formData.get("email");
    const role = formData.get("role");
    const phone = formData.get("phone");
    const link = formData.get("link");
    const coverLetter = formData.get("cover_letter");
    
    const name = `${firstName} ${lastName}`;
    
    const message = `Role: ${role}\nPhone: ${phone || 'N/A'}\nLink: ${link || 'N/A'}\n\nCover Letter:\n${coverLetter || 'N/A'}`;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Save to MongoDB (primary — this is the source of truth)
    let dbSaved = false;
    try {
      await dbConnect();
      await FormSubmission.create({
        company: "Align USA Group Careers",
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

      // We use formData directly
      const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: "POST",
        body: formData,
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

    if (dbSaved) {
      return NextResponse.json({ success: true, emailSent });
    }

    return NextResponse.json(
      { error: "Failed to save your application. Please try again." },
      { status: 500 }
    );
  } catch (err) {
    console.error("Apply API Error:", err);
    return NextResponse.json(
      { error: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}
