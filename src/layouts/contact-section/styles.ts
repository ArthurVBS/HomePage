import styled from 'styled-components'

export const Container = styled.section`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  min-height: 60vh;
`
