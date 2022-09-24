import styled from 'styled-components'

export const Container = styled.div`
  overflow: auto;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  scroll-snap-type: y mandatory;

  @media (min-width: 768px) {
    height: 100%;
    max-height: 100vh;
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
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 16px;

  @media (min-width: 768px) {
    width: 50%;
  }
`

export const Image = styled.img`
  max-width: 250px;
  flex-grow: 1;
  padding: 16px;
  margin: 0 auto;
`
