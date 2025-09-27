'use client';
import { Clock, Instagram, InstagramIcon, Mail, MapPin, PhoneCall } from "lucide-react";
import { FeaturesSectionWithHoverEffects } from "./blocks/feature-section-with-hover-effects";
import { Button } from "./ui/button";
import Link  from "next/link";

export default function Intro(){
        
    return (
        <div>
        <div className="flex text-center flex-col border-t-4 border-spektr-cyan-50 p-8 mt-8">
            <h1 className="text-4xl font-bold">Notary Services</h1>
                <div>
                    <FeaturesSectionWithHoverEffects />
                    <Link href='/services'><Button className="text-lg">Learn More</Button></Link>
                </div>
        </div>

      <footer className="mt-20 border-t bg-background/60 backdrop-blur">
      {/* Accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-spektr-cyan-50 via-foreground to-spektr-cyan-50/60" />

      <div className="container mx-auto px-4 py-12">
        {/* Brand + quick CTA row */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center md:text-left">
            Hoxha Solutions
          </h1>

          <div className="flex items-center gap-3">
            <Link
              href="tel:+16174618048"
              className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-foreground hover:text-background transition"
              aria-label="Call Hoxha Solutions"
            >
              <PhoneCall className="h-4 w-4" />
              Call
            </Link>
            <Link
              href="mailto:hoxhasolutions@outlook.com"
              className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-foreground hover:text-background transition"
              aria-label="Email Hoxha Solutions"
            >
              <Mail className="h-4 w-4" />
              Email
            </Link>
            <Link
              href="https://www.google.com/maps/dir/?api=1&destination=150+Union+St,+Weymouth,+MA+02190"
              className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-foreground hover:text-background transition"
              aria-label="Get directions to 150 Union St, Weymouth, MA 02190"
              target="_blank"
            >
              <MapPin className="h-4 w-4" />
              Directions
            </Link>
          </div>
        </div>

        {/* Info grid */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border p-6">
            <div className="mb-3 flex items-center gap-2 font-semibold">
              <Clock className="h-4 w-4" />
              Business Hours
            </div>
            <ul className="space-y-1 text-sm">
              <li className="flex justify-between"><span>Mon – Fri</span><span>9:00 AM – 5:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday</span><span>10:00 AM – 2:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>Closed</span></li>
            </ul>
          </div>

          <div className="rounded-2xl border p-6">
            <div className="mb-3 flex items-center gap-2 font-semibold">
              <PhoneCall className="h-4 w-4" />
              Contact
            </div>
            <div className="space-y-2 text-sm">
              <p>
                Phone:{" "}
                <Link href="tel:+16174618048" className="underline hover:opacity-80">
                  (617) 461-8048
                </Link>
              </p>
              <p>
                Email:{" "}
                <Link href="mailto:hoxhasolutions@outlook.com" className="underline hover:opacity-80">
                  hoxhasolutions@outlook.com
                </Link>
              </p>
              <p className="flex items-center gap-2">
                Social:{" "}
                <Link
                  href="https://www.instagram.com/hoxhasolutions?igsh=MWI1dzl1NHhyODdteQ%3D%3D&utm_source=qr"
                  aria-label="Instagram"
                  className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs hover:bg-foreground hover:text-background transition"
                  target="_blank"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </Link>
              </p>
            </div>
          </div>

          <div className="rounded-2xl border p-6">
            <div className="mb-3 flex items-center gap-2 font-semibold">
              <MapPin className="h-4 w-4" />
              Location
            </div>
            <address className="not-italic text-sm leading-relaxed">
              150 Union St<br />
              Weymouth, MA 02190
            </address>
            <Link
              href="https://maps.apple.com/?q=150+Union+St,+Weymouth,+MA+02190"
              target="_blank"
              className="mt-3 inline-block text-sm underline hover:opacity-80"
            >
              Open in Maps
            </Link>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 border-t pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Hoxha Solutions. All rights reserved.
        </div>
      </div>
    </footer>
            </div>
    )
}