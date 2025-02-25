import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { rateLimit } from '@/utils/rateLimit';

const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500, // Max 500 users per interval
});

export async function POST(req: Request) {
  try {
    // Get IP address for rate limiting
    const ip = req.headers.get('x-forwarded-for') || 'anonymous';

    try {
      await limiter.check(5, ip); // 5 requests per IP per minute
    } catch {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      );
    }

    const { name, email, message } = await req.json();

    // Basic input validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Length validation
    if (name.length > 100 || email.length > 100 || message.length > 5000) {
      return NextResponse.json(
        { error: 'Input length exceeds maximum allowed' },
        { status: 400 }
      );
    }

    // Spam detection (basic)
    const spamTriggers = ['viagra', 'casino', 'lottery', 'winner', 'bitcoin'];
    const containsSpam = spamTriggers.some(
      (trigger) =>
        message.toLowerCase().includes(trigger) ||
        name.toLowerCase().includes(trigger)
    );

    if (containsSpam) {
      return NextResponse.json(
        { error: 'Message detected as spam' },
        { status: 400 }
      );
    }

    console.log('Received form data:', { name, email, message });
    console.log(
      'Using APP PASSWORD:',
      process.env.GMAIL_APP_PASSWORD ? 'Yes' : 'No'
    );

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: 'saatvik333sharma@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Verify SMTP connection
    await transporter.verify();
    console.log('SMTP connection verified');

    // Email content
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'saatvik333sharma@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `From: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9fafb;
                border-radius: 10px;
              }
              .header {
                background-color: #3B82F6;
                color: white;
                padding: 20px;
                border-radius: 10px 10px 0 0;
                margin: -20px -20px 20px -20px;
              }
              .content {
                background-color: white;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              }
              .field {
                margin-bottom: 15px;
              }
              .label {
                font-weight: bold;
                color: #4B5563;
              }
              .value {
                margin-top: 5px;
              }
              .message {
                white-space: pre-wrap;
                background-color: #f3f4f6;
                padding: 15px;
                border-radius: 6px;
              }
              .footer {
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                font-size: 0.875rem;
                color: #6B7280;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin:0;font-size:24px;">New Contact Form Submission</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">From:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value message">${message}</div>
                </div>
              </div>
              <div class="footer">
                <p>This email was sent from your portfolio contact form.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Detailed error:', error);
    return NextResponse.json(
      {
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
