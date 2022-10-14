import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 960px;
  margin: 0 auto;
  gap: 32px;
  padding: 16px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
`

export const Image = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: initial;
    width: 100%;
    height: 100%;
  }
`
