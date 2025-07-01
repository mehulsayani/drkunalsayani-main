import { MongoClient } from "mongodb";

export async function POST(req) {
  try {
    const { date } = await req.json();
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db("appointments");
    const bookedTimes = await db
      .collection("bookings")
      .find({ date })
      .project({ time: 1, _id: 0 })
      .toArray()
      .map((item) => item.time);
    await client.close();
    return NextResponse.json({ bookedTimes });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Failed to fetch booked times" }, { status: 500 });
  }
}