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
	const formData = new FormData(e.currentTarget);
	setSending(true);
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const values: { [key: string]: any } = {};

	formData.forEach((value, key) => {
		values[key] = value;
	});

	const res = await fetch("/api/sendEmail.json", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			values,
		}),
	});

	if (res.status === 200) {
		setSending(false);
		const alert = window.confirm(
			"Gracias por su coperacion. En breve nos prepararemos para crear su projecto/presupuesto",
		);

		if (alert) {
			e.currentTarget.reset();
		}
	}
}
