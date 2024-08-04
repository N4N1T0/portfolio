import { getCollection, type CollectionEntry, getEntry } from "astro:content";

// Constants Imports
import { servicesResponse, servicesResponseEnglish } from "@/constants";

/**
+ * Replaces spaces in a string with hyphens.
+ *
+ * @param {string} name - The string to modify.
+ * @return {string} The modified string with hyphens instead of spaces.
+ */
export const urlNames = (name: string): string => {
	return name.split(" ").join("-").toLowerCase();
};

export const desUrlNames = (name: string, capitalize: boolean): string => {
	return capitalize
		? name.split("-").join(" ")
		: name
				.split("-")
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(" ");
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
 * Retrieves an array of services in a specified language.
 *
 * @param {string} lang - The language of the services to retrieve.
 * @return {Promise<Array<CollectionEntry<"services">>>} A promise that resolves to an array of services.
 */
export async function getServices(
	lang: string,
): Promise<Array<CollectionEntry<"services">>> {
	const services = await getCollection("services", ({ id }) => {
		return id.startsWith(lang);
	});

	return services;
}

/**
 * Retrieves an array of projects in a specified language.
 *
 * @param {string} lang - The language of the projects to retrieve.
 * @return {Promise<Array<CollectionEntry<"projects">>>} A promise that resolves to an array of projects.
 */
export async function getProjects(
	lang: string,
): Promise<Array<CollectionEntry<"projects">>> {
	const projects = await getCollection("projects", ({ id }) =>
		id.startsWith(lang),
	);

	return projects;
}

/**
 * Retrieves a collection entry by its slug and language.
 *
 * @param {string} slug - The slug of the collection entry.
 * @return {Promise<CollectionEntry<"projects"> | undefined>} A promise that resolves to the collection entry.
 */
export async function getCollecionBySlug(
	slug: string,
): Promise<CollectionEntry<"projects"> | undefined> {
	const projects = await getEntry("projects", slug);
	return projects;
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

export const handleResponseFromQuery = (
	service: string | null,
	lang: string,
) => {
	const serviceList =
		lang === "es" ? servicesResponse : servicesResponseEnglish;

	const serviceEntry = serviceList.find((entry) => entry.service === service);

	return serviceEntry ? serviceEntry.response : null;
};

export function generateWhatsAppLink(message: string) {
	// Base URL para WhatsApp
	const baseUrl = "https://wa.me/34647317214?text=";
	// Codifica el mensaje para que sea seguro en la URL
	const encodedMessage = encodeURIComponent(message);
	// Devuelve el enlace completo
	return baseUrl + encodedMessage;
}

export function generateEmailLink(subject: string, body: string) {
	// Base URL para email
	const baseUrl = "mailto:adrian.alvarezalonso1991@gmail.com";
	// Codifica el asunto y el cuerpo del mensaje para que sean seguros en la URL
	const encodedSubject = encodeURIComponent(subject);
	const encodedBody = encodeURIComponent(body);
	// Devuelve el enlace completo
	return `${baseUrl}?subject=${encodedSubject}&body=${encodedBody}`;
}
