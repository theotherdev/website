import KVClient from "@/lib/kabeer-cloud";
import { APIRoute } from "astro";
import nodemailer from "nodemailer";

const client = new KVClient();

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();
  const email = data.email;

  if (!email || !/^[\w.-]+@[\w.-]+\.\w+$/.test(email)) {
    return new Response("Invalid email", { status: 400 });
  }

  try {
    await client.create("otherdevemails", email, JSON.stringify({ subscribed: true }));

    // Create a test account or replace with real credentials.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: 'Kabeer from Other Dev <kabeer@otherdev.com>',
      to: email,
      subject: "Thanks for subscribing!",
      text: "You're now on our list. Welcome to the future.",
    });
    await transporter.sendMail({
      from: 'Kabeer from Other Dev <noreply@otherdev.com>',
      to: process.env.NOTIFICATION_EMAIL,
      subject: `${email} subscribed to Other Dev's Website`,
      text: "",
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e: any) {
    return new Response(e.message, { status: 500 });
  }
};