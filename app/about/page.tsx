
'use client';
import { Clock, MapPin, PhoneCall, Mail, Award, Users, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                        About <span className="text-spektr-cyan-50">Hoxha Solutions</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        Your trusted partner for notary services, immigration assistance, insurance solutions, and tax preparation in Weymouth, Massachusetts.
                    </p>
                </div>
            </div>

            {/* Mission & Values */}
            <div className="bg-muted/30 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
                        <p className="text-lg text-muted-foreground text-center leading-relaxed mb-12">
                            At Hoxha Solutions, we believe that professional services should be accessible, reliable, and tailored to your unique needs. 
                            Whether you need notarization for important documents, assistance with immigration forms, comprehensive insurance coverage, 
                            or expert tax preparation, we're here to provide the expertise and personal attention you deserve.
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-spektr-cyan-50/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Shield className="w-8 h-8 text-spektr-cyan-50" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Trusted & Certified</h3>
                                <p className="text-muted-foreground">Licensed professionals with the credentials and experience to handle your most important documents.</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-16 h-16 bg-spektr-cyan-50/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-8 h-8 text-spektr-cyan-50" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Personal Service</h3>
                                <p className="text-muted-foreground">We take the time to understand your needs and provide personalized solutions for your specific situation.</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-16 h-16 bg-spektr-cyan-50/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-spektr-cyan-50" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Reliable Results</h3>
                                <p className="text-muted-foreground">Accurate, timely, and professional service you can count on for all your business and personal needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Overview */}
            <div className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                <Award className="w-12 h-12 text-spektr-cyan-50 mb-4" />
                                <h3 className="text-xl font-semibold mb-3">Notary Public</h3>
                                <p className="text-muted-foreground">Professional notarization services for all your legal documents and business needs.</p>
                            </div>
                            
                            <div className="border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                <Users className="w-12 h-12 text-spektr-cyan-50 mb-4" />
                                <h3 className="text-xl font-semibold mb-3">Immigration Assistance</h3>
                                <p className="text-muted-foreground">Expert form preparation and guidance for your immigration journey.</p>
                            </div>
                            
                            <div className="border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                <Shield className="w-12 h-12 text-spektr-cyan-50 mb-4" />
                                <h3 className="text-xl font-semibold mb-3">Insurance Solutions</h3>
                                <p className="text-muted-foreground">Comprehensive coverage options for individuals and businesses.</p>
                            </div>
                            
                            <div className="border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                <CheckCircle className="w-12 h-12 text-spektr-cyan-50 mb-4" />
                                <h3 className="text-xl font-semibold mb-3">Tax & Financial</h3>
                                <p className="text-muted-foreground">Professional tax preparation and bookkeeping services.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-muted/30 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Contact us today to discuss your needs and learn how we can help you with your notary, immigration, insurance, or tax requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button size="lg" className="gap-2">
                                    Get in Touch
                                </Button>
                            </Link>
                            <Link href="/services">
                                <Button size="lg" variant="outline" className="gap-2">
                                    View Services
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Business Info */}
            <div className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">Visit Our Office</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-spektr-cyan-50/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <MapPin className="w-8 h-8 text-spektr-cyan-50" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Location</h3>
                                <p className="text-muted-foreground">
                                    150 Union St<br />
                                    Weymouth, MA 02190
                                </p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-16 h-16 bg-spektr-cyan-50/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Clock className="w-8 h-8 text-spektr-cyan-50" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Hours</h3>
                                <p className="text-muted-foreground">
                                    Mon-Fri: 9:00 AM - 5:00 PM<br />
                                    Saturday: 10:00 AM - 2:00 PM<br />
                                    Sunday: Closed
                                </p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-16 h-16 bg-spektr-cyan-50/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <PhoneCall className="w-8 h-8 text-spektr-cyan-50" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Contact</h3>
                                <p className="text-muted-foreground">
                                    <Link href="tel:+16174618048" className="hover:text-foreground transition">
                                        (617) 461-8048
                                    </Link><br />
                                    <Link href="mailto:hoxhasolutions@outlook.com" className="hover:text-foreground transition">
                                        hoxhasolutions@outlook.com
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}