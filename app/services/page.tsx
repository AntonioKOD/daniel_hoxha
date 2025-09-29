
'use client';
import { Award, Users, Shield, Calculator, CheckCircle, AlertTriangle, PhoneCall, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Services(){
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                        Our <span className="text-spektr-cyan-50">Services</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        Professional solutions for all your notary, immigration, insurance, and tax needs in Weymouth, Massachusetts.
                    </p>
                </div>
            </div>

            {/* Notary Public Services */}
            <div className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-spektr-cyan-50/10 rounded-full flex items-center justify-center">
                                        <Award className="w-6 h-6 text-spektr-cyan-50" />
                                    </div>
                                    <h2 className="text-3xl font-bold">Notary Public Services</h2>
                                </div>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Professional notarization services for all your legal documents. We provide in-person notarization 
                                    with signers physically present in Massachusetts, ensuring compliance with state requirements.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-spektr-cyan-50 mt-0.5 flex-shrink-0" />
                                        <span>In-person notarization (signers must be physically present in Massachusetts)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-spektr-cyan-50 mt-0.5 flex-shrink-0" />
                                        <span>Acknowledgments, jurats, oaths/affirmations</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-spektr-cyan-50 mt-0.5 flex-shrink-0" />
                                        <span>Witnessing signatures on contracts, affidavits, and sworn statements</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-spektr-cyan-50 mt-0.5 flex-shrink-0" />
                                        <span>Apostille facilitation (helping clients prepare documents for apostille submission)</span>
                                    </li>
                                </ul>
                                <Link href="/contact">
                                    <Button size="lg" className="gap-2">
                                        Schedule Notarization
                                    </Button>
                                </Link>
                            </div>
                            <div className="bg-muted/30 rounded-2xl p-8">
                                <h3 className="text-xl font-semibold mb-4">What to Bring</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Valid government-issued photo ID</li>
                                    <li>• Documents to be notarized (unsigned)</li>
                                    <li>• Any required witnesses (if applicable)</li>
                                    <li>• Payment for notary fees</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Immigration Services */}
            <div className="bg-muted/30 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-2xl p-6 mb-6">
                                    <div className="flex items-start gap-3">
                                        <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Important Disclaimer</h4>
                                            <p className="text-sm text-red-700 dark:text-red-300">
                                                We are not attorneys and do not provide legal advice. Our services are limited to form preparation and guidance.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-spektr-cyan-50/10 rounded-full flex items-center justify-center">
                                        <Users className="w-6 h-6 text-spektr-cyan-50" />
                                    </div>
                                    <h2 className="text-3xl font-bold">Immigration Form Preparation</h2>
                                </div>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Expert assistance with immigration form preparation and guidance. We help you navigate the complex 
                                    immigration process with accurate form completion and submission support.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-spektr-cyan-50 mt-0.5 flex-shrink-0" />
                                        <span>Family petitions (I-130, I-485, etc.)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-spektr-cyan-50 mt-0.5 flex-shrink-0" />
                                        <span>Marriage-based green card applications</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-spektr-cyan-50 mt-0.5 flex-shrink-0" />
                                        <span>Adjustment of status forms</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-spektr-cyan-50 mt-0.5 flex-shrink-0" />
                                        <span>Naturalization applications (N-400)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-spektr-cyan-50 mt-0.5 flex-shrink-0" />
                                        <span>DS-160 visa form assistance</span>
                                    </li>
                                </ul>
                                <Link href="/contact">
                                    <Button size="lg" className="gap-2">
                                        Get Immigration Help
                                    </Button>
                                </Link>
                            </div>
                            <div className="order-1 lg:order-2 bg-background rounded-2xl p-8">
                                <h3 className="text-xl font-semibold mb-4">Our Process</h3>
                                <ol className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 bg-spektr-cyan-50 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</span>
                                        <span>Initial consultation to understand your needs</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 bg-spektr-cyan-50 text-white rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                                        <span>Document review and preparation guidance</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 bg-spektr-cyan-50 text-white rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                                        <span>Form completion and accuracy review</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 bg-spektr-cyan-50 text-white rounded-full flex items-center justify-center text-sm font-semibold">4</span>
                                        <span>Submission guidance and follow-up support</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Insurance Services */}
            <div className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-spektr-cyan-50/10 rounded-full flex items-center justify-center">
                                        <Shield className="w-6 h-6 text-spektr-cyan-50" />
                                    </div>
                                    <h2 className="text-3xl font-bold">Insurance Services</h2>
                                </div>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Licensed Property & Casualty insurance services in Massachusetts. We provide comprehensive coverage 
                                    solutions for individuals and businesses, tailored to your specific needs and budget.
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <h3 className="font-semibold mb-3">Personal Insurance</h3>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li>• Auto insurance (personal & commercial)</li>
                                            <li>• Homeowners and renters insurance</li>
                                            <li>• Specialty insurance (boat, watch/jewelry)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-3">Business Insurance</h3>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li>• Commercial insurance (restaurants, trucking, contractors, retail)</li>
                                            <li>• Landlord policies</li>
                                            <li>• Workers&apos; compensation & liability coverage</li>
                                        </ul>
                                    </div>
                                </div>
                                <Link href="/contact">
                                    <Button size="lg" className="gap-2">
                                        Get Insurance Quote
                                    </Button>
                                </Link>
                            </div>
                            <div className="bg-muted/30 rounded-2xl p-8">
                                <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-spektr-cyan-50 mt-0.5 flex-shrink-0" />
                                        <span>Licensed in Massachusetts</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-spektr-cyan-50 mt-0.5 flex-shrink-0" />
                                        <span>Multiple carrier options</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-spektr-cyan-50 mt-0.5 flex-shrink-0" />
                                        <span>Personalized service</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-spektr-cyan-50 mt-0.5 flex-shrink-0" />
                                        <span>Competitive rates</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tax & Financial Services */}
            <div className="bg-muted/30 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-spektr-cyan-50/10 rounded-full flex items-center justify-center">
                                        <Calculator className="w-6 h-6 text-spektr-cyan-50" />
                                    </div>
                                    <h2 className="text-3xl font-bold">Tax & Financial Services</h2>
                                </div>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Comprehensive tax preparation and financial services for individuals and small businesses. 
                                    We handle everything from simple tax returns to complex business bookkeeping and payroll setup.
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <h3 className="font-semibold mb-3">Tax Preparation</h3>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li>• Individual tax preparation (1040, state returns)</li>
                                            <li>• Business tax preparation (LLCs, sole proprietors)</li>
                                            <li>• Small business tax services</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-3">Bookkeeping & Payroll</h3>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li>• Restaurant bookkeeping</li>
                                            <li>• Trucking company accounting</li>
                                            <li>• Contractor financial management</li>
                                            <li>• Payroll setup and reporting</li>
                                        </ul>
                                    </div>
                                </div>
                                <Link href="/contact">
                                    <Button size="lg" className="gap-2">
                                        Start Tax Services
                                    </Button>
                                </Link>
                            </div>
                            <div className="order-1 lg:order-2 bg-background rounded-2xl p-8">
                                <h3 className="text-xl font-semibold mb-4">Industries We Serve</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center p-4 border rounded-lg">
                                        <h4 className="font-semibold mb-2">Restaurants</h4>
                                        <p className="text-sm text-muted-foreground">Full-service bookkeeping and tax prep</p>
                                    </div>
                                    <div className="text-center p-4 border rounded-lg">
                                        <h4 className="font-semibold mb-2">Trucking</h4>
                                        <p className="text-sm text-muted-foreground">Specialized accounting for transportation</p>
                                    </div>
                                    <div className="text-center p-4 border rounded-lg">
                                        <h4 className="font-semibold mb-2">Contractors</h4>
                                        <p className="text-sm text-muted-foreground">Construction business financial management</p>
                                    </div>
                                    <div className="text-center p-4 border rounded-lg">
                                        <h4 className="font-semibold mb-2">Small Business</h4>
                                        <p className="text-sm text-muted-foreground">General business accounting services</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact CTA */}
            <div className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Contact us today to discuss your specific needs and learn how we can help you with our professional services.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Link href="/contact">
                                <Button size="lg" className="gap-2">
                                    Contact Us
                                </Button>
                            </Link>
                            <Link href="tel:+16174618048">
                                <Button size="lg" variant="outline" className="gap-2">
                                    <PhoneCall className="w-4 h-4" />
                                    Call (617) 461-8048
                                </Button>
                            </Link>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <MapPin className="w-8 h-8 text-spektr-cyan-50 mx-auto mb-3" />
                                <h3 className="font-semibold mb-2">Visit Our Office</h3>
                                <p className="text-muted-foreground">
                                    150 Union St<br />
                                    Weymouth, MA 02190
                                </p>
                            </div>
                            <div>
                                <Clock className="w-8 h-8 text-spektr-cyan-50 mx-auto mb-3" />
                                <h3 className="font-semibold mb-2">Business Hours</h3>
                                <p className="text-muted-foreground">
                                    Mon-Fri: 9:00 AM - 5:00 PM<br />
                                    Saturday: 10:00 AM - 2:00 PM
                                </p>
                            </div>
                            <div>
                                <PhoneCall className="w-8 h-8 text-spektr-cyan-50 mx-auto mb-3" />
                                <h3 className="font-semibold mb-2">Get in Touch</h3>
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