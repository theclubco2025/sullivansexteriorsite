"use client";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { services } from "@/config/site";

function BaseField({label,name,type="text",required=false}:{label:string;name:string;type?:string;required?:boolean}) {
  return <label className="block text-sm">{label}{required?" *":""}<input className="mt-1 w-full border rounded px-3 py-2" name={name} type={type} required={required} /></label>;
}

export function QuoteForm() {
  const router = useRouter(); const [err,setErr]=useState("");
  async function submit(e:FormEvent<HTMLFormElement>){ e.preventDefault(); setErr("");
    const r=await fetch("/api/quote",{method:"POST",body:new FormData(e.currentTarget)});
    if(!r.ok){ setErr("Could not submit. Please call directly."); return; }
    router.push("/success?type=quote");
  }
  return <form onSubmit={submit} className="space-y-3 border rounded p-4">
    <h2 className="font-semibold">Standard Quote Request</h2>
    <BaseField label="Full Name" name="fullName" required />
    <BaseField label="Phone Number" name="phone" required type="tel" />
    <BaseField label="Service Address" name="address" required />
    <BaseField label="Email Address" name="email" type="email" />
    <label className="block text-sm">Requested Service *<select name="service" required className="mt-1 w-full border rounded px-3 py-2"><option value="">Select</option>{services.map(s=><option key={s} value={s}>{s}</option>)}</select></label>
    <label className="block text-sm">Property Type *<select name="propertyType" required className="mt-1 w-full border rounded px-3 py-2"><option value="">Select</option><option>Residential</option><option>Commercial</option><option>Other</option></select></label>
    <BaseField label="Preferred Timing" name="preferredTiming" />
    <label className="block text-sm">Project Details / Message<textarea name="details" className="mt-1 w-full border rounded px-3 py-2" rows={4}></textarea></label>
    <label className="block text-sm">Photo Upload (optional)<input type="file" name="photo" accept="image/*" className="mt-1 w-full border rounded px-3 py-2" /></label>
    {err && <p className="text-red-700 text-sm">{err}</p>}
    <button className="rounded bg-brand-600 text-white px-4 py-2" type="submit">Submit Quote Request</button>
  </form>;
}

export function SubscriptionForm() {
  const router = useRouter(); const [err,setErr]=useState("");
  async function submit(e:FormEvent<HTMLFormElement>){ e.preventDefault(); setErr("");
    const r=await fetch("/api/subscription",{method:"POST",body:new FormData(e.currentTarget)});
    if(!r.ok){ setErr("Could not submit. Please call directly."); return; }
    router.push("/success?type=subscription");
  }
  return <form id="subscription-form" onSubmit={submit} className="space-y-3 border rounded p-4">
    <h2 className="font-semibold">Recurring / Subscription Service Inquiry</h2>
    <BaseField label="Full Name" name="fullName" required />
    <BaseField label="Phone Number" name="phone" required type="tel" />
    <BaseField label="Service Address" name="address" required />
    <BaseField label="Email Address" name="email" type="email" />
    <fieldset className="border rounded p-2"><legend className="text-sm">Services of Interest *</legend>{services.map(s=><label key={s} className="block text-sm"><input type="checkbox" name="services" value={s} /> {s}</label>)}</fieldset>
    <label className="block text-sm">Desired Frequency *<select name="frequency" required className="mt-1 w-full border rounded px-3 py-2"><option value="">Select</option><option>Weekly</option><option>Biweekly</option><option>Monthly</option><option>Seasonal</option><option>Custom</option></select></label>
    <label className="block text-sm">Property Type *<select name="propertyType" required className="mt-1 w-full border rounded px-3 py-2"><option value="">Select</option><option>Residential</option><option>Commercial</option><option>Other</option></select></label>
    <label className="block text-sm">Notes / Needs / Special Requests<textarea name="notes" className="mt-1 w-full border rounded px-3 py-2" rows={4}></textarea></label>
    <label className="block text-sm">Photo Upload (optional)<input type="file" name="photo" accept="image/*" className="mt-1 w-full border rounded px-3 py-2" /></label>
    {err && <p className="text-red-700 text-sm">{err}</p>}
    <button className="rounded bg-brand-600 text-white px-4 py-2" type="submit">Submit Subscription Inquiry</button>
  </form>;
}
