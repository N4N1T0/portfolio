import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
	const body = await request.json();

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

	return new Response(
		JSON.stringify({
			message: send.error,
		}),
		{
			status: 500,
			statusText: "Internal Server Error",
		},
	);
};
