# 📧 Real Email OTP Setup Guide

To receive OTP codes in your actual email inbox, follow these steps to set up EmailJS:

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. In EmailJS dashboard, click **"Add New Service"**
2. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook** 
   - **Yahoo**
   - Or any SMTP service
3. Follow the connection wizard
4. Note down your **Service ID** (e.g., `service_gmail123`)

### Step 3: Create Email Template
1. Go to **"Email Templates"** → **"Create New Template"**
2. Use this template:

```html
Subject: Your CivicReport OTP Code

Hello {{to_name}},

Your verification code for CivicReport is:

🔐 {{otp_code}}

This code will expire in {{expiry_minutes}} minutes.

If you didn't request this code, please ignore this email.

Best regards,
{{from_name}}
CivicReport Team
```

3. Save the template and note the **Template ID** (e.g., `template_abc123`)

### Step 4: Get Public Key
1. Go to **"Account"** → **"General"**
2. Copy your **Public Key** (e.g., `user_xyz789`)

### Step 5: Update Configuration
Open `/services/emailService.ts` and update the configuration:

```typescript
private readonly emailjsConfig = {
  serviceId: 'service_gmail123',     // Your Service ID
  templateId: 'template_abc123',     // Your Template ID  
  publicKey: 'user_xyz789'           // Your Public Key
};
```

## 🎯 Template Variables

Make sure your EmailJS template includes these variables:
- `{{to_email}}` - Recipient's email
- `{{to_name}}` - Recipient's name  
- `{{otp_code}}` - The 6-digit OTP
- `{{app_name}}` - App name (CivicReport)
- `{{expiry_minutes}}` - Expiry time (5)
- `{{from_name}}` - Sender name

## 🔧 Installation

Add EmailJS to your project:

```bash
npm install @emailjs/browser
```

## ✅ Testing

1. Update the configuration in `emailService.ts`
2. Try logging in with your email
3. Check your inbox for the OTP
4. If it doesn't work, check:
   - EmailJS service is connected
   - Template variables are correct
   - No typos in the configuration

## 🚨 Troubleshooting

**Email not received?**
- Check spam/junk folder
- Verify EmailJS service is active
- Test template in EmailJS dashboard

**Getting errors?**
- Check browser console for error messages
- Verify all configuration values
- Ensure EmailJS service has sending permissions

**Rate limits?**
- Free EmailJS accounts have monthly limits
- Consider upgrading for production use

## 🔒 Security Notes

- EmailJS public key is safe to use in frontend
- Never expose private keys or SMTP credentials
- For production, consider server-side email sending
- Monitor your EmailJS usage dashboard

## 💡 Alternative Services

If you prefer other email services:
- **SendGrid** - Professional email API
- **AWS SES** - Amazon's email service
- **Resend** - Modern email API
- **Nodemailer** - For Node.js backends

---

**Note:** The app will fall back to demo mode (showing OTP in browser) if EmailJS is not configured or fails. This ensures the app always works for testing purposes.