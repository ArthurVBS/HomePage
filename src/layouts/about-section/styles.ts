import styled from 'styled-components'

export const Container = styled.section`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.background};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  min-height: 80vh;
`

export const Image = styled.img`
  width: 100%;
  max-width: 256px;
`
