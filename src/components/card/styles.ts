import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 16px;
`

export const Name = styled.h2`
  color: ${props => props.theme.primary};
`
