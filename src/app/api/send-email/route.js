import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// Static array (shared with check-availability, replace with database)
let bookedAppointments = [
  { date: "2025-07-01", time: "10:00 am" },
  { date: "2025-07-01", time: "12:00 pm" },
];

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

    // Validate required fields
    if (!name || !email || !phone || !selectedDate || !selectedTime) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // Check if time slot is already booked
    if (bookedAppointments.some((item) => item.date === selectedDate && item.time === selectedTime)) {
      return NextResponse.json({ message: "Selected time is already booked" }, { status: 400 });
    }

    // Add new booking to array (replace with database insert)
    bookedAppointments.push({ date: selectedDate, time: selectedTime });

    // Send email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: "yourdestinationemail@example.com", // Replace with actual email
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
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error in send-email:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}