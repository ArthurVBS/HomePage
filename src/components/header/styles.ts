import styled from 'styled-components'

export const Container = styled.header`
  background: ${props => props.theme.primary};
  color: ${props => props.theme.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  @media (min-width: 768px) {
    padding: 24px 48px;
  }
`

export const Logo = styled.a`
  color: ${props => props.theme.background};
  font-size: 1.8em;
  letter-spacing: 1px;
  font-weight: 400;
`
