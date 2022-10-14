import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  max-width: 960px;
  margin: 32px auto;
`

export const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 8px;
  gap: 32px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
    margin: 32px 0px;
  }
`

export const Subtitle = styled.h2`
  font-size: 2em;
  letter-spacing: 2px;
`

export const Paragraph = styled.p`
  font-size: 1.2em;
  text-indent: 2em;
  line-height: 2em;
  letter-spacing: 1px;
  word-spacing: 2px;
  text-align: justify;

  @media screen and (min-width: 768px) {
    font-size: 1.4em;
  }
`
