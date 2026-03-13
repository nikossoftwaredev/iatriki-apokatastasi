"use server";

import { FULL_NAME, MAIL } from "@/lib/general";

export async function submitContactForm(formData: FormData) {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const service = (formData.get("service") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !message) {
    return { success: false, error: "Παρακαλώ συμπληρώστε όλα τα υποχρεωτικά πεδία." };
  }

  // Send to Discord webhook
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          embeds: [
            {
              title: "📩 Νέο μήνυμα επικοινωνίας",
              color: 0x166534, // primary green
              fields: [
                { name: "Όνομα", value: name, inline: true },
                { name: "Email", value: email, inline: true },
                ...(phone ? [{ name: "Τηλέφωνο", value: phone, inline: true }] : []),
                ...(service ? [{ name: "Υπηρεσία", value: service, inline: true }] : []),
                { name: "Μήνυμα", value: message },
              ],
              timestamp: new Date().toISOString(),
              footer: { text: FULL_NAME },
            },
          ],
        }),
      });
    } catch (error) {
      console.error("Failed to send Discord webhook:", error);
    }
  }

  // Send email notification via Resend (if configured)
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: `${FULL_NAME} <noreply@${process.env.RESEND_DOMAIN || "resend.dev"}>`,
          to: [MAIL],
          subject: `Νέο μήνυμα από ${name}`,
          html: `
            <h2>Νέο μήνυμα επικοινωνίας</h2>
            <p><strong>Όνομα:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Τηλέφωνο:</strong> ${phone}</p>` : ""}
            ${service ? `<p><strong>Υπηρεσία:</strong> ${service}</p>` : ""}
            <p><strong>Μήνυμα:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          `,
        }),
      });
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  }

  return { success: true };
}
