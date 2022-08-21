import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  width: 100%;

  @media (min-width: 628px) {
    width: calc(100% / 3); // 33.3%
    min-height: 100vh;
    height: 100%;
    overflow: visible;
    position: fixed;
    left: 0;
    top: 0;
    border-right: 2px solid ${props => props.theme.primary};
  }

  @media (min-width: 1024px) {
    width: calc(100% / 5); // 20%
  }
`

export const SFooter = styled.footer`
  display: none;

  @media (min-width: 628px) {
    background-color: ${props => props.theme.primary};
    display: flex;
    justify-content: center;
  }
`

export const SLink = styled.a`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.background};
  font-weight: 700;
  text-align: center;
  opacity: 0.7;
  border: 2px solid ${props => props.theme.primary};
  border-right: none;
  width: 100%;
  padding: 8px;
  transition: opacity 0.4s, background-color 0.4s, color 0.4s;

  &:hover {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.primary};
    opacity: 1;
  }
`
