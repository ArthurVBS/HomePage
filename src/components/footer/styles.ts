import styled from 'styled-components'

export const Container = styled.footer`
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 16px;
  min-height: 160px;
`

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

export const ExternalLink = styled.a`
  color: ${props => props.theme.background};
  font-size: 1.2em;
  opacity: 0.8;
  transition: opacity 0.4s;

  &:hover {
    opacity: 1;
  }
`

export const Text = styled.p`
  text-align: center;
  font-weight: 700;
  letter-spacing: 1px;

  span {
    color: ${props => props.theme.primary};
  }

  a {
    color: ${props => props.theme.primary};
    text-decoration: underline transparent;
    transition: text-decoration 0.4s;

    &:hover {
      text-decoration: underline;
    }
  }
`
