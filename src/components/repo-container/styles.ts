import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const InitialCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: flex-start;
  grid-column: 1/2;
  gap: 32px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    grid-column: 1/3;
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`

export const Title = styled.h2`
  font-size: 2.8em;
  font-weight: 400;
  letter-spacing: 1px;
`

export const Link = styled.a`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.background};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-size: 1.2em;
  padding: 16px 32px;
  opacity: 0.8;
  transition: opacity 0.4s;

  &:hover {
    opacity: 1;
  }

  i {
    font-size: 0.9em;
  }
`

export const Image = styled.img`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`
