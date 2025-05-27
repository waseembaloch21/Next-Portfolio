import { sendEmail } from "@/lib/resend";


export async function POST(request) {
  try {
    const { to, name, subject, message } = await request.json();

    // Validate required fields
    if (!to || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Missing parameters: 'to', 'subject', and 'message' are required." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Log the incoming email request for debugging purposes
    console.log("Sending email:", { to, name, subject, message });

    // Send the email using the sendEmail function
    const emailResponse = await sendEmail({
      to: "waseemrauf672@gmail.com",
      name: name || "there", // Use default name if not provided
      subject,
      message,
    });

    // Log the successful email response
    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Log error details for debugging
    console.error("Error in POST /api/send-email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email. Please try again later." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
