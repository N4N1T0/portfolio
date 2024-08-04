import { z, defineCollection, reference } from "astro:content";

// Typescript for the Blog Content
const blogCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z
				.string()
				.max(
					60,
					"For optimze SEO, please provide a title with 60 characters or less",
				),
			date: z.date(),
			excerpt: z
				.string()
				.max(
					160,
					"For optimze SEO, please provide a excerpt/description with 160 characters or less",
				),
			author: z.string(),
			image: image(),
			imageAlt: z.string(),
		}),
});

// Typescript for the Services
const serviceCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			name: z
				.string()
				.max(
					60,
					"For optimze SEO, please provide a title with 60 characters or less",
				),
			excerpt: z
				.string()
				.max(
					160,
					"For optimze SEO, please provide a excerpt/description with 160 characters or less",
				),
			image: image(),
			imageAlt: z.string(),
			techStack: z.array(
				z.object({
					link: z.string(),
					title: z.string(),
					image: z.string(),
				}),
			),
			quote: z.string(),
			projects: z.union([z.array(z.string()), z.string()]),
		}),
});

// Typescript for the Projects
const projects = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z
				.string()
				.max(
					60,
					"For optimze SEO, please provide a title with 60 characters or less",
				),
			date: z.date(),
			excerpt: z
				.string()
				.max(
					160,
					"For optimze SEO, please provide a excerpt/description with 160 characters or less",
				),
			image: image(),
			imageSecondary: image(),
			imageAlt: z.string(),
			liveLink: z.string().url(),
			repoLink: z.string().url(),
			mainColor: z.string(),
			secondaryColor: z.string(),
			techStack: z.array(
				z.object({
					link: z.string().url(),
					title: z.string(),
					info: z.string(),
				}),
			),
			testimonial: z.object({
				name: z.string(),
				quote: z.string(),
				role: z.string(),
			}),
		}),
});

export const collections = {
	blog: blogCollection,
	services: serviceCollection,
	projects: projects,
};
