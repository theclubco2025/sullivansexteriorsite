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
      <body>
        <header className="border-b bg-white"><div className="container-shell py-4 flex justify-between">
          <a href="/" className="font-bold text-brand-800">{business.shortName}</a>
          <a href="/contact" className="text-sm font-semibold text-brand-700">Request Quote</a>
        </div></header>
        <main>{children}</main>
        <footer className="border-t bg-slate-50"><div className="container-shell py-8 text-sm">
          <p>{business.shortName} · {business.phoneDisplay}</p><p>{business.hours}</p>
        </div></footer>
      </body>
    </html>
  );
}
