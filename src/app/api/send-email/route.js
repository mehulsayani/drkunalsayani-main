import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, service, message } = data;

    if (!name || !email || !phone || !service) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Configure your SMTP transporter (example uses Gmail SMTP)
    // Replace these with your actual SMTP details or environment variables
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // your email address
        pass: process.env.EMAIL_PASS, // your email password or app password
      },
    });

    // Email content
    const mailOptions = {
      from: `"Tvameva Consultation" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER, // where to send consultation emails
      subject: `New Consultation Request from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Service Interested: ${service}
Message: ${message || "No message"}
      `,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Interested:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message || "No message"}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
