import React from 'react'
import { RepoType } from '../../types/repo'
import { Container, Description, Image, Texts, Title } from './styles'

type Props = {
  repo: RepoType
}

const RepoCard: React.FC<Props> = ({ repo }) => {
  return (
    <Container>
      <Image src={repo.image.src} alt={repo.image.alt} />
      <Texts>
        <Title>{repo.title}</Title>
        <Description>{repo.description}</Description>
      </Texts>
    </Container>
  )
}

export default RepoCard
