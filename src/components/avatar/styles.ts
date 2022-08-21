import styled from 'styled-components'

export const Image = styled.img`
  border-radius: 50%;
  border: 2px solid ${props => props.theme.primary};
  max-width: 128px;
  margin: 0 auto;

  @media (min-width: 628px) {
    border: none;
  }
`
