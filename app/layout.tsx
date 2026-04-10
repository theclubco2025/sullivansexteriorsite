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
        <header className="sticky top-0 z-40 border-b border-brand-900/10 bg-white/90 backdrop-blur">
          <div className="container-shell py-4 flex items-center justify-between">
            <a href="/" className="flex items-center" aria-label={`${business.officialName} home`}>
              <img src="/logo.png" alt={`${business.officialName} logo`} className="h-14 w-auto object-contain sm:h-16" />
            </a>
            <div className="flex items-center gap-2">
              <a href={business.phoneHref} className="rounded-md border border-brand-700 px-3 py-2 text-sm font-semibold text-brand-800 hover:bg-brand-50">Call Now</a>
              <a href="/contact" className="rounded-md bg-brand-600 px-3 py-2 text-sm font-semibold text-white hover:bg-brand-700">Request Quote</a>
            </div>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}