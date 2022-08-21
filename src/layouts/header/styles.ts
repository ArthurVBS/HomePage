import styled from 'styled-components'

export const Container = styled.header`
  color: ${props => props.theme.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  text-align: center;

  @media (min-width: 628px) {
    display: none;
  }
`
