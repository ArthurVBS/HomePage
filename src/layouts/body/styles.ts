import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (min-width: 628px) {
    flex-direction: row;
  }
`
