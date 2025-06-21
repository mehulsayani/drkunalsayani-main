// 1. Create a backend API route using the App Router (e.g., in `/app/api/send-email/route.js`)

import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      selectedDate,
      selectedTime,
      purpose,
      notes,
      visitType,
    } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: "yourdestinationemail@example.com", // Replace with your receiving email
      subject: "New Appointment Booking",
      html: `
        <h3>Appointment Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${selectedDate}</p>
        <p><strong>Time:</strong> ${selectedTime}</p>
        <p><strong>Purpose:</strong> ${purpose}</p>
        <p><strong>Visit Type:</strong> ${visitType}</p>
        <p><strong>Notes:</strong> ${notes || "None"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Failed to send email" }), {
      status: 500,
    });
  }
}
