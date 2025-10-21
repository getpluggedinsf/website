// src/app/api/vcard/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Steiner;Mark;;;",
    "FN:Mark Steiner",
    "ORG:PluggedIn Pros",
    "TITLE:Founder",
    "TEL;TYPE=CELL,VOICE:+1-415-527-6200",
    "EMAIL;TYPE=INTERNET:hello@getpluggedinsf.com",
    "URL:https://getpluggedinsf.com",
    "ADR;TYPE=WORK:;;San Francisco;CA;;;USA",
    "NOTE:SMB Tech Support • Wi-Fi • POS • Networking",
    "END:VCARD",
    "",
  ].join("\r\n");

  return new NextResponse(vcard, {
    status: 200,
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="mark-steiner.vcf"',
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "no-store",
    },
  });
}

