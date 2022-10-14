import React from 'react'
import RepoContainer from '../../components/repo-container'
import { Container } from './styles'

const RepoSection: React.FC = () => {
  return (
    <Container id="repos">
      <RepoContainer />
    </Container>
  )
}

export default RepoSection
