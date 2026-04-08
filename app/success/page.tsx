import Link from "next/link";
import { business } from "@/config/site";
export default async function SuccessPage({searchParams}:{searchParams:Promise<{type?:string}>}) {
  const p = await searchParams;
  return <section className="container-shell py-20"><div className="border rounded p-8 text-center">
    <h1 className="text-2xl font-bold">Request Received</h1>
    <p className="mt-3">Thank you. You will receive a call from a representative shortly.</p>
    <p className="mt-2 text-sm text-slate-600">{p.type==="subscription"?"Your recurring service inquiry has been submitted.":"Your quote request has been submitted."}</p>
    <div className="mt-6 flex gap-3 justify-center"><Link href="/" className="border rounded px-4 py-2">Return Home</Link><a href={business.phoneHref} className="rounded bg-brand-600 text-white px-4 py-2">Call Now</a></div>
  </div></section>;
}
