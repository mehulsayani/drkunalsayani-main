import { NextResponse } from "next/server";

// Replace with your DB logic
let bookedAppointments = [
  { date: "2025-07-01", time: "10:00 am" },
  { date: "2025-07-01", time: "12:00 pm" },
];

export async function POST(req) {
  const { date } = await req.json();

  // Filter already booked slots for the given date
  const bookedTimes = bookedAppointments
    .filter((item) => item.date === date)
    .map((item) => item.time);

  return NextResponse.json({ bookedTimes });
}
