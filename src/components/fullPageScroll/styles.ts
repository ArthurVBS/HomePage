import styled from 'styled-components'

export const Container = styled.div`
  overflow: auto;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  scroll-snap-type: y mandatory;
  border: 2px solid ${props => props.theme.primary};
  border-left: none;

  @media (min-width: 768px) {
    height: 100%;
    max-height: calc(100vh - 40px); // 40px is the height of the footer
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  scroll-snap-align: start;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  &:nth-child(odd) {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.background};
  }
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  height: 100%;
  width: 100%;
  padding: 16px;
`

export const Title = styled.h1`
  font-size: 2.5em;
  font-weight: 700;
  text-align: center;
  letter-spacing: 2px;
`

export const Description = styled.p`
  text-indent: 2em;
  text-align: justify;
  font-size: 1.1em;

  &:first-letter {
    font-size: 1.8em;
  }
`

export const Image = styled.img`
  max-width: 50%;
  flex-grow: 1;
  padding: 16px;
  margin: 0 auto;
`
