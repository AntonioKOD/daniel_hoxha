import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content - Send notification to business email only
    const businessEmail = process.env.CONTACT_EMAIL || process.env.GMAIL_USER;
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: businessEmail,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #00bcd4; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${service ? `<p><strong>Service Needed:</strong> ${service}</p>` : ''}
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #00bcd4; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="background-color: #e8f5e8; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p style="margin: 0; color: #2e7d32;">
              <strong>Next Steps:</strong> Please respond to this inquiry within 24 hours as promised on the website.
            </p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px; text-align: center;">
            This email was sent from the Hoxha Solutions contact form.
          </p>
        </div>
      `,
    };

    // Send notification email to business
    await transporter.sendMail(mailOptions);

    // Send confirmation email to the customer (only if different from business email)
    if (email !== businessEmail) {
      const confirmationMailOptions = {
        from: process.env.GMAIL_USER,
        to: email,
      subject: 'Thank you for contacting Hoxha Solutions',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00bcd4; text-align: center;">Thank You for Contacting Hoxha Solutions</h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p>Dear ${name},</p>
            <p>Thank you for reaching out to Hoxha Solutions. We have received your message and will get back to you within 24 hours.</p>
            
            <div style="background-color: #fff; padding: 15px; border-left: 4px solid #00bcd4; margin: 15px 0;">
              <h3 style="color: #555; margin-top: 0;">Your Message:</h3>
              <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2e7d32; margin-top: 0;">Our Services</h3>
            <ul style="color: #555;">
              <li>Notary Public Services</li>
              <li>Immigration Form Preparation</li>
              <li>Insurance Services (MA Licensed)</li>
              <li>Tax & Financial Services</li>
            </ul>
          </div>
          
          <div style="background-color: #f0f8ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #1976d2; margin-top: 0;">Contact Information</h3>
            <p style="margin: 5px 0;"><strong>Phone:</strong> (617) 461-8048</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> hoxhasolutions@outlook.com</p>
            <p style="margin: 5px 0;"><strong>Address:</strong> 150 Union St, Weymouth, MA 02190</p>
            <p style="margin: 5px 0;"><strong>Hours:</strong> Mon-Fri: 9:00 AM - 5:00 PM, Saturday: 10:00 AM - 2:00 PM</p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px; text-align: center;">
            Hoxha Solutions - Professional Services in Weymouth, MA
          </p>
        </div>
      `,
    };

      await transporter.sendMail(confirmationMailOptions);
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
