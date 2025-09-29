
import { Metadata } from 'next';
import { Clock, MapPin, PhoneCall, Award, Users, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Hoxha Solutions - Professional Services in Weymouth, MA",
  description: "Learn about Hoxha Solutions, your trusted partner for notary services, immigration assistance, insurance solutions, and tax preparation in Weymouth, Massachusetts.",
  keywords: [
    "about hoxha solutions",
    "notary public weymouth",
    "immigration services massachusetts",
    "insurance weymouth ma",
    "tax preparation weymouth",
    "professional services weymouth"
  ],
  openGraph: {
    title: "About Hoxha Solutions - Professional Services in Weymouth, MA",
    description: "Learn about Hoxha Solutions, your trusted partner for notary services, immigration assistance, insurance solutions, and tax preparation in Weymouth, Massachusetts.",
    url: "https://hoxhasolutions.com/about",
  },
};

export default function About() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-20" aria-labelledby="about-hero">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 id="about-hero" className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                        About <span className="text-spektr-cyan-50">Hoxha Solutions</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        Your trusted partner for notary services, immigration assistance, insurance solutions, and tax preparation in Weymouth, Massachusetts.
                    </p>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="bg-muted/30 py-20" aria-labelledby="mission">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 id="mission" className="text-3xl font-bold text-center mb-12">Our Mission</h2>
                        <p className="text-lg text-muted-foreground text-center leading-relaxed mb-12">
                            At Hoxha Solutions, we believe that professional services should be accessible, reliable, and tailored to your unique needs. 
                            Whether you need notarization for important documents, assistance with immigration forms, comprehensive insurance coverage, 
                            or expert tax preparation, we&apos;re here to provide the expertise and personal attention you deserve.
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-8" role="list" aria-label="Our core values">
                            <article className="text-center" role="listitem">
                                <div className="w-16 h-16 bg-spektr-cyan-50/10 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                                    <Shield className="w-8 h-8 text-spektr-cyan-50" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Trusted & Certified</h3>
                                <p className="text-muted-foreground">Licensed professionals with the credentials and experience to handle your most important documents.</p>
                            </article>
                            
                            <article className="text-center" role="listitem">
                                <div className="w-16 h-16 bg-spektr-cyan-50/10 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                                    <Users className="w-8 h-8 text-spektr-cyan-50" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Personal Service</h3>
                                <p className="text-muted-foreground">We take the time to understand your needs and provide personalized solutions for your specific situation.</p>
                            </article>
                            
                            <article className="text-center" role="listitem">
                                <div className="w-16 h-16 bg-spektr-cyan-50/10 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                                    <CheckCircle className="w-8 h-8 text-spektr-cyan-50" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Reliable Results</h3>
                                <p className="text-muted-foreground">Accurate, timely, and professional service you can count on for all your business and personal needs.</p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-20" aria-labelledby="services-overview">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 id="services-overview" className="text-3xl font-bold text-center mb-12">What We Do</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" role="list" aria-label="Our services">
                            <article className="border rounded-2xl p-6 hover:shadow-lg transition-shadow" role="listitem">
                                <Award className="w-12 h-12 text-spektr-cyan-50 mb-4" aria-hidden="true" />
                                <h3 className="text-xl font-semibold mb-3">Notary Public</h3>
                                <p className="text-muted-foreground">Professional notarization services for all your legal documents and business needs.</p>
                            </article>
                            
                            <article className="border rounded-2xl p-6 hover:shadow-lg transition-shadow" role="listitem">
                                <Users className="w-12 h-12 text-spektr-cyan-50 mb-4" aria-hidden="true" />
                                <h3 className="text-xl font-semibold mb-3">Immigration Assistance</h3>
                                <p className="text-muted-foreground">Expert form preparation and guidance for your immigration journey.</p>
                            </article>
                            
                            <article className="border rounded-2xl p-6 hover:shadow-lg transition-shadow" role="listitem">
                                <Shield className="w-12 h-12 text-spektr-cyan-50 mb-4" aria-hidden="true" />
                                <h3 className="text-xl font-semibold mb-3">Insurance Solutions</h3>
                                <p className="text-muted-foreground">Comprehensive coverage options for individuals and businesses.</p>
                            </article>
                            
                            <article className="border rounded-2xl p-6 hover:shadow-lg transition-shadow" role="listitem">
                                <CheckCircle className="w-12 h-12 text-spektr-cyan-50 mb-4" aria-hidden="true" />
                                <h3 className="text-xl font-semibold mb-3">Tax & Financial</h3>
                                <p className="text-muted-foreground">Professional tax preparation and bookkeeping services.</p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="bg-muted/30 py-20" aria-labelledby="contact-cta">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 id="contact-cta" className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Contact us today to discuss your needs and learn how we can help you with your notary, immigration, insurance, or tax requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" aria-label="Contact us for more information">
                                <Button size="lg" className="gap-2">
                                    Get in Touch
                                </Button>
                            </Link>
                            <Link href="/services" aria-label="View our services">
                                <Button size="lg" variant="outline" className="gap-2">
                                    View Services
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Info */}
            <section className="py-20" aria-labelledby="business-info">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 id="business-info" className="text-3xl font-bold text-center mb-12">Visit Our Office</h2>
                        <div className="grid md:grid-cols-3 gap-8" role="list" aria-label="Business information">
                            <article className="text-center" role="listitem">
                                <div className="w-16 h-16 bg-spektr-cyan-50/10 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                                    <MapPin className="w-8 h-8 text-spektr-cyan-50" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Location</h3>
                                <address className="text-muted-foreground not-italic">
                                    150 Union St<br />
                                    Weymouth, MA 02190
                                </address>
                            </article>
                            
                            <article className="text-center" role="listitem">
                                <div className="w-16 h-16 bg-spektr-cyan-50/10 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                                    <Clock className="w-8 h-8 text-spektr-cyan-50" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Hours</h3>
                                <div className="text-muted-foreground">
                                    <p>Mon-Fri: 9:00 AM - 5:00 PM</p>
                                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </article>
                            
                            <article className="text-center" role="listitem">
                                <div className="w-16 h-16 bg-spektr-cyan-50/10 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                                    <PhoneCall className="w-8 h-8 text-spektr-cyan-50" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Contact</h3>
                                <div className="text-muted-foreground">
                                    <p>
                                        <Link href="tel:+16174618048" className="hover:text-foreground transition" aria-label="Call us at (617) 461-8048">
                                            (617) 461-8048
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href="mailto:hoxhasolutions@outlook.com" className="hover:text-foreground transition" aria-label="Email us at hoxhasolutions@outlook.com">
                                            hoxhasolutions@outlook.com
                                        </Link>
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>
        </div>
            </section>
        </main>
    );
}