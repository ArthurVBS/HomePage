import React from 'react'
import { useNavbar } from '../../contexts/NavbarContext'
import {
  Card3d,
  Container,
  MailToLink,
  NavLink,
  Paragraph,
  Subtitle,
  Title,
  WrapperParagraph,
} from './styles'

const Home: React.FC = () => {
  const { setActive } = useNavbar()

  const handleClick = (newState: string) => {
    setActive(newState)
  }

  return (
    <Container>
      <Card3d>
        <Title>Olá</Title>
        <Subtitle>(hello)</Subtitle>

        <WrapperParagraph>
          <Paragraph>
            I'm Arthur Silva, full-stack developer.
            <br />I program websites using technology to make lives easier.
          </Paragraph>
          <Paragraph>
            Let's see my{' '}
            <NavLink onClick={() => handleClick('repo')}>repositories</NavLink>{' '}
            or maybe you would like to see my{' '}
            <NavLink onClick={() => handleClick('knowledge')}>
              knowledge
            </NavLink>
            ? The{' '}
            <NavLink onClick={() => handleClick('tech')}>technologies</NavLink>{' '}
            that I work? Come on.
          </Paragraph>
        </WrapperParagraph>

        <MailToLink href="mailto:arthurvini2703@gmail.com?subject=Hello">
          hello@arthurvbs.email.dev
        </MailToLink>
      </Card3d>
    </Container>
  )
}

export default Home
