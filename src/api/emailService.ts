interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export class EmailService {
  private static readonly API_URL =
    import.meta.env.VITE_EMAIL_API_URL ||
    "https://portfolio-email-api-ashen.vercel. app/api/send-email";

  static async sendEmail(data: EmailData): Promise<void> {
    const response = await fetch(this.API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to send email");
    }
  }
}
