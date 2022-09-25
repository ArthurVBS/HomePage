import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.background};
  box-shadow: 6px 12px 24px #000000aa;
  border-radius: 16px;
`

export const RibbonShape = styled.div`
  background-color: ${props => props.theme.primary};
  position: absolute;
  top: 16px;
  left: -16px;
  width: calc(100% - 32px);
  height: 32px;
  border-radius: 16px;
  border-bottom-left-radius: 0;

  :before {
    background-color: #ccc;
    content: '';
    position: absolute;
    top: 32px;
    width: 16px;
    height: 28px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    z-index: 1;
  }

  :after {
    background-color: ${props => props.theme.primary};
    content: '';
    position: absolute;
    top: 32px;
    width: 16px;
    height: 16px;
  }
`

export const Title = styled.h3`
  color: ${props => props.theme.background};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 4px;
`

export const Icon = styled.i`
  color: ${props => props.theme.primary};
  position: absolute;
  top: 16px;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(32px + 16px);
  height: 32px;
  font-size: 1.2em;
  padding: 4px;
`

export const ContentBox = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
`

export const Content = styled.p`
  text-indent: 1em;
  text-align: justify;
  font-size: 1.2em;
`

export const Link = styled.a`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.background};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 16px;
  padding: 4px;
  gap: 4px;
  border: 2px solid ${props => props.theme.primary};
  border-radius: 4px;
  transition: background-color 0.4s, color 0.4s;

  :hover {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.primary};
  }

  i {
    font-size: 1.1em;
  }
`
