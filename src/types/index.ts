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

export interface UI {
  [key: string]: {
    [key: string]: {
      heading: string
      description: string
      role?: string
    }
  }
}
