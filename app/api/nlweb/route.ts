import { NextResponse } from 'next/server';

export async function GET() {
  const nlwebData = {
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
    "services": [
      {
        "name": "Notary Public Services",
        "description": "Professional notarization services for legal documents, acknowledgments, jurats, oaths/affirmations, and apostille facilitation.",
        "type": "Notary Public",
        "requirements": [
          "Valid government-issued photo ID",
          "Documents to be notarized (unsigned)",
          "Required witnesses (if applicable)",
          "Payment for notary fees"
        ],
        "process": "In-person notarization with signers physically present in Massachusetts",
        "availability": "By appointment during business hours"
      },
      {
        "name": "Immigration Form Preparation",
        "description": "Expert assistance with family petitions, green cards, N-400, DS-160, and adjustment of status forms.",
        "type": "Immigration Services",
        "forms": [
          "Family petitions (I-130, I-485)",
          "Marriage-based green card applications",
          "Adjustment of status forms",
          "Naturalization applications (N-400)",
          "DS-160 visa forms"
        ],
        "disclaimer": "We are not attorneys and do not provide legal advice. Our services are limited to form preparation and guidance.",
        "process": [
          "Initial consultation to understand your needs",
          "Document review and preparation guidance",
          "Form completion and accuracy review",
          "Submission guidance and follow-up support"
        ]
      },
      {
        "name": "Insurance Services",
        "description": "Licensed Property & Casualty insurance including auto, home, renters, business, and specialty coverage.",
        "type": "Insurance",
        "license": "Massachusetts Licensed",
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
      },
      {
        "name": "Tax & Financial Services",
        "description": "Individual and business tax preparation, bookkeeping, and payroll services for various industries.",
        "type": "Tax Services",
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
    ],
    "faq": [
      {
        "question": "What notary services do you provide?",
        "answer": "We provide professional notarization services including acknowledgments, jurats, oaths/affirmations, witnessing signatures on contracts, affidavits, and sworn statements. We also offer apostille facilitation to help clients prepare documents for apostille submission."
      },
      {
        "question": "Do you help with immigration forms?",
        "answer": "Yes, we provide immigration form preparation assistance for family petitions (I-130, I-485), marriage-based green card applications, adjustment of status forms, naturalization applications (N-400), and DS-160 visa forms. Please note: We are not attorneys and do not provide legal advice."
      },
      {
        "question": "What insurance services do you offer?",
        "answer": "We offer comprehensive Property & Casualty insurance including auto insurance (personal & commercial), homeowners and renters insurance, business insurance for restaurants, trucking, contractors, and retail, specialty insurance (boat, watch/jewelry), landlord policies, and workers' compensation & liability coverage."
      },
      {
        "question": "What tax and financial services do you provide?",
        "answer": "We provide individual tax preparation (1040, state returns), business tax preparation for LLCs and sole proprietors, bookkeeping for restaurants, trucking companies, and contractors, and payroll setup and reporting services."
      },
      {
        "question": "What are your business hours?",
        "answer": "Our business hours are Monday through Friday from 9:00 AM to 5:00 PM, Saturday from 10:00 AM to 2:00 PM, and we are closed on Sundays."
      },
      {
        "question": "Where are you located?",
        "answer": "We are located at 150 Union St, Weymouth, MA 02190. You can reach us by phone at (617) 461-8048 or email at hoxhasolutions@outlook.com."
      },
      {
        "question": "Do I need to make an appointment for notary services?",
        "answer": "We recommend calling ahead to schedule notary services to ensure availability. You can reach us at (617) 461-8048 during our business hours."
      },
      {
        "question": "What should I bring for notary services?",
        "answer": "Please bring a valid government-issued photo ID, the documents to be notarized (unsigned), any required witnesses if applicable, and payment for notary fees."
      }
    ],
    "contact": {
      "phone": "+16174618048",
      "email": "hoxhasolutions@outlook.com",
      "address": "150 Union St, Weymouth, MA 02190",
      "hours": {
        "monday": "9:00 AM - 5:00 PM",
        "tuesday": "9:00 AM - 5:00 PM",
        "wednesday": "9:00 AM - 5:00 PM",
        "thursday": "9:00 AM - 5:00 PM",
        "friday": "9:00 AM - 5:00 PM",
        "saturday": "10:00 AM - 2:00 PM",
        "sunday": "Closed"
      }
    },
    "socialMedia": {
      "instagram": "https://www.instagram.com/hoxhasolutions"
    }
  };

  return NextResponse.json(nlwebData, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
