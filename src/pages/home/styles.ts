import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  gap: 8px;
  padding: 32px 8px;

  @media (min-width: 628px) {
    min-height: initial;
  }
`

export const Title = styled.h1`
  font-size: 6em;
  line-height: 0.8em;
  text-align: center;

  @media (min-width: 628px) {
    font-size: 6.5em;
  }

  @media (min-width: 968px) {
    font-size: 7em;
  }
`

export const Subtitle = styled.h5`
  color: ${props => props.theme.primary};
  text-align: center;
  font-style: italic;

  @media (min-width: 628px) {
    font-size: 0.9em;
  }

  @media (min-width: 968px) {
    font-size: 1em;
  }
`

export const WrapperParagraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
  padding: 16px;
`

export const Paragraph = styled.p`
  text-align: center;

  @media (min-width: 628px) {
    font-size: 1.1em;
    max-width: 80%;
  }

  @media (min-width: 968px) {
    font-size: 1.2em;
    max-width: 60%;
  }
`

export const MailToLink = styled.a`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.primary};
  font-style: italic;
  font-weight: 700;
  padding: 8px 32px;
  margin-top: 16px;
  border: 2px solid ${props => props.theme.primary};
  border-radius: 16px;
  transition: background-color 0.4s, color 0.4s;

  &:hover {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.background};
  }
`

export const NavLink = styled.span`
  color: ${props => props.theme.primary};
  font-style: italic;
  font-weight: 700;
  cursor: pointer;
  text-decoration: underline transparent;
  transition: text-decoration 0.4s;

  &:hover {
    text-decoration: underline;
  }
`
