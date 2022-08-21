import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  gap: 8px;
  padding: 32px 8px;
`

export const Title = styled.h1`
  font-size: 5em;
  line-height: 0.8em;
  text-align: center;

  @media (min-width: 628px) {
    font-size: 6em;
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

export const Paragraph = styled.p`
  text-align: center;
  padding: 16px;
  margin-top: 16px;

  @media (min-width: 628px) {
    font-size: 1.1em;
  }

  @media (min-width: 968px) {
    font-size: 1.2em;
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
