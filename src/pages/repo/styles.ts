import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  flex-grow: 1;
  height: 100%;
  padding: 16px;

  .alice-carousel {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    min-height: 100%;
    gap: 4px;
    margin: 0;

    & > div {
      flex-grow: 1;
    }
  }

  .alice-carousel__wrapper {
    height: 100%;
  }

  .alice-carousel__dots {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
  }

  .alice-carousel__dots-item {
    background-color: transparent;
    width: 32px;
    border: 2px solid ${props => props.theme.primary};
    border-radius: 8px;

    &:hover {
      background-color: transparent;
    }

    @media (min-width: 768px) {
      width: 48px;
    }
  }

  .alice-carousel__dots-item.__active {
    background-color: ${props => props.theme.primary};
  }
`
