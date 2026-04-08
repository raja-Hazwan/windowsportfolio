import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { from, subject, message } = req.body;

  if (!from || !subject || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const API_KEY = process.env.RESEND_API;
  const TO_EMAIL = process.env.ADMIN_EMAIL;

  if (!API_KEY || !TO_EMAIL) {
    return res.status(500).json({ error: "Server configuration error" });
  }

  const resend = new Resend(API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: "feedback@rajahazwan.my",
      to: TO_EMAIL,
      subject: "You've Got a Message: " + subject,
      text: "From: " + from + "\nMessage: " + message,
    });

    console.log("[send-email] data:", data);
    console.log("[send-email] error:", error);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    if (!data?.id) {
      return res.status(500).json({ error: "Email was not sent — no confirmation ID received from Resend. Check that your domain is verified." });
    }
  } catch (err: any) {
    console.error("[send-email] threw:", err);
    return res.status(500).json({ error: err?.message ?? "Unexpected error" });
  }

  return res.status(200).json({ success: true });
}
