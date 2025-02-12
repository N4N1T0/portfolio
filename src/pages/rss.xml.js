import { getPosts } from '@/lib'
import rss from '@astrojs/rss'

export async function GET(context) {
  const enBlog = await getPosts('en')
  const esBlog = await getPosts('es')
  return rss({
    title: 'Adrian Alvarez Blog',
    description:
      'Cuban-born and self-taught, I bring a unique blend of passion and proficiency to development and design. Obsessed with performance and dedicated to crafting clean, impactful designs, my work is a testament to the fusion of skill and creativity.',
    site: context.site,
    trailingSlash: false,
    stylesheet: '/rss/styles.xsl',
    items: [
      ...enBlog.map((post) => ({
        title: post.data.title,
        pubDate: post.data.date.toLocaleDateString('en-US'),
        description: post.data.excerpt,
        href: `/en/blog/${post.id}`
      })),
      ...esBlog.map((post) => ({
        title: post.data.title,
        pubDate: post.data.date.toLocaleDateString('es-ES'),
        description: post.data.excerpt,
        href: `/es/blog/${post.id}`
      }))
    ]
  })
}
