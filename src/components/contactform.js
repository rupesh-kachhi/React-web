import React from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const ContactForm = () => {
  return (
    <FormContainer name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <Label htmlFor="name">Name:</Label>
        <Input type="text" name="name" id="name" required />
      </div>
      <div>
        <Label htmlFor="email">Email:</Label>
        <Input type="email" name="email" id="email" required />
      </div>
      <div>
        <Label htmlFor="message">Message:</Label>
        <TextArea name="message" id="message" rows="5" required></TextArea>
      </div>
      <div>
        <SubmitButton type="submit">Submit</SubmitButton>
      </div>
    </FormContainer>
  );
};

export default ContactForm;
