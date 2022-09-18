export type projectType = {
  id: number
  title: string
  description: string
  image: {
    src: string
    alt: string
  }
  techs: string[]
  github: {
    repo: string
    website: {
      available: boolean
      url: string
    }
  }
}
