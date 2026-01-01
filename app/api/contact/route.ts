import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { status: "error", message: "All fields are required" },
        { status: 400 }
      );
    }

    const BOT_TOKEN = "8332103517:AAFkQ0oh0k4L0RUgu7mVlu54ZOFH0XC8k4k";
    const CHAT_ID = 991729905;

    if (!BOT_TOKEN || !CHAT_ID) {
      return NextResponse.json(
        { status: "error", message: "Bot token or chat ID not set" },
        { status: 500 }
      );
    }

    const text = `📩 New Contact Message\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

    const res = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text }),
      }
    );

    if (!res.ok) throw new Error("Telegram API request failed");

    return NextResponse.json({ status: "success" });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { status: "error", message: "Failed to send message" },
      { status: 500 }
    );
  }
}
