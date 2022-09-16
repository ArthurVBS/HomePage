import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 16px;
`

export const Avatar = styled.img`
  border-radius: 50%;
  border: none;
  max-width: 128px;
  margin: 0 auto;
`

export const Name = styled.h2`
  color: ${props => props.theme.primary};
`
