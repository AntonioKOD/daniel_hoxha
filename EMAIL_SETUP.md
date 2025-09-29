# Email Setup Instructions

## Gmail SMTP Configuration

To enable the contact form to send emails, you need to set up Gmail SMTP with an App Password.

### Step 1: Create Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Gmail SMTP Configuration
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
CONTACT_EMAIL=hoxhasolutions@outlook.com
```

### Step 2: Generate Gmail App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Factor Authentication if not already enabled
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Select "Mail" and "Other (Custom name)" 
5. Enter "Hoxha Solutions Contact Form"
6. Copy the generated 16-character password
7. Use this password as your `GMAIL_APP_PASSWORD`

### Step 3: Configure Email Addresses

- `GMAIL_USER`: Your Gmail address that will send the emails
- `GMAIL_APP_PASSWORD`: The 16-character app password from Step 2
- `CONTACT_EMAIL`: The email address where contact form submissions will be received (can be the same as GMAIL_USER)

### Step 4: Test the Setup

1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the contact form
4. Check both your Gmail inbox and the contact email inbox

### Email Features

The contact form will send:
1. **Notification email** to your business email with all form details
2. **Confirmation email** to the customer (only if their email is different from your business email)

Both emails are professionally formatted with your business branding and contact information.

**Important:** The customer will only receive one email (the confirmation email). The notification email goes only to your business email to prevent duplicate emails to customers.

### Troubleshooting

- Make sure 2-Factor Authentication is enabled on your Gmail account
- Double-check the App Password is exactly 16 characters
- Ensure the `.env.local` file is in the project root directory
- Check the server console for any error messages
