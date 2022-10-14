import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
    margin: 64px 0px;
  }
`

export const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  flex-grow: 2;
  font-weight: 500;
  padding: 8px;
  width: 100%;

  @media (min-width: 768px) {
    text-align: right;
    font-size: 3em;
    padding: 0px;
  }

  span {
    font-style: italic;
    font-weight: 300;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 256px;
  max-height: 256px;
  margin: auto;
  border-radius: 4px;
`
