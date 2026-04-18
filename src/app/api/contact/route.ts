import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "TA Capital Link <info@tacapitalink.com>",
        to: ["tobiabereoje@gmail.com"],
        subject: `Contact Form: ${subject || "General Inquiry"} — ${name}`,
        replyTo: email,
        html: `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1a2e;">
  <h2 style="color:#c9a227;border-bottom:2px solid #c9a227;padding-bottom:10px;">New Contact Form Message</h2>
  <table style="width:100%;border-collapse:collapse;margin-top:20px;">
    <tr><td style="padding:8px 0;color:#666;width:80px;">Name</td><td style="padding:8px 0;font-weight:bold;">${name}</td></tr>
    <tr><td style="padding:8px 0;color:#666;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
    <tr><td style="padding:8px 0;color:#666;">Subject</td><td style="padding:8px 0;">${subject || "N/A"}</td></tr>
  </table>
  <h3 style="margin-top:24px;">Message</h3>
  <p style="background:#f5f5f5;padding:16px;border-radius:8px;line-height:1.6;">${message.replace(/\n/g, "<br />")}</p>
  <hr style="margin-top:32px;border:none;border-top:1px solid #ddd;" />
  <p style="font-size:12px;color:#999;margin-top:16px;">Sent from tacapitalink.com contact form</p>
</div>`,
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      return NextResponse.json(
        { error: "Failed to send email", details: error },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
