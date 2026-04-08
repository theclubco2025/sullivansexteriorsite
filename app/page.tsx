import { business, services } from "@/config/site";

export default function HomePage() {
  return (
    <>
      <section className="bg-brand-50"><div className="container-shell py-14">
        <h1 className="text-3xl font-bold">Clean, reliable property care from Sacramento to Tahoe.</h1>
        <p className="mt-3 text-slate-700">Call now or request a quote. Recurring service plans available.</p>
        <div className="mt-4 flex gap-3">
          <a href="/contact" className="rounded bg-brand-600 text-white px-4 py-2">Request a Quote</a>
          <a href={business.phoneHref} className="rounded border px-4 py-2">Call Now</a>
        </div>
      </div></section>
      <section className="container-shell py-12"><h2 className="text-2xl font-bold">Services</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">{services.map(s=><li key={s} className="border rounded p-3">{s}</li>)}</ul>
      </section>
    </>
  );
}
