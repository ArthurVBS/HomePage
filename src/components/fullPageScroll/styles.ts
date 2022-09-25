import styled from 'styled-components'

export const Container = styled.div`
  overflow: auto;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  border: 2px solid ${props => props.theme.primary};
  border-left: none;

  @media (min-width: 768px) {
    height: 100%;
    max-height: calc(100vh - 40px); // 40px is the height of the footer
  }
`

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  scroll-snap-align: start;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;

    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }

  &:nth-child(odd) {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.background};
  }

  @media (min-width: 992px) {
    flex-wrap: nowrap;
  }
`

export const Nav = styled.nav`
  color: inherit;
  width: 100%;
  display: none;
  padding: 16px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  @media (min-width: 992px) {
    position: absolute;
    top: 0;
    left: 0;
  }
`

export const Link = styled.a`
  color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  transition: color 0.4s, background-color 0.4s;

  &:hover {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.primary};
  }

  i {
    font-size: 1.4em;
  }
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
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
  max-width: 100%;
  flex-grow: 1;
  padding: 16px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 50%;
  }
`
