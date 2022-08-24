import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 256px;
  height: 360px;
  background: ${props => props.theme.background};
  box-shadow: 6px 12px 24px #0000001a;
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
  padding: 16px;
`

export const Content = styled.p``
