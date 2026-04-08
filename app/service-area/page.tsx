import type { Metadata } from "next";
export const metadata: Metadata = { title: "Service Area" };
export default function ServiceAreaPage() {
  return <section className="container-shell py-14"><h1 className="text-3xl font-bold">Service Area</h1>
    <p className="mt-3">We serve Sacramento to Tahoe. Extended radius is available for additional transportation fee.</p>
    <p className="mt-2">Transportation fee may be waived when already scheduled in your neighborhood.</p>
  </section>;
}
