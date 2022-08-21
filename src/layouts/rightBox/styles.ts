import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  p {
    padding: 16px;
  }

  @media (min-width: 628px) {
    width: calc(100% / 3 * 2); // 66.6%
    min-height: 100vh;
  }

  @media (min-width: 1024px) {
    width: calc(100% / 5 * 4); // 80%
  }
`
