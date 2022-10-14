import styled from 'styled-components'

export const Container = styled.section`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  min-height: 80vh;
`
