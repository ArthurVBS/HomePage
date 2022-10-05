import React from 'react'
import { ColoredDiv, Container } from './styles'

const PinterestGallery: React.FC = () => {
  return (
    <Container>
      <ColoredDiv bgColor="#5ED3F3" height="275px">
        React
      </ColoredDiv>
      <ColoredDiv bgColor="#030303" height="150px">
        Next.JS
      </ColoredDiv>
      <ColoredDiv bgColor="#f7df1e" height="200px" fgColor="#030303">
        JS
      </ColoredDiv>
      <ColoredDiv bgColor="#3178c6" height="300px">
        TS
      </ColoredDiv>
      <ColoredDiv bgColor="#e34c26" height="250px">
        HTML
      </ColoredDiv>
      <ColoredDiv bgColor="#1D86C4" height="225px">
        CSS
      </ColoredDiv>
      <ColoredDiv bgColor="#73B61E" height="175px">
        Spring
      </ColoredDiv>
      <ColoredDiv bgColor="#b07219" height="225px">
        Java
      </ColoredDiv>
      <ColoredDiv bgColor="#C76396" height="200px">
        SASS
      </ColoredDiv>
      <ColoredDiv bgColor="#F0941A" height="125px" fgColor="#030303">
        AWS
      </ColoredDiv>
    </Container>
  )
}

export default PinterestGallery
