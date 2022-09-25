import styled from 'styled-components'

export const Container = styled.header`
  color: ${props => props.theme.text};
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  justify-content: flex-end;
  align-items: center;
  padding: 8px;
  text-align: center;

  @media (min-width: 768px) {
    display: none;
  }
`
