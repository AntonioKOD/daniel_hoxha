import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hoxha Solutions - Professional Services in Weymouth, MA",
    template: "%s | Hoxha Solutions"
  },
  description: "Professional notary services, immigration assistance, insurance solutions, and tax preparation in Weymouth, Massachusetts. Licensed and certified services for individuals and businesses.",
  keywords: [
    "notary public weymouth ma",
    "immigration services massachusetts", 
    "insurance weymouth",
    "tax preparation weymouth",
    "notary services near me",
    "immigration forms assistance",
    "business insurance massachusetts",
    "tax services weymouth ma"
  ],
  authors: [{ name: "Hoxha Solutions" }],
  creator: "Hoxha Solutions",
  publisher: "Hoxha Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hoxhasolutions.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hoxhasolutions.com',
    siteName: 'Hoxha Solutions',
    title: 'Hoxha Solutions - Professional Services in Weymouth, MA',
    description: 'Professional notary services, immigration assistance, insurance solutions, and tax preparation in Weymouth, Massachusetts.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Hoxha Solutions Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hoxha Solutions - Professional Services in Weymouth, MA',
    description: 'Professional notary services, immigration assistance, insurance solutions, and tax preparation in Weymouth, Massachusetts.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Hoxha Solutions",
    "description": "Professional notary services, immigration assistance, insurance solutions, and tax preparation in Weymouth, Massachusetts.",
    "url": "https://hoxhasolutions.com",
    "telephone": "+16174618048",
    "email": "hoxhasolutions@outlook.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "150 Union St",
      "addressLocality": "Weymouth",
      "addressRegion": "MA",
      "postalCode": "02190",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "42.2208",
      "longitude": "-70.9395"
    },
    "openingHours": [
      "Mo-Fr 09:00-17:00",
      "Sa 10:00-14:00"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "42.2208",
        "longitude": "-70.9395"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Professional Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Notary Public Services",
            "description": "Professional notarization services for legal documents, acknowledgments, jurats, and apostille facilitation.",
            "serviceType": "Notary Public",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Hoxha Solutions"
            },
            "areaServed": {
              "@type": "State",
              "name": "Massachusetts"
            },
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://hoxhasolutions.com/services",
              "serviceSmsNumber": "+16174618048",
              "servicePhone": "+16174618048"
            }
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Immigration Form Preparation",
            "description": "Expert assistance with family petitions, green cards, N-400, DS-160, and adjustment of status forms.",
            "serviceType": "Immigration Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Hoxha Solutions"
            },
            "disclaimer": "We are not attorneys and do not provide legal advice. Our services are limited to form preparation and guidance."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Insurance Services",
            "description": "Licensed Property & Casualty insurance including auto, home, renters, business, and specialty coverage.",
            "serviceType": "Insurance",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Hoxha Solutions"
            },
            "license": "Massachusetts Licensed"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tax & Financial Services", 
            "description": "Individual and business tax preparation, bookkeeping, and payroll services for various industries.",
            "serviceType": "Tax Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Hoxha Solutions"
            },
            "areaServed": [
              "Restaurants",
              "Trucking Companies", 
              "Contractors",
              "Small Businesses"
            ]
          }
        }
      ]
    },
    "sameAs": [
      "https://www.instagram.com/hoxhasolutions"
    ],
    "image": "https://hoxhasolutions.com/logo.png",
    "logo": "https://hoxhasolutions.com/logo.png",
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What notary services do you provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide professional notarization services including acknowledgments, jurats, oaths/affirmations, witnessing signatures on contracts, affidavits, and sworn statements. We also offer apostille facilitation to help clients prepare documents for apostille submission."
          }
        },
        {
          "@type": "Question",
          "name": "Do you help with immigration forms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide immigration form preparation assistance for family petitions (I-130, I-485), marriage-based green card applications, adjustment of status forms, naturalization applications (N-400), and DS-160 visa forms. Please note: We are not attorneys and do not provide legal advice."
          }
        },
        {
          "@type": "Question",
          "name": "What insurance services do you offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer comprehensive Property & Casualty insurance including auto insurance (personal & commercial), homeowners and renters insurance, business insurance for restaurants, trucking, contractors, and retail, specialty insurance (boat, watch/jewelry), landlord policies, and workers' compensation & liability coverage."
          }
        },
        {
          "@type": "Question",
          "name": "What tax and financial services do you provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide individual tax preparation (1040, state returns), business tax preparation for LLCs and sole proprietors, bookkeeping for restaurants, trucking companies, and contractors, and payroll setup and reporting services."
          }
        },
        {
          "@type": "Question",
          "name": "What are your business hours?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our business hours are Monday through Friday from 9:00 AM to 5:00 PM, Saturday from 10:00 AM to 2:00 PM, and we are closed on Sundays."
          }
        },
        {
          "@type": "Question",
          "name": "Where are you located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We are located at 150 Union St, Weymouth, MA 02190. You can reach us by phone at (617) 461-8048 or email at hoxhasolutions@outlook.com."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to make an appointment for notary services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We recommend calling ahead to schedule notary services to ensure availability. You can reach us at (617) 461-8048 during our business hours."
          }
        },
        {
          "@type": "Question",
          "name": "What should I bring for notary services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Please bring a valid government-issued photo ID, the documents to be notarized (unsigned), any required witnesses if applicable, and payment for notary fees."
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
