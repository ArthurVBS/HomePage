import React from 'react'
import { RepoType } from '../../types/repo'
import {
  Container,
  Description,
  DetailsWrapper,
  Image,
  Link,
  Techs,
  TechIcon,
  Texts,
  Title,
  Footer,
  Details,
} from './styles'

type Props = {
  repo: RepoType
}

const RepoCard: React.FC<Props> = ({ repo }) => {
  const showTechIcons = () => {
    return repo.technologies.map((technology, index) => (
      <TechIcon key={index} className={technology.icon}></TechIcon>
    ))
  }

  const showTechNames = () => {
    return repo.technologies.map((technology, index) => (
      <span key={index}>{technology.name}</span>
    ))
  }

  const showSiteLink = () => {
    return (
      repo.github.site && (
        <>
          <span>•</span>
          <Details href={repo.github.site} target="_blank">
            Website <i className="fas fa-external-link-alt"></i>
          </Details>
        </>
      )
    )
  }

  return (
    <Container data-aos="fade-up">
      <Image src={repo.image} alt="Repo Image" />
      <Texts>
        <DetailsWrapper>
          <Techs>{showTechNames()}</Techs>
          {showSiteLink()}
        </DetailsWrapper>
        <Title>{repo.title}</Title>

        <Description>{repo.description}</Description>

        <Footer>
          <Link href={repo.github.repo} target="_blank">
            See More <i className="fas fa-long-arrow-alt-right"></i>
          </Link>

          <Techs>{showTechIcons()}</Techs>
        </Footer>
      </Texts>
    </Container>
  )
}

export default RepoCard
function showSiteLink(): React.ReactNode {
  throw new Error('Function not implemented.')
}
