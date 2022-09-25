import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: stretch;
  min-height: 100vh;
  height: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`
