// lib/resend.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Sends an email using the Resend API with support for dynamic personalization.
 * 
 * @param {Object} options - Email parameters.
 * @param {string} options.to - Recipient email address.
 * @param {string} options.name - Recipient name (default: "there").
 * @param {string} options.subject - Email subject (default: "No Subject").
 * @param {string} options.message - Email message body (default: "No additional message provided.").
 * @returns {Object} Response from the Resend API.
 * @throws Will throw an error if email sending fails.
 */
export const sendEmail = async ({ to, name = "there", subject = "No Subject", message = "No additional message provided." }) => {
  try {
    // Get the current date in UTC
    const currentDate = new Date().toLocaleString("en-US", {
      timeZone: "UTC",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    // Construct the HTML email content
    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #0056b3;">Hello: ${name},</h2>
        <p style="font-size: 1rem; margin: 1rem 0;">Message:${message}</p>
        <p style="font-size: 0.9rem; color: #555;">Sent on: ${currentDate}</p>
        <hr style="border: 0; border-top: 1px solid #ddd; margin: 1.5rem 0;" />
        <p style="font-size: 0.85rem; color: #888; text-align: center;">
          This email was sent using Resend. If you did not request this email, please ignore it.
        </p>
      </div>
    `;

    // Send the email via Resend API
    const response = await resend.emails.send({
      from: "Waseem@resend.dev", // Replace with your verified sender email
      to: "waseemrauf672@gmail.com",
      subject,
      html,
    });

    // Log success for debugging purposes
    console.log("Email sent successfully:", response);
    return response;
  } catch (error) {
    // Log error details for debugging
    console.error("Failed to send email:", error.message);
    throw new Error("Email sending failed. Please check the provided details and try again.");
  }
};
