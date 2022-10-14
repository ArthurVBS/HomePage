import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.background};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  height: 100%;
  opacity: 0.8;
  border-radius: 4px;
  box-shadow: 0 8px 8px 0 rgb(233 240 243 / 50%), 0 0 0 1px #e6ecf8;
  padding: 16px;
  transition: opacity 0.4s;

  &:hover {
    opacity: 1;
  }
`

export const IconLogo = styled.div`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.secondary};
  width: 96px;
  height: 96px;
  margin: 16px auto;

  i {
    font-size: 2em;
  }
`

export const Title = styled.h3`
  color: ${props => props.theme.secondary};
  font-size: 1.5em;
  letter-spacing: 1px;
  margin-bottom: 16px;
`

export const Description = styled.p`
  text-indent: 1.5em;
  text-align: justify;
`
