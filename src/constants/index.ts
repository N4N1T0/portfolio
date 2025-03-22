export const shareLinks = [
  {
    label: 'LinkedIn',
    href: (text: string) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(text)}`
  },
  {
    label: 'Twitter',
    href: (text: string) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(text)}`
  },
  {
    label: 'Facebook',
    href: (text: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(text)}`
  }
]

export const socialMedia = [
  {
    href: 'https://github.com/N4N1T0',
    icon: 'https://cdn.simpleicons.org/github/243E61',
    label: 'GitHub'
  },
  {
    href: 'https://stackoverflow.com/users/23143125/n4n1t0',
    icon: 'https://cdn.simpleicons.org/stackoverflow/243E61',
    label: 'Stack Overflow'
  },
  {
    href: 'https://x.com/AdrianlvarezAl1',
    icon: 'https://cdn.simpleicons.org/x/243E61',
    label: 'X (Twitter)'
  },
  {
    href: 'https://dev.to/n4n1t0',
    icon: 'https://cdn.simpleicons.org/devdotto/243E61',
    label: 'Dev.to'
  },
  {
    href: 'https://www.instagram.com/adrian_alvarez_dev/',
    icon: 'https://cdn.simpleicons.org/instagram/243E61',
    label: 'Instagram'
  }
]
