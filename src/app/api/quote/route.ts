// src/app/api/quote/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    if (data.website) return NextResponse.json({ ok: true }, { status: 200 }); // honeypot
    console.log("New quote request:", data);
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }
}

