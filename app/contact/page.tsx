import type { Metadata } from "next";
import { QuoteForm, SubscriptionForm } from "@/components/forms/Forms";
import { business } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact & Request Quote",
  description: "Request a standard quote or ask about recurring service plans."
};

export default function ContactPage() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container-shell">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Contact & Request Quote</h1>
        <p className="mt-4 max-w-3xl text-slate-700">Fill out one of the forms below and we will follow up shortly by phone.</p>

        <div className="mt-6 rounded-xl border border-brand-200 bg-brand-50 p-5 text-sm text-brand-900 shadow-sm">
          <p className="text-base font-semibold">Call Now: <a href={business.phoneHref} className="underline">{business.phoneDisplay}</a></p>
          <p className="mt-1">Hours: {business.hours}</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
          <QuoteForm />
          <SubscriptionForm />
        </div>
      </div>
    </section>
  );
}