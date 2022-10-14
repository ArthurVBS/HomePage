import styled from 'styled-components'

export const Container = styled.section`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  min-height: 80vh;
`
