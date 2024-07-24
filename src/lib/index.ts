import { getCollection, type CollectionEntry } from "astro:content";

/**
+ * Replaces spaces in a string with hyphens.
+ *
+ * @param {string} name - The string to modify.
+ * @return {string} The modified string with hyphens instead of spaces.
+ */
export const urlNames = (name: string): string => {
	return name.split(" ").join("-");
};

/**
+ * Retrieves an array of blog posts in a specified language.
+ *
+ * @param {string} lang - The language of the blog posts to retrieve.
+ * @return {Promise<Array<CollectionEntry<'blog'>>>} A promise that resolves to an array of blog posts.
+ */
export async function getPosts(
	lang: string,
): Promise<Array<CollectionEntry<"blog">>> {
	const posts = (
		await getCollection("blog", ({ id }) => {
			return id.startsWith(lang);
		})
	).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

	return posts;
}

/**
+ * Submits a form and sends the form data to the server via a POST request.
+ *
+ * @param {React.FormEvent<HTMLFormElement>} e - The form event triggered by the submit action.
+ * @param {React.Dispatch<React.SetStateAction<boolean>>} setSending - A function to update the sending state.
+ * @return {Promise<void>} A promise that resolves when the form submission is complete.
+ */
export async function onSubmit(
	e: React.FormEvent<HTMLFormElement>,
	setSending: React.Dispatch<React.SetStateAction<boolean>>,
): Promise<void> {
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
