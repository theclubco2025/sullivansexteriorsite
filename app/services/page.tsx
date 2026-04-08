import type { Metadata } from "next";
import { services } from "@/config/site";
export const metadata: Metadata = { title: "Services" };
export default function ServicesPage() {
  return <section className="container-shell py-14"><h1 className="text-3xl font-bold">Services</h1>
    <div className="mt-6 grid gap-3">{services.map(s=><article key={s} className="border rounded p-4">{s}</article>)}</div>
  </section>;
}
