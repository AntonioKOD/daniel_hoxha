import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Hoxha Solutions - Get in Touch in Weymouth, MA",
  description: "Contact Hoxha Solutions for notary services, immigration assistance, insurance, and tax preparation. Located at 150 Union St, Weymouth, MA. Call (617) 461-8048.",
  keywords: [
    "contact hoxha solutions",
    "notary public weymouth contact",
    "immigration services contact weymouth",
    "insurance contact weymouth ma",
    "tax services contact weymouth",
    "hoxha solutions phone number",
    "notary services weymouth contact"
  ],
  openGraph: {
    title: "Contact Hoxha Solutions - Get in Touch in Weymouth, MA",
    description: "Contact Hoxha Solutions for notary services, immigration assistance, insurance, and tax preparation. Located at 150 Union St, Weymouth, MA.",
    url: "https://hoxhasolutions.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
