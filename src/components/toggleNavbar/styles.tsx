import styled from 'styled-components'

export const Container = styled.button`
  background-color: transparent;
  color: ${props => props.theme.primary};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  min-height: 32px;
  font-size: 1.3em;
  border: none;
  @media screen and (min-width: 628px) {
    display: none;
  }
`
