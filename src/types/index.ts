export interface Project {
  name: string
  image: string
  link: string
}

export interface TechStack {
  link: string
  title: string
  image: string
}

export interface ProjectTechStack extends Omit<TechStack, 'image'> {
  info: string
}
