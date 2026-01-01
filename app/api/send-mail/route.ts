import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transport.sendMail({
      from: `Your App <${process.env.SMTP_FROM ?? "no-reply@notehub.site"}>`,
      to: email,
      subject: "Welcome to our company!",
      html: `<p>Hello! Thanks for subscribing 🎉</p>`,
      replyTo: email,
    });

    return NextResponse.json({ status: "ok" });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ error: "Email failed to send" }, { status: 500 });
  }
}