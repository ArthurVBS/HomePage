import styled, { css } from 'styled-components'

interface ContainerProps {
  active: boolean
}

export const Container = styled.button<ContainerProps>`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: 1.1em;
  padding: 8px;
  border: none;
  transition: color 0.3s ease-in-out, background-color 0.2s ease-in-out;

  :hover {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.background};

    i {
      color: ${props => props.theme.background};
    }

    @media (min-width: 628px) {
      span {
        color: ${props => props.theme.background};
      }
    }
  }

  ${props =>
    props.active &&
    css`
      span {
        color: ${props => props.theme.primary};
      }

      i {
        color: ${props => props.theme.primary};
      }

      @media (min-width: 628px) {
        span {
          color: ${props => props.theme.text};
        }
      }
    `}

  @media (min-width: 628px) {
    justify-content: space-between;
  }
`

export const Item = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  letter-spacing: 1px;
  gap: 4px;

  @media (min-width: 628px) {
    font-size: initial;
  }
`
export const ItemIcon = styled.i`
  color: ${props => props.theme.primary};
`

export const ArrowIcon = styled.i`
  display: none;

  @media (min-width: 628px) {
    display: initial;
    color: ${props => props.theme.background};
  }
`
