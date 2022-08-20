import styled, { css } from 'styled-components'

interface ContainerProps {
  isOpen: boolean
}

interface ButtonProps {
  active: boolean
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
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  transition: 0.4s transform;
  transform: ${props => (props.isOpen ? 'translateX(0%)' : 'translateX(100%)')};

  @media screen and (min-width: 628px) {
    position: static;
    min-width: initial;
    min-height: initial;
    transform: none;
  }
`

export const Button = styled.button<ButtonProps>`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  font-size: 1.1em;
  padding: 8px;
  border: none;
  transition: color 0.3s ease-in-out, background-color 0.2s ease-in-out;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 1px;
    gap: 4px;

    i {
      color: ${props => props.theme.primary};
    }
  }

  i {
    color: ${props => props.theme.background};
  }

  :hover {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.background};

    i {
      color: ${props => props.theme.background};
    }
  }

  ${props =>
    props.active &&
    css`
      i {
        color: ${props => props.theme.primary};
      }
    `}
`

export const ArrowIcon = styled.i``
