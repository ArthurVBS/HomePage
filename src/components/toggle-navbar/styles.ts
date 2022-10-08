import styled from 'styled-components'

export const Container = styled.button`
  background-color: transparent;
  color: ${props => props.theme.background};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  border: none;

  @media (min-width: 768px) {
    display: none;
  }
`
