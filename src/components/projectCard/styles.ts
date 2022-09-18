import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  flex-grow: 1;
  height: 100%;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-grow: 1;
`

export const Title = styled.h1`
  font-size: 2em;
  text-align: center;
`

export const Description = styled.p`
  text-indent: 1em;
`

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  border-radius: 16px;
`

export const Image = styled.img`
  max-width: 360px;
`
