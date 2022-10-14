import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const BigCardWrapper = styled.div`
  background-color: #e6ecf8;
  display: grid;
  grid-template-columns: 1fr;
  flex-grow: 1;
  gap: 2px;
  max-width: 960px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 8px 8px 0 rgb(233 240 243 / 50%), 0 0 0 1px #e6ecf8;
  width: 100%;
  height: 100%;
  padding: 2px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const SmallCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-grow: 1;
  gap: 16px;
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: 2px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
