import { business } from "@/config/site";

const services = [
  { title: "Lawn Care", desc: "Routine mowing and cleanup to keep your yard neat and manageable." },
  { title: "Window Cleaning", desc: "Clear, streak-free windows for better light and curb appeal." },
  { title: "Gutter Cleaning", desc: "Debris removal and flow checks to reduce overflow problems." },
  { title: "Solar Panel Cleaning", desc: "Safe panel surface cleaning to support energy performance." },
  { title: "Dryer Vent Cleaning", desc: "Vent cleaning support that improves airflow and reduces buildup." },
  { title: "Exterior Cleaning", desc: "Targeted cleaning for siding, paths, and outdoor surfaces." }
];

const whyChoose = [
  { title: "Reliable scheduling", desc: "Practical service windows and dependable follow-through." },
  { title: "Clear communication", desc: "Straight answers before, during, and after service." },
  { title: "Wide service coverage", desc: "Serving properties from Sacramento to Tahoe." },
  { title: "Recurring options", desc: "Weekly, biweekly, monthly, seasonal, or custom plans." }
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_55%)]" />
        <div className="container-shell relative grid gap-10 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-100">Local Exterior & Landscape Services</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">Clean, reliable property care from Sacramento to Tahoe.</h1>
            <p className="mt-5 max-w-2xl text-brand-50 sm:text-lg">
              {business.shortName} provides practical exterior cleaning and lawn care with clear communication and dependable scheduling.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/contact" className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-brand-900 hover:bg-brand-100">Request a Quote</a>
              <a href={business.phoneHref} className="rounded-md border border-brand-100 bg-brand-700 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-600">Call Now</a>
            </div>
            <ul className="mt-8 grid gap-2 text-sm sm:grid-cols-2">
              <li className="rounded-md border border-white/20 bg-white/10 px-3 py-2"> Free estimates</li>
              <li className="rounded-md border border-white/20 bg-white/10 px-3 py-2"> 7 days a week</li>
              <li className="rounded-md border border-white/20 bg-white/10 px-3 py-2"> 7:00 AM  5:00 PM</li>
              <li className="rounded-md border border-white/20 bg-white/10 px-3 py-2"> Residential minimum starts at $199</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/95 p-6 text-slate-900 shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Sullivans Exterior</p>
            <h2 className="mt-2 text-2xl font-bold">Trusted service, clear process.</h2>
            <div className="mt-6 rounded-xl border border-brand-100 bg-brand-50 p-4">
</div>
            <p className="mt-5 text-sm text-slate-600">Open daily 7:00 AM  5:00 PM  Cash & electronic payment accepted</p>
          </div>
        </div>
      </section>

      <section className="border-y border-brand-100 bg-brand-50">
        <div className="container-shell py-5">
          <ul className="grid gap-2 text-sm font-medium text-brand-900 sm:grid-cols-2 lg:grid-cols-3">
            <li> Free estimates</li>
            <li> Extended service radius available</li>
            <li> Transportation fee may be waived nearby</li>
            <li> Residential minimum starts at $199</li>
            <li> Recurring service available</li>
            <li> Sacramento to Tahoe service area</li>
          </ul>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-shell">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Services built for real property needs</h2>
          <p className="mt-3 max-w-2xl text-slate-700">Professional service cards, easy to scan and compare.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((s) => (
              <article key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-shell">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Why Choose Sullivans Exterior</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {whyChoose.map((w) => (
              <article key={w.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{w.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{w.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-brand-50 to-white py-20">
        <div className="container-shell rounded-2xl border border-brand-200 bg-white p-8 shadow-sm lg:p-10">
          <h2 className="text-3xl font-bold text-brand-900 sm:text-4xl">Keep Your Property Clean Year-Round</h2>
          <p className="mt-4 max-w-3xl text-brand-900/90">
            Ask about weekly, biweekly, monthly, seasonal, or custom recurring plans for ongoing property care.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="/contact#subscription-form" className="rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700">Ask About Recurring Service</a>
            <a href={business.phoneHref} className="rounded-md border border-brand-700 px-5 py-3 text-sm font-semibold text-brand-800 hover:bg-brand-50">Call Now</a>
          </div>
        </div>
      </section>

      <section className="bg-brand-900 py-20">
        <div className="container-shell rounded-2xl border border-brand-700 bg-brand-800 p-8 text-white shadow-xl lg:p-10">
          <h2 className="text-3xl font-bold sm:text-4xl">Get a Free Estimate Today</h2>
          <p className="mt-4 max-w-2xl text-brand-100">Fast follow-up, clear scope, and practical scheduling.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="/contact" className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-brand-900 hover:bg-brand-100">Request a Quote</a>
            <a href={business.phoneHref} className="rounded-md border border-brand-200 bg-brand-700 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-600">Call Now</a>
          </div>
        </div>
      </section>
    </>
  );
}


