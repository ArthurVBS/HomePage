import styled from 'styled-components'

interface IBackgroundContainerProps {
  backgroundURL: string
}

export const BackgroundContainer = styled.main<IBackgroundContainerProps>`
  background-blend-mode: multiply;
  background: #00000080 url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 16px 32px;
  height: calc(100vh - 40px); // 40px is the height of the footer
`

export const Container = styled.div`
  background-color: #000000a0;
  color: ${props => props.theme.background};
  width: 100%;
  height: 100%;
  padding: 16px;
  border-radius: 8px;
`

export const NavBar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

export const NavItem = styled.button`
  background: transparent;
  color: ${props => props.theme.background};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-weight: 400;
  font-size: 1em;
  padding: 4px 16px;
  border-radius: 4px;
  border: none;
  transition: background-color 0.4s;

  &:hover {
    background-color: ${props => props.theme.primary};
  }
`
