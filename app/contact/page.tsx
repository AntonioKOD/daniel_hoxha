
'use client';
import { useState } from 'react';
import { PhoneCall, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Contact(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                        Get in <span className="text-spektr-cyan-50">Touch</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        Ready to get started with our professional services? Contact us today to discuss your needs 
                        and schedule an appointment at our Weymouth office.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 pb-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                            {isSubmitted ? (
                                <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 text-center">
                                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                                    <h3 className="text-2xl font-semibold text-green-800 dark:text-green-200 mb-2">
                                        Message Sent!
                                    </h3>
                                    <p className="text-green-700 dark:text-green-300">
                                        Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-spektr-cyan-50 focus:border-transparent"
                                                placeholder="Your full name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-spektr-cyan-50 focus:border-transparent"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-spektr-cyan-50 focus:border-transparent"
                                                placeholder="(617) 123-4567"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="service" className="block text-sm font-medium mb-2">
                                                Service Needed
                                            </label>
                                            <select
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-spektr-cyan-50 focus:border-transparent"
                                            >
                                                <option value="">Select a service</option>
                                                <option value="notary">Notary Public Services</option>
                                                <option value="immigration">Immigration Form Preparation</option>
                                                <option value="insurance">Insurance Services</option>
                                                <option value="tax">Tax & Financial Services</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-spektr-cyan-50 focus:border-transparent"
                                            placeholder="Tell us about your needs and how we can help..."
                                        />
                                    </div>
                                    
                                    <Button type="submit" size="lg" className="w-full gap-2">
                                        <Send className="w-4 h-4" />
                                        Send Message
                                    </Button>
                                </form>
                            )}
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Visit our office in Weymouth, MA, or reach out to us by phone or email. 
                                    We&apos;re here to help with all your professional service needs.
                                </p>
                            </div>

                            {/* Contact Cards */}
                            <div className="space-y-6">
                                <div className="border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-spektr-cyan-50/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <PhoneCall className="w-6 h-6 text-spektr-cyan-50" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2">Phone</h3>
                                            <p className="text-muted-foreground mb-3">
                                                Call us for immediate assistance or to schedule an appointment.
                                            </p>
                                            <Link 
                                                href="tel:+16174618048" 
                                                className="text-lg font-medium text-spektr-cyan-50 hover:text-spektr-cyan-50/80 transition"
                                            >
                                                (617) 461-8048
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-spektr-cyan-50/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-6 h-6 text-spektr-cyan-50" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2">Email</h3>
                                            <p className="text-muted-foreground mb-3">
                                                Send us an email and we&apos;ll respond within 24 hours.
                                            </p>
                                            <Link 
                                                href="mailto:hoxhasolutions@outlook.com" 
                                                className="text-lg font-medium text-spektr-cyan-50 hover:text-spektr-cyan-50/80 transition"
                                            >
                                                hoxhasolutions@outlook.com
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-spektr-cyan-50/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-spektr-cyan-50" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2">Office Location</h3>
                                            <p className="text-muted-foreground mb-3">
                                                Visit our office in Weymouth, Massachusetts.
                                            </p>
                                            <address className="not-italic text-lg font-medium text-spektr-cyan-50">
                                                150 Union St<br />
                                                Weymouth, MA 02190
                                            </address>
                                            <Link 
                                                href="https://www.google.com/maps/dir/?api=1&destination=150+Union+St,+Weymouth,+MA+02190"
                                                target="_blank"
                                                className="inline-block mt-2 text-sm text-muted-foreground hover:text-foreground transition"
                                            >
                                                Get Directions →
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-spektr-cyan-50/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-6 h-6 text-spektr-cyan-50" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                                            <div className="text-muted-foreground space-y-1">
                                                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                                                <p>Saturday: 10:00 AM - 2:00 PM</p>
                                                <p>Sunday: Closed</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="bg-muted/30 rounded-2xl p-6">
                                <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
                                <div className="space-y-3">
                                    <Link href="/services">
                                        <Button variant="outline" className="w-full justify-start gap-2">
                                            View Our Services
                                        </Button>
                                    </Link>
                                    <Link href="/about">
                                        <Button variant="outline" className="w-full justify-start gap-2">
                                            Learn About Us
                                        </Button>
                                    </Link>
                                    <Link href="https://www.google.com/maps/dir/?api=1&destination=150+Union+St,+Weymouth,+MA+02190" target="_blank">
                                        <Button variant="outline" className="w-full justify-start gap-2">
                                            Get Directions
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}