import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, visitorId, userAgent, language, screen, timezone } = await req.json();

  // Telegram bot token va chat id
  const token = "8332103517:AAFkQ0oh0k4L0RUgu7mVlu54ZOFH0XC8k4k";
  const chatId = 991729905;

  const message = `
📌 Portfolio Visitor
👤 Name: ${name || "Unknown"}
🆔 ID: ${visitorId}
🌍 Timezone: ${timezone}
🖥 Screen: ${screen}
🕒 Language: ${language}
💻 UserAgent: ${userAgent}
`;

  // Telegramga jo‘natish
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: message }),
  });

  return NextResponse.json({ status: "ok" });
}
