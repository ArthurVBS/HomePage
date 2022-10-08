import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`

export const Title = styled.h2`
  font-size: 2.8em;
  font-weight: 400;
  letter-spacing: 1px;
  margin-bottom: 16px;
`

export const Input = styled.input`
  background-color: ${props => props.theme.background};
  width: 100%;
  font-family: 'Poppins', sans-serif;
  font-size: 1.2em;
  caret-color: ${props => props.theme.primary};
  border: none;
  border-bottom: 1px solid ${props => props.theme.primary};
  padding: 8px;

  &::placeholder {
    color: gray;
  }
`

export const TextArea = styled.textarea`
  background-color: ${props => props.theme.background};
  width: 100%;
  font-family: 'Poppins', sans-serif;
  font-size: 1.2em;
  caret-color: ${props => props.theme.primary};
  resize: none;
  border: none;
  border-bottom: 1px solid ${props => props.theme.primary};
  padding: 8px;
  min-height: 96px;

  &::placeholder {
    color: gray;
  }
`

export const Button = styled.button`
  background-color: ${props => props.theme.background};
  color: ${props => (props.disabled ? 'gray' : props.theme.primary)};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${props => props.theme.primary};
  border-radius: 4px;
  font-family: 'Poppins', sans-serif;
  font-size: 1.1em;
  line-height: 2.5em;
  transition: background-color 0.4s, color 0.4s;

  &:hover {
    background-color: ${props => !props.disabled && props.theme.primary};
    color: ${props => !props.disabled && props.theme.background};
  }

  a {
    color: inherit;
    width: 100%;
    height: 100%;
  }
`
