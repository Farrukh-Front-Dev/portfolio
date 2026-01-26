import { NextRequest, NextResponse } from "next/server";

/* ================================
   USER AGENT PARSER
================================= */
function parseUserAgent(ua: string) {
  const isMobile = /Mobi|Android|iPhone/i.test(ua);
  return {
    device: isMobile ? "Mobile" : "Desktop",
  };
}

export async function POST(req: NextRequest) {
  const {
    name,
    visitorId,
    userAgent,
    screen,
    location: clientLocation = null, // frontenddan kelgan GPS
    type = "visit",
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
  if (ip !== "unknown") {
    try {
      const geoRes = await fetch(`http://ip-api.com/json/${ip}`);
      const geo = await geoRes.json();
      if (geo.status === "success") {
        ipLocation = `${geo.country} / ${geo.city}`;
      }
    } catch {
      // xatolik bo‘lsa sukut saqlanadi
    }
  }

  /* ================================
     3. USER AGENT PARSE
  ================================= */
  const { device } = parseUserAgent(userAgent || "");

  /* ================================
     4. EVENT TYPE
  ================================= */
  const eventTitle = type === "first_visit" ? "🆕 First Visit" : "🔁 Visit";

  /* ================================
     5. TELEGRAM MESSAGE (minimal)
  ================================= */
  const message = `
${eventTitle} — Portfolio

👤 Ism: ${name || "Kiritilmagan"}

📍 Joylashuv: ${ipLocation}

💻 Qurilma: ${device}
🖥 Ekran: ${screen}
`;

  /* ================================
     6. TELEGRAMGA YUBORISH
  ================================= */
  const BOT_TOKEN = "8332103517:AAFkQ0oh0k4L0RUgu7mVlu54ZOFH0XC8k4k";
  const CHAT_ID = 991729905;

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
