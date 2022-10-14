import React from 'react'

import { Container, Image, InitialCard, Link, Texts, Title } from './styles'
import { RepoType } from '../../types/repo'
import RepoCard from '../repo-card'

const RepoContainer: React.FC = () => {
  const repoData = require('../../data/repos.json') as RepoType[]

  const showRepos = () => {
    return repoData.map(repo => {
      return <RepoCard key={repo.id} repo={repo} />
    })
  }

  return (
    <Container>
      <InitialCard>
        <Texts>
          <Title>Repositories</Title>
          <Link
            href="https://github.com/ArthurVBS?tab=repositories&q=&type=public"
            target="_blank"
          >
            Explore <i className="fas fa-long-arrow-alt-right"></i>
          </Link>
        </Texts>
        <Image src="./undraw_code.svg" alt="undraw_code image" />
      </InitialCard>
      {showRepos()}
    </Container>
  )
}

export default RepoContainer
