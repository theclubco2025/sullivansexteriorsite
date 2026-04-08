import type { Metadata } from "next";
import { business } from "@/config/site";
import { QuoteForm, SubscriptionForm } from "@/components/forms/Forms";
export const metadata: Metadata = { title: "Contact & Request Quote" };
export default function ContactPage() {
  return <section className="container-shell py-14">
    <h1 className="text-3xl font-bold">Contact & Request Quote</h1>
    <p className="mt-3">Call now: <a className="underline" href={business.phoneHref}>{business.phoneDisplay}</a></p>
    <div className="mt-6 grid gap-6 lg:grid-cols-2"><QuoteForm /><SubscriptionForm /></div>
  </section>;
}
