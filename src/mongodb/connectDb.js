import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function POST(req) {
  const { date } = await req.json();
  try {
    await client.connect();
    const database = client.db("appointments");
    const collection = database.collection("bookings");
    const bookedTimes = await collection
      .find({ date })
      .project({ time: 1, _id: 0 })
      .toArray();
    return NextResponse.json({ bookedTimes: bookedTimes.map((item) => item.time) });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch availability" }, { status: 500 });
  } finally {
    await client.close();
  }
}