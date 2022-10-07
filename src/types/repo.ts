export type RepoType = {
  id: string
  title: string
  description: string
  image: {
    src: string
    alt: string
  }
  technologies: TechnologiesType[]
}

export type TechnologiesType = {
  name: string
  icon: string
}
