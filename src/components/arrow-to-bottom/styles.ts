import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 32px 0px;
`

export const HR = styled.div`
  background-color: ${props => props.theme.background};
  width: 100%;
  flex-grow: 1;
  height: 2px;
`

export const Icon = styled.i`
  font-style: normal;
  font-size: 3em;
  margin: 0 8px;
`
