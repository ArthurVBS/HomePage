import styled from 'styled-components'

interface Props {
  isOpen: boolean
}

export const Container = styled.nav<Props>`
  background-color: ${props => props.theme.secondary};
  z-index: 10;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  transition: 0.4s transform;
  transform: ${props => (props.isOpen ? 'translateY(0%)' : 'translateY(100%)')};

  @media screen and (min-width: 768px) {
    position: static;
    min-width: inherit;
    min-height: inherit;
    flex-direction: row;
    transform: none;
  }
`

export const InternalLink = styled.a`
  color: ${props => props.theme.background};
  letter-spacing: 1px;
  font-size: 1.2em;
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
