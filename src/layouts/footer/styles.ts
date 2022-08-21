import styled from 'styled-components'

export const Container = styled.footer`
  background-color: ${props => props.theme.background};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  border-top: 2px solid ${props => props.theme.primary};
  margin-top: 16px;
  gap: 16px;
  padding: 8px;

  @media (min-width: 628px) {
    border-top: none;
    margin-top: none;
  }
`

export const Text = styled.p`
  color: ${props => props.theme.text};
  font-weight: 700;
  text-align: center;
  opacity: 0.7;
  transition: all 0.4s;
  padding: 0;

  &:hover {
    opacity: 1;
  }

  a {
    color: ${props => props.theme.primary};
    text-decoration: none;
    transition: all 0.4s;

    &:hover {
      letter-spacing: 1px;
    }
  }
`

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`

export const Link = styled.a`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.background};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1em;
  border-radius: 8px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border: none;
  opacity: 0.7;
  transition: all 0.4s;

  &:hover {
    opacity: 1;
  }
`

export const Button = styled.button`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.background};
  font-size: 1.1em;
  border-radius: 8px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border: none;
  opacity: 0.7;
  transition: all 0.4s;

  &:hover {
    opacity: 1;
  }
`
