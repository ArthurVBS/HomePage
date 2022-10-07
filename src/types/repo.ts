export type RepoType = {
  id: number
  title: string
  description: string
  image: string
  github: GithubType
  technologies: TechnologiesType[]
}

type GithubType = {
  repo: string
  site?: string
}

type TechnologiesType = {
  name: string
  icon: string
}
