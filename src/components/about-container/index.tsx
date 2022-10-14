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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          tempore nulla, corrupti cum amet ipsa pariatur libero velit veniam
          similique, eveniet ad sapiente mollitia obcaecati alias nisi, facere
          officiis doloribus.
        </Paragraph>
      </Box>
      <Box>
        <Subtitle>Academy</Subtitle>
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          tempore nulla, corrupti cum amet ipsa pariatur libero velit veniam
          similique, eveniet ad sapiente mollitia obcaecati alias nisi, facere
          officiis doloribus.
        </Paragraph>
      </Box>
    </Container>
  )
}

export default AboutContainer
