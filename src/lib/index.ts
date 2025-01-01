import { getCollection, type CollectionEntry, getEntry } from 'astro:content'

// Constants Imports
import { servicesResponse, servicesResponseEnglish } from '@/constants'

/**
+ * Replaces spaces in a string with hyphens.
+ *
+ * @param {string} name - The string to modify.
+ * @return {string} The modified string with hyphens instead of spaces.
+ */
export const urlNames = (name: string): string => {
  return name.split(' ').join('-').toLowerCase()
}

export const desUrlNames = (name: string, capitalize: boolean): string => {
  return capitalize
    ? name.split('-').join(' ')
    : name
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

/**
+ * Retrieves an array of blog posts in a specified language.
+ *
+ * @param {string} lang - The language of the blog posts to retrieve.
+ * @return {Promise<Array<CollectionEntry<'blog'>>>} A promise that resolves to an array of blog posts.
+ */
export async function getPosts(
  lang: string
): Promise<Array<CollectionEntry<'blog'>>> {
  const posts = (
    await getCollection('blog', ({ data }) => {
      return data.language === lang
    })
  ).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())

  return posts
}

/**
 * Retrieves an array of services in a specified language.
 *
 * @param {string} lang - The language of the services to retrieve.
 * @return {Promise<Array<CollectionEntry<"services">>>} A promise that resolves to an array of services.
 */
export async function getServices(
  lang: string
): Promise<Array<CollectionEntry<'services'>>> {
  const services = await getCollection('services', ({ id }) => {
    return id.startsWith(lang)
  })

  return services
}

/**
 * Retrieves an array of projects in a specified language.
 *
 * @param {string} lang - The language of the projects to retrieve.
 * @return {Promise<Array<CollectionEntry<"projects">>>} A promise that resolves to an array of projects.
 */
export async function getProjects(
  lang: string
): Promise<Array<CollectionEntry<'projects'>>> {
  const projects = (
    await getCollection('projects', ({ id }) => id.startsWith(lang))
  ).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())

  return projects
}

/**
 * Retrieves a collection entry by its id and language.
 *
 * @param {string} id - The id of the collection entry.
 * @return {Promise<CollectionEntry<"projects"> | undefined>} A promise that resolves to the collection entry.
 */
export async function getCollecionBySlug(
  id: string
): Promise<CollectionEntry<'projects'> | undefined> {
  const projects = await getEntry('projects', id)
  return projects
}

export const handleResponseFromQuery = (
  service: string | null,
  lang: string
) => {
  const serviceList = lang === 'es' ? servicesResponse : servicesResponseEnglish

  const serviceEntry = serviceList.find((entry) => entry.service === service)

  return serviceEntry ? serviceEntry.response : null
}

export function generateWhatsAppLink(message: string) {
  // Base URL para WhatsApp
  const baseUrl = 'https://wa.me/34647317214?text='
  // Codifica el mensaje para que sea seguro en la URL
  const encodedMessage = encodeURIComponent(message)
  // Devuelve el enlace completo
  return baseUrl + encodedMessage
}

export function generateEmailLink(subject: string, body: string) {
  // Base URL para email
  const baseUrl = 'mailto:adrian.alvarezalonso1991@gmail.com'
  // Codifica el asunto y el cuerpo del mensaje para que sean seguros en la URL
  const encodedSubject = encodeURIComponent(subject)
  const encodedBody = encodeURIComponent(body)
  // Devuelve el enlace completo
  return `${baseUrl}?subject=${encodedSubject}&body=${encodedBody}`
}
