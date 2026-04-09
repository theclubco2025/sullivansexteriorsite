import type { Metadata } from "next";
import "./globals.css";
import { business } from "@/config/site";

export const metadata: Metadata = {
  title: { default: `${business.shortName} | Exterior Cleaning and Landscape`, template: `%s | ${business.shortName}` },
  description: "Local exterior cleaning and landscape services from Sacramento to Tahoe."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50">
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="container-shell flex items-center justify-between py-4">
            <a href="/" className="text-base font-bold text-brand-800 sm:text-lg">{business.shortName}</a>
            <div className="flex items-center gap-2">
              <a href={business.phoneHref} className="rounded-md border border-brand-700 px-3 py-2 text-sm font-semibold text-brand-800 hover:bg-brand-50">Call Now</a>
              <a href="/contact" className="rounded-md bg-brand-600 px-3 py-2 text-sm font-semibold text-white hover:bg-brand-700">Request Quote</a>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-20 border-t border-brand-900/10 bg-brand-900 text-brand-50">
          <div className="container-shell grid gap-8 py-12 md:grid-cols-3">
            <div>
              <h2 className="text-lg font-semibold text-white">{business.officialName}</h2>
              <p className="mt-3 text-sm text-brand-100">Dependable exterior cleaning and landscape service with clear communication and reliable scheduling.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-100">Business Info</h3>
              <p className="mt-3 text-sm">Phone: <a className="underline text-white" href={business.phoneHref}>{business.phoneDisplay}</a></p>
              <p className="text-sm">Hours: {business.hours}</p>
              <p className="text-sm">Service Area: {business.serviceRegion}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-100">Quick Links</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a className="hover:text-white" href="/">Home</a></li>
                <li><a className="hover:text-white" href="/services">Services</a></li>
                <li><a className="hover:text-white" href="/service-area">Service Area</a></li>
                <li><a className="hover:text-white" href="/contact">Request Quote</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}