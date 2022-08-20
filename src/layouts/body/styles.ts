import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (min-width: 628px) {
    flex-direction: row;
  }
`

export const LeftBox = styled.div`
  background-color: ${props => props.theme.background};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
  width: 100%;

  @media (min-width: 628px) {
    width: calc(100% / 3); // 33.3%
    min-height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    border-right: 2px solid ${props => props.theme.primary};
  }

  @media (min-width: 1024px) {
    width: calc(100% / 5); // 20%
  }
`

export const RightBox = styled.div`
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
