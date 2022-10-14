import styled from 'styled-components'

export const Container = styled.section`
  background: linear-gradient(
    ${props => props.theme.primary} 25%,
    ${props => props.theme.background} 25%
  );
  color: ${props => props.theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  min-height: 60vh;
`
