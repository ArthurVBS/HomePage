import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  width: 100%;

  @media (min-width: 768px) {
    width: calc(100% / 4 * 3); // 75%
    flex-grow: initial;
    min-height: 100vh;
  }

  @media (min-width: 992px) {
    width: calc(100% / 5 * 4); // 80%
  }
`
