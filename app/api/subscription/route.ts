import { NextResponse } from "next/server";
import { parseOptionalUpload } from "@/lib/formData";
import { subscriptionSchema } from "@/lib/validation";
import { sendLeadEmail } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const parsed = subscriptionSchema.safeParse({
      fullName: formData.get("fullName"), phone: formData.get("phone"), address: formData.get("address"),
      email: formData.get("email"), services: formData.getAll("services"),
      frequency: formData.get("frequency"), propertyType: formData.get("propertyType"), notes: formData.get("notes")
    });
    if (!parsed.success) return NextResponse.json({ error: "Please complete required fields." }, { status: 400 });
    const u = parseOptionalUpload(formData.get("photo"));
    const txt = [
      "Recurring / Subscription Inquiry Details","----------------------------------------",
      `Full Name: ${parsed.data.fullName}`,`Phone Number: ${parsed.data.phone}`,`Service Address: ${parsed.data.address}`,
      `Email Address: ${parsed.data.email || "Not provided"}`,`Services of Interest: ${parsed.data.services.join(", ")}`,
      `Desired Frequency: ${parsed.data.frequency}`,`Property Type: ${parsed.data.propertyType}`,
      `Notes: ${parsed.data.notes || "Not provided"}`,
      u ? `Photo Upload: ${u.filename} (${u.mimeType}, ${u.sizeBytes} bytes)` : "Photo Upload: Not provided"
    ].join("\n");
    await sendLeadEmail({ subject: "New Subscription Inquiry — Sullivan’s Exterior", text: txt });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Sorry, submission failed. Please call us directly." }, { status: 500 });
  }
}
