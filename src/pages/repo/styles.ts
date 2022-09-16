import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 16px;

  .alice-carousel__dots-item {
    background-color: #c5c5c5;
    width: 32px;
    border-radius: 8px;
    transition: background-color 0.4s;

    &:hover {
      background-color: #909090;
    }

    @media (min-width: 628px) {
      width: 48px;
    }
  }

  .alice-carousel__dots-item.__active {
    background-color: ${props => props.theme.primary};
  }
`
