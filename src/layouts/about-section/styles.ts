import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.background};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  min-height: 60vh;
`
