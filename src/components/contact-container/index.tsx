import React from 'react'
import ContactForm from '../contact-form'
import { Container, Image } from './styles'

const ContactContainer: React.FC = () => {
  return (
    <Container>
      <ContactForm />
      <Image src="./undraw_contact.svg" alt="Contact Art" />
    </Container>
  )
}

export default ContactContainer
