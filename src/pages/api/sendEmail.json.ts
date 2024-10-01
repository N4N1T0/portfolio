import type { APIRoute } from "astro";
import { Resend } from "resend";

// Resend API key
const resend = new Resend(import.meta.env.RESEND_API_KEY);

/**
+ * Handles the POST request to send an email.
+ * @return {Promise<Response>} A promise that resolves to the response.
+ */
export const POST: APIRoute = async ({ request }): Promise<Response> => {
  const body = await request.json();

  try {
    const send = await resend.emails.send({
      from: "booking@nanofighters.club",
      to: "adrian.alvarezalonso1991@gmail.com",
      subject: "New Client Form",
      html: `
      <h1>New Client Form</h1>
      <p>${JSON.stringify(body.values)}</p>
    `,
    });

    if (send.data) {
      return new Response(
        JSON.stringify({
          message: send.data,
        }),
        {
          status: 200,
          statusText: "OK",
        },
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: error,
      }),
      {
        status: 500,
        statusText: "Internal Server Error",
      },
    );
  }

  return new Response();
};
