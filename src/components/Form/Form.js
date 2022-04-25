import React from 'react';
import { Input, Button, FormWrapper } from './style.js'

const Form = () => {
  return (
    <FormWrapper>
    <Input type="email" placeholder="Insira seu e-mail" id="email"/>
    <Button type="submit">Assinar newsletter</Button>
    </FormWrapper>
  )
}

export default Form