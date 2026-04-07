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

  const { error } = await resend.emails.send({
    from: "feedback@pohwp.dev",
    to: TO_EMAIL,
    subject: "New Message From A Visitor: " + subject,
    text: "From: " + from + "\nMessage: " + message,
  });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ success: true });
}
