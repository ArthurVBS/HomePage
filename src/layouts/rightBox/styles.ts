import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  width: 100%;

  @media (min-width: 628px) {
    width: calc(100% / 3 * 2); // 66.6%
    flex-grow: initial;
    min-height: 100vh;
  }

  @media (min-width: 968px) {
    width: calc(100% / 5 * 4); // 80%
  }
`
