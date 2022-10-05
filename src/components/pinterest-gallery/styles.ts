import styled from 'styled-components'

interface ColoredDivProps {
  bgColor: string
  fgColor?: string
  height: string
}

export const Container = styled.div`
  column-count: 3;
  column-fill: balance;
  column-gap: 16px;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  border-radius: 16px;
  padding: 16px;

  @media (min-width: 768px) {
    column-count: 5;
  }
`

export const ColoredDiv = styled.div<ColoredDivProps>`
  background-color: ${props => props.bgColor};
  color: ${props => (props.fgColor ? props.fgColor : props.theme.background)};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${props => props.height};
  border-radius: 4px;
  margin-bottom: 16px;
  break-inside: avoid-column;

  @media (min-width: 768px) {
    height: calc(${props => props.height} * 1.5);
  }
`
