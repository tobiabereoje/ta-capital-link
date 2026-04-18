import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const propertyLocation = formData.get("propertyLocation") as string;
    const numberOfUnits = formData.get("numberOfUnits") as string;
    const loanAmount = formData.get("loanAmount") as string;
    const businessPlan = formData.get("businessPlan") as string;

    // Process file attachments
    const fileEntries = formData.getAll("files");
    const attachments = [];

    for (const entry of fileEntries) {
      if (entry instanceof File && entry.size > 0) {
        const buffer = await entry.arrayBuffer();
        const base64Content = Buffer.from(buffer).toString("base64");
        attachments.push({
          filename: entry.name,
          content: base64Content,
        });
      }
    }

    const attachmentNote =
      attachments.length > 0
        ? `<h3 style="margin-top:24px;">Attachments</h3><p style="color:#666;">${attachments.length} file${attachments.length > 1 ? "s" : ""} attached: ${attachments.map((a) => a.filename).join(", ")}</p>`
        : `<p style="margin-top:24px;color:#999;font-style:italic;">No documents attached.</p>`;

    const emailPayload: Record<string, unknown> = {
      from: "TA Capital Link <deals@tacapitalink.com>",
      to: ["tobiabereoje@gmail.com"],
      subject: `New Deal Submission: ${propertyLocation} — ${fullName}`,
      html: `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1a2e;">
  <h2 style="color:#c9a227;border-bottom:2px solid #c9a227;padding-bottom:10px;">New Deal Submission</h2>
  <h3 style="margin-top:24px;">Contact Information</h3>
  <table style="width:100%;border-collapse:collapse;">
    <tr><td style="padding:8px 0;color:#666;">Name</td><td style="padding:8px 0;font-weight:bold;">${fullName}</td></tr>
    <tr><td style="padding:8px 0;color:#666;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
    <tr><td style="padding:8px 0;color:#666;">Phone</td><td style="padding:8px 0;"><a href="tel:${phone}">${phone}</a></td></tr>
  </table>
  <h3 style="margin-top:24px;">Property Details</h3>
  <table style="width:100%;border-collapse:collapse;">
    <tr><td style="padding:8px 0;color:#666;">Location</td><td style="padding:8px 0;font-weight:bold;">${propertyLocation}</td></tr>
    <tr><td style="padding:8px 0;color:#666;">Units</td><td style="padding:8px 0;">${numberOfUnits}</td></tr>
    <tr><td style="padding:8px 0;color:#666;">Loan Amount</td><td style="padding:8px 0;font-weight:bold;">${loanAmount}</td></tr>
  </table>
  <h3 style="margin-top:24px;">Business Plan</h3>
  <p style="background:#f5f5f5;padding:16px;border-radius:8px;line-height:1.6;">${businessPlan.replace(/\n/g, "<br />")}</p>
  ${attachmentNote}
  <hr style="margin-top:32px;border:none;border-top:1px solid #ddd;" />
  <p style="font-size:12px;color:#999;margin-top:16px;">Sent from tacapitalink.com deal submission form</p>
</div>`,
    };

    if (attachments.length > 0) {
      emailPayload.attachments = attachments;
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailPayload),
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
