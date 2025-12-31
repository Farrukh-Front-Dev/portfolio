import { NextRequest, NextResponse } from "next/server";

/* ================================
   USER AGENT PARSER
================================= */
function parseUserAgent(ua: string) {
  const isMobile = /Mobi|Android|iPhone/i.test(ua);

  let os = "Unknown OS";
  if (ua.includes("Windows")) os = "Windows";
  else if (ua.includes("Mac OS")) os = "macOS";
  else if (ua.includes("Linux")) os = "Linux";
  else if (ua.includes("Android")) os = "Android";
  else if (ua.includes("iPhone")) os = "iOS";

  let browser = "Unknown Browser";
  if (ua.includes("Chrome") && !ua.includes("Edg")) browser = "Chrome";
  else if (ua.includes("Firefox")) browser = "Firefox";
  else if (ua.includes("Safari") && !ua.includes("Chrome")) browser = "Safari";
  else if (ua.includes("Edg")) browser = "Edge";

  return {
    device: isMobile ? "Mobile" : "Desktop",
    os,
    browser,
  };
}

export async function POST(req: NextRequest) {
  const {
    name,
    visitorId,
    userAgent,
    language,
    screen,
    timezone,
    type = "visit",
    page = "/",
    location: clientLocation = null, // frontenddan kelgan GPS
  } = await req.json();

  /* ================================
     1. IP ADDRESS ANIQLASH
  ================================= */
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  /* ================================
     2. GEO LOCATION (IP orqali, fallback)
  ================================= */
  let ipLocation = "Unknown";
  let isp = "Unknown";

  if (ip !== "unknown") {
    try {
      const geoRes = await fetch(`http://ip-api.com/json/${ip}`);
      const geo = await geoRes.json();
      if (geo.status === "success") {
        ipLocation = `${geo.country} / ${geo.city}`;
        isp = geo.isp;
      }
    } catch {
      // xatolik bo‘lsa sukut saqlanadi
    }
  }

  /* ================================
     3. USER AGENT PARSE
  ================================= */
  const { device, os, browser } = parseUserAgent(userAgent || "");

  /* ================================
     4. EVENT TYPE
  ================================= */
  const eventTitle =
    type === "first_visit" ? "🆕 First Visit" : "🔁 Visit";

  /* ================================
     5. TELEGRAM MESSAGE
  ================================= */
  const message = `
${eventTitle} — Portfolio

👤 Ism: ${name || "Kiritilmagan"}
🆔 Visitor ID: ${visitorId}

📍 Joylashuv (GPS): ${clientLocation ? `${clientLocation.lat}, ${clientLocation.lng}` : "Not Provided"}
📍 Joylashuv (IP): ${ipLocation}
🌐 Internet provayder: ${isp}
🌍 Vaqt zonasi: ${timezone}

📄 Sahifa: ${page}
🖥 Ekran: ${screen}
🗣 Til: ${language}

💻 Qurilma:
— Turi: ${device}
— OS: ${os}
— Brauzer: ${browser}

🕒 Vaqt: ${new Date().toLocaleString()}
`;

  /* ================================
     6. TELEGRAMGA YUBORISH
  ================================= */
  const BOT_TOKEN = process.env.TG_BOT_TOKEN!;
  const CHAT_ID = process.env.TG_CHAT_ID!;

  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
    }),
  });

  return NextResponse.json({ status: "ok" });
}
