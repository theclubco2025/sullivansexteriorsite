"use client";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { services } from "@/config/site";

function BaseField({label,name,type="text",required=false}:{label:string;name:string;type?:string;required?:boolean}) {
  return (
    <label className="block text-sm font-medium text-slate-800">
      {label}{required ? " *" : ""}
      <input className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-3 text-sm" name={name} type={type} required={required} />
    </label>
  );
}

export function QuoteForm() {
  const router = useRouter();
  const [err,setErr]=useState("");
  async function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault(); setErr("");
    const r=await fetch("/api/quote",{method:"POST",body:new FormData(e.currentTarget)});
    if(!r.ok){ setErr("Could not submit. Please call directly."); return; }
    router.push("/success?type=quote");
  }
  return (
    <form onSubmit={submit} className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
      <h2 className="text-2xl font-semibold text-slate-900">Standard Quote Request</h2>
      <BaseField label="Full Name" name="fullName" required />
      <BaseField label="Phone Number" name="phone" required type="tel" />
      <BaseField label="Service Address" name="address" required />
      <BaseField label="Email Address" name="email" type="email" />

      <label className="block text-sm font-medium text-slate-800">Requested Service *
        <select name="service" required className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-3 text-sm">
          <option value="">Select</option>{services.map(s=><option key={s} value={s}>{s}</option>)}
        </select>
      </label>

      <label className="block text-sm font-medium text-slate-800">Property Type *
        <select name="propertyType" required className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-3 text-sm">
          <option value="">Select</option><option>Residential</option><option>Commercial</option><option>Other</option>
        </select>
      </label>

      <BaseField label="Preferred Timing" name="preferredTiming" />
      <label className="block text-sm font-medium text-slate-800">Project Details / Message
        <textarea name="details" className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-3 text-sm" rows={4}></textarea>
      </label>
      <label className="block text-sm font-medium text-slate-800">Photo Upload (optional)
        <input type="file" name="photo" accept="image/*" className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-3 text-sm" />
      </label>

      {err && <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{err}</p>}
      <button className="w-full rounded-md bg-brand-600 px-4 py-3 text-base font-semibold text-white hover:bg-brand-700 sm:w-auto" type="submit">Submit Quote Request</button>
    </form>
  );
}

export function SubscriptionForm() {
  const router = useRouter();
  const [err,setErr]=useState("");
  async function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault(); setErr("");
    const r=await fetch("/api/subscription",{method:"POST",body:new FormData(e.currentTarget)});
    if(!r.ok){ setErr("Could not submit. Please call directly."); return; }
    router.push("/success?type=subscription");
  }
  return (
    <form id="subscription-form" onSubmit={submit} className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
      <h2 className="text-2xl font-semibold text-slate-900">Recurring / Subscription Service Inquiry</h2>
      <BaseField label="Full Name" name="fullName" required />
      <BaseField label="Phone Number" name="phone" required type="tel" />
      <BaseField label="Service Address" name="address" required />
      <BaseField label="Email Address" name="email" type="email" />

      <fieldset className="rounded-lg border border-slate-300 p-4">
        <legend className="text-sm font-medium text-slate-800">Services of Interest *</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {services.map(s=><label key={s} className="flex items-center gap-2 rounded-md px-2 py-1 text-sm hover:bg-slate-50"><input type="checkbox" name="services" value={s}/> {s}</label>)}
        </div>
      </fieldset>

      <label className="block text-sm font-medium text-slate-800">Desired Frequency *
        <select name="frequency" required className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-3 text-sm">
          <option value="">Select</option><option>Weekly</option><option>Biweekly</option><option>Monthly</option><option>Seasonal</option><option>Custom</option>
        </select>
      </label>

      <label className="block text-sm font-medium text-slate-800">Property Type *
        <select name="propertyType" required className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-3 text-sm">
          <option value="">Select</option><option>Residential</option><option>Commercial</option><option>Other</option>
        </select>
      </label>

      <label className="block text-sm font-medium text-slate-800">Notes / Needs / Special Requests
        <textarea name="notes" className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-3 text-sm" rows={4}></textarea>
      </label>
      <label className="block text-sm font-medium text-slate-800">Photo Upload (optional)
        <input type="file" name="photo" accept="image/*" className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-3 text-sm" />
      </label>

      {err && <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{err}</p>}
      <button className="w-full rounded-md bg-brand-600 px-4 py-3 text-base font-semibold text-white hover:bg-brand-700 sm:w-auto" type="submit">Submit Subscription Inquiry</button>
    </form>
  );
}