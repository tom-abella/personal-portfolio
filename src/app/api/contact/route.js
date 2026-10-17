export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const Mailjet = require("node-mailjet");
    const mailjet = new Mailjet({
      apiKey: process.env.MAILJET_API_KEY,
      apiSecret: process.env.MAILJET_API_SECRET,
    });

    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.MAILJET_SENDER_EMAIL || "noreply@tomleonardabella.com",
            Name: name,
          },
          To: [
            {
              Email: process.env.MAILJET_RECEIVER_EMAIL || "tomleonardabella@gmail.com",
              Name: "Tom Leonard Abella",
            },
          ],
          Subject: `Portfolio Contact: ${name}`,
          TextPart: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          HTMLPart: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br>")}</p>`,
        },
      ],
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Mailjet error:", JSON.stringify(error, null, 2));
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Body:", JSON.stringify(error.response.data, null, 2));
    }
    return Response.json(
      { error: "Failed to send email.", details: error.message || "Unknown" },
      { status: 500 }
    );
  }
}
