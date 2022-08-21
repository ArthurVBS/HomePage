import React from 'react'
import { Container, MailToLink, Paragraph, Subtitle, Title } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Olá</Title>
      <Subtitle>(hello)</Subtitle>
      <Paragraph>
        I'm Arthur Silva, full-stack developer.
        <br />I program websites using tech to make lives easier.
      </Paragraph>
      <MailToLink href="mailto:arthurvini2703@gmail.com?subject=Hello">
        hello@arthurvbs.email.dev
      </MailToLink>
    </Container>
  )
}

export default Home
