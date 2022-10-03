import styled from 'styled-components'

export const Container = styled.header`
  background: ${props => props.theme.primary};
  color: ${props => props.theme.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  @media (min-width: 768px) {
    padding: 24px 48px;
  }
`

export const Logo = styled.h3`
  font-size: 1.8em;
  font-weight: 400;
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

export const InternalLink = styled.a`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.primary};
  font-size: 1.2em;
  font-weight: 700;
  padding: 8px 16px;
  margin-left: 8px;
  border-radius: 2px;
  box-shadow: 1px 1px 2px #00000080;
  transition: transform 0.4s, box-shadow 0.4s;

  &:hover {
    transform: translate3d(-2px, -2px, 0);
    box-shadow: 4px 4px 0 0 #00000080;
  }
`
