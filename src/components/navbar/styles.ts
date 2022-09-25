import styled from 'styled-components'

interface ContainerProps {
  isOpen: boolean
}

export const Container = styled.nav<ContainerProps>`
  background-color: ${props => props.theme.background};
  z-index: 10;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  padding-top: 16px;
  padding-bottom: 16px;
  transition: 0.4s transform;
  transform: ${props => (props.isOpen ? 'translateX(0%)' : 'translateX(100%)')};

  @media screen and (min-width: 768px) {
    position: static;
    min-width: initial;
    min-height: initial;
    transform: none;
  }
`
