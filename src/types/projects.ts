export type projectType = {
  id: number
  title: string
  description: string
  images: string[]
  techs: string[]
  github: {
    repo: string
    website: {
      available: boolean
      url: string
    }
  }
}
