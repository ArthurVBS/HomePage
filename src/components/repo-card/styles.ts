import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
`

export const Image = styled.img`
  width: 100%;
`

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`

export const DetailsWrapper = styled.div`
  color: gray;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`

export const Details = styled.a`
  color: gray;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  transition: color 0.4s;

  &:hover {
    color: ${props => props.theme.primary};
  }

  i {
    font-size: 0.65em;
  }
`

export const Title = styled.h2`
  letter-spacing: 1px;
  font-weight: 400;
  font-size: 1.8em;
`

export const Description = styled.p`
  text-indent: 1.5em;
  text-align: justify;
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Techs = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 4px;
`

export const TechIcon = styled.i`
  color: ${props => props.theme.primary};
  font-size: 1.4em;
`

export const Link = styled.a`
  color: ${props => props.theme.text};
  transition: color 0.4s;

  &:hover {
    color: ${props => props.theme.primary};
  }
`
