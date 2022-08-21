import styled, { css } from 'styled-components'

interface ContainerProps {
  active: boolean
}

export const Container = styled.button<ContainerProps>`
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
