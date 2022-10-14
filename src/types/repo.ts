export type RepoType = {
  id: number
  title: string
  description: string
  image: string
  github: GithubType
  technologies: TechnologyType[]
}

type GithubType = {
  repo: string
  site?: string
}

type TechnologyType = {
  name: string
  icon: string
}
