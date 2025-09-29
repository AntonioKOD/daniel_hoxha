import { NextResponse } from 'next/server';

export async function GET() {
  const servicesData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Hoxha Solutions Services",
    "description": "Complete list of professional services offered by Hoxha Solutions",
    "numberOfItems": 4,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "Notary Public Services",
          "description": "Professional notarization services for legal documents, acknowledgments, jurats, oaths/affirmations, and apostille facilitation.",
          "serviceType": "Notary Public",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Hoxha Solutions",
            "telephone": "+16174618048",
            "email": "hoxhasolutions@outlook.com"
          },
          "areaServed": {
            "@type": "State",
            "name": "Massachusetts"
          },
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://hoxhasolutions.com/services",
            "servicePhone": "+16174618048"
          },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "validFrom": "2024-01-01"
          },
          "details": {
            "requirements": [
              "Valid government-issued photo ID",
              "Documents to be notarized (unsigned)",
              "Required witnesses (if applicable)",
              "Payment for notary fees"
            ],
            "process": "In-person notarization with signers physically present in Massachusetts",
            "types": [
              "Acknowledgments",
              "Jurats",
              "Oaths/Affirmations",
              "Witnessing signatures on contracts",
              "Affidavits and sworn statements",
              "Apostille facilitation"
            ],
            "availability": "By appointment during business hours"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "Immigration Form Preparation",
          "description": "Expert assistance with family petitions, green cards, N-400, DS-160, and adjustment of status forms.",
          "serviceType": "Immigration Services",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Hoxha Solutions",
            "telephone": "+16174618048",
            "email": "hoxhasolutions@outlook.com"
          },
          "disclaimer": "We are not attorneys and do not provide legal advice. Our services are limited to form preparation and guidance.",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "validFrom": "2024-01-01"
          },
          "details": {
            "forms": [
              "Family petitions (I-130, I-485)",
              "Marriage-based green card applications",
              "Adjustment of status forms",
              "Naturalization applications (N-400)",
              "DS-160 visa forms"
            ],
            "process": [
              "Initial consultation to understand your needs",
              "Document review and preparation guidance",
              "Form completion and accuracy review",
              "Submission guidance and follow-up support"
            ],
            "limitations": "Non-legal services with disclaimers"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "Insurance Services",
          "description": "Licensed Property & Casualty insurance including auto, home, renters, business, and specialty coverage.",
          "serviceType": "Insurance",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Hoxha Solutions",
            "telephone": "+16174618048",
            "email": "hoxhasolutions@outlook.com"
          },
          "license": "Massachusetts Licensed",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "validFrom": "2024-01-01"
          },
          "details": {
            "personalInsurance": [
              "Auto insurance (personal & commercial)",
              "Homeowners and renters insurance",
              "Specialty insurance (boat, watch/jewelry)"
            ],
            "businessInsurance": [
              "Commercial insurance (restaurants, trucking, contractors, retail)",
              "Landlord policies",
              "Workers' compensation & liability coverage"
            ],
            "benefits": [
              "Licensed in Massachusetts",
              "Multiple carrier options",
              "Personalized service",
              "Competitive rates"
            ]
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Service",
          "name": "Tax & Financial Services",
          "description": "Individual and business tax preparation, bookkeeping, and payroll services for various industries.",
          "serviceType": "Tax Services",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Hoxha Solutions",
            "telephone": "+16174618048",
            "email": "hoxhasolutions@outlook.com"
          },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "validFrom": "2024-01-01"
          },
          "details": {
            "individualServices": [
              "Individual tax preparation (1040, state returns)",
              "Business tax preparation (LLCs, sole proprietors)",
              "Small business tax services"
            ],
            "businessServices": [
              "Restaurant bookkeeping",
              "Trucking company accounting",
              "Contractor financial management",
              "Payroll setup and reporting"
            ],
            "industries": [
              "Restaurants",
              "Trucking Companies",
              "Contractors",
              "Small Businesses"
            ]
          }
        }
      }
    ]
  };

  return NextResponse.json(servicesData, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
