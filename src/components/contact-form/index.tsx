import React, { useState } from 'react'
import { Button, Container, Input, TextArea, Title } from './styles'

const ContactForm: React.FC = () => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const mailTo = `mailto:arthurvini2703@gmail.com?subject=Hello&body=Hi, I'm ${
    name ? name : "'your name/company'"
  } and I want to talk to you!\n ${message}`

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const showButton = () => {
    return name !== '' && message !== '' ? (
      <Button>
        <a href={mailTo}>Send</a>
      </Button>
    ) : (
      <Button disabled>Send</Button>
    )
  }

  return (
    <Container onSubmit={e => handleSubmit(e)}>
      <Title>Contact</Title>
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <TextArea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      {showButton()}
    </Container>
  )
}

export default ContactForm
