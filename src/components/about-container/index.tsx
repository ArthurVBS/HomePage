import React from 'react'
import AboutCard from '../about-card'
import ArrowToBottom from '../arrow-to-bottom'
import { Box, Container, Paragraph, Subtitle } from './styles'

const AboutContainer: React.FC = () => {
  return (
    <Container>
      <AboutCard />
      <ArrowToBottom />

      <Box>
        <Subtitle>About me</Subtitle>
        <Paragraph>
          I'm Arthur Silva and I'm passionate about technology and how it can
          change the world, so I program systems, websites and apps using the
          technology to make lives easier. I'm currently searching for a
          job/interneship as a Developer.
        </Paragraph>
      </Box>

      <Box>
        <Subtitle>Academy</Subtitle>
        <Paragraph>
          I'm a Systems Analysis and Development student at the Federal
          Institute of Pernambuco, Brazil. Currently I'm in the fourth semester
          and I'm looking for an internship or maybe a job. For now, I'm a
          monitor in the Algorithms and Data Structure discipline.
        </Paragraph>
      </Box>
    </Container>
  )
}

export default AboutContainer
