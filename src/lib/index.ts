import { getCollection } from "astro:content";

export const urlNames = (name: string) => {
	return name.split(" ").join("-");
};

// Get all the posts
export async function getPosts(lang: string) {
	const posts = (
		await getCollection("blog", ({ id }) => {
			return id.startsWith(lang);
		})
	).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

	return posts;
}

export async function onSubmit(
	e: React.FormEvent<HTMLFormElement>,
	setSending: React.Dispatch<React.SetStateAction<boolean>>,
) {
	e.preventDefault();
	const form = e.currentTarget; // Capture the form element reference
	const formData = new FormData(form);
	setSending(true);

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const values: { [key: string]: any } = {};
	formData.forEach((value, key) => {
		values[key] = value;
	});

	try {
		const res = await fetch("/api/sendEmail.json", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ values }),
		});

		if (res.status === 200) {
			setSending(false);
			const alert = window.confirm(
				"Gracias por su cooperación. En breve nos prepararemos para crear su proyecto/presupuesto",
			);

			if (alert) {
				console.log("Resetting form");
				form.reset(); // Use the captured form reference to reset
			}
		} else {
			console.error("Error with fetch request:", res.status, res.statusText);
			setSending(false); // Ensure to set sending to false in case of an error as well
		}
	} catch (error) {
		console.error("Fetch error:", error);
		setSending(false); // Ensure to set sending to false in case of an error as well
	}
}
