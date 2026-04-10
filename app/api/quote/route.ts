import { NextResponse } from "next/server";
import { parseOptionalUpload } from "@/lib/formData";
import { quoteSchema } from "@/lib/validation";
import { sendLeadEmail } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const parsed = quoteSchema.safeParse({
      fullName: formData.get("fullName"), phone: formData.get("phone"), address: formData.get("address"),
      email: formData.get("email"), service: formData.get("service"), propertyType: formData.get("propertyType"),
      preferredTiming: formData.get("preferredTiming"), details: formData.get("details")
    });
    if (!parsed.success) return NextResponse.json({ error: "Please complete required fields." }, { status: 400 });
    const u = parseOptionalUpload(formData.get("photo"));
    const txt = [
      "Quote Request Details","---------------------",
      `Full Name: ${parsed.data.fullName}`,`Phone Number: ${parsed.data.phone}`,`Service Address: ${parsed.data.address}`,
      `Email Address: ${parsed.data.email || "Not provided"}`,`Requested Service: ${parsed.data.service}`,
      `Property Type: ${parsed.data.propertyType}`,`Preferred Timing: ${parsed.data.preferredTiming || "Not provided"}`,
      `Project Details: ${parsed.data.details || "Not provided"}`,
      u ? `Photo Upload: ${u.filename} (${u.mimeType}, ${u.sizeBytes} bytes)` : "Photo Upload: Not provided"
    ].join("\n");
    await sendLeadEmail({ subject: "New Quote Request  Sullivan's Exterior", text: txt });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Sorry, submission failed. Please call us directly." }, { status: 500 });
  }
}

