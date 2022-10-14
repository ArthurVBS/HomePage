import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  height: 100%;
  opacity: 0.8;
  border-radius: 4px;
  box-shadow: 0 8px 8px 0 rgb(233 240 243 / 50%), 0 0 0 1px #e6ecf8;
  padding: 16px;
  transition: opacity 0.4s, color 0.4s;

  &:hover {
    opacity: 1;
    color: ${props => props.theme.primary};
  }
`

export const Title = styled.h2`
  color: inherit;
  text-align: center;
`

export const Icon = styled.img`
  width: 64px;
  height: 64px;
`
