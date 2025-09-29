import { NextResponse } from 'next/server';

export async function GET() {
  const faqData = {
    "@context": "https://schema.org",
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
      },
      {
        "@type": "Question",
        "name": "Are you licensed to provide insurance services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we are licensed Property & Casualty insurance providers in Massachusetts, offering comprehensive coverage options for individuals and businesses."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide services to businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide business services including commercial insurance, business tax preparation, bookkeeping, and payroll services. We specialize in restaurants, trucking companies, contractors, and other small businesses."
        }
      },
      {
        "@type": "Question",
        "name": "What is apostille facilitation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Apostille facilitation helps clients prepare documents for apostille submission, which is the process of authenticating documents for use in foreign countries that are part of the Hague Convention."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer same-day notary services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend calling ahead to schedule notary services to ensure availability. While we may be able to accommodate same-day requests, it's best to call (617) 461-8048 to confirm availability."
        }
      }
    ]
  };

  return NextResponse.json(faqData, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
