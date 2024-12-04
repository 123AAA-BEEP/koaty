import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, city } = body;

    // Validate required fields
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `New Contact Form Submission - ${service}${city ? ` in ${city}` : ''}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        ${city ? `<p><strong>City:</strong> ${city}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send auto-reply to customer
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank You for Contacting Koat Painters',
      html: `
        <h2>Thank You for Contacting Koat Painters</h2>
        <p>Dear ${name},</p>
        <p>Thank you for your interest in our ${service.toLowerCase()} services${
          city ? ` in ${city}` : ''
        }. We have received your message and will get back to you within 24 hours.</p>
        <p>Here's a summary of your request:</p>
        <ul>
          <li>Service: ${service}</li>
          ${city ? `<li>Location: ${city}</li>` : ''}
          <li>Phone: ${phone}</li>
        </ul>
        <p>If you need immediate assistance, please call us at ${
          process.env.NEXT_PUBLIC_COMPANY_PHONE
        }.</p>
        <p>Best regards,<br>Koat Painters Team</p>
      `,
    };

    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
} 