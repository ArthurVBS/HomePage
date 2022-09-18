import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.background};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 16px;
  height: 100%;
  width: 100%;
`

export const Header = styled.header`
  padding: 8px;
`

export const Title = styled.h1`
  font-size: 2em;
  letter-spacing: 0.1em;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.2em;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 16px;
  flex-grow: 1;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 8px;

  @media (min-width: 768px) {
    width: 50%;
  }
`

export const Description = styled.p`
  text-indent: 1em;
  text-align: center;
  font-size: 1.2em;
  flex-grow: 1;

  @media (min-width: 768px) {
    font-size: 1.4em;
  }
`

export const TagBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const Tag = styled.span`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.background};
  font-weight: 700;
  font-size: 0.8em;
  border-radius: 4px;
  padding: 4px 12px;
`

export const LinkBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const Link = styled.a`
  color: ${props => props.theme.primary};
  font-size: 1.2em;
  transition: color 0.4s, transform 0.4s;

  &:hover {
    color: ${props => props.theme.secondary};
    transform: rotateZ(45deg);
  }
`

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  order: -1;
  border-radius: 16px;
  padding: 8px;

  @media (min-width: 768px) {
    order: initial;
  }
`

export const Image = styled.img`
  max-width: 360px;
  width: 100%;
`
