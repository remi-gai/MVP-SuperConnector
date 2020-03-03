import React from 'react';
import styled from 'styled-components';

const CloseButtonContactForm = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    width: 100%;
`

const ContactFormLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  height: 800px;
  background-color: rgba(238, 238, 238, 1);
  opacity: 1;
  color: hsl(0,0%,30%);
  /* border: solid 1px black; */
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
  border-radius: 10px;
  overflow-y: scroll;
`
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 400px;
`
const InputFormatting = styled.input`
  border-radius: 3px;
  border: 1px solid #CCCECF;
  width: 400px;
  font-size: 13px;
  cursor: text;
  height: 20px;
`

const TextAreaFormatting = styled.textarea`
  border-radius: 3px;
  border: 1px solid #CCCECF;
  width: 400px;
  font-size: 13px;
  cursor: text;
  height: 120px;
`

const Title = styled.div`
  margin-top: 3px;
  margin-bottom: 3px;
`

const Button = styled.div`
  display: flex;  
  align-items: center;
  background-color: #18AA8E;
  color: white;
  height: 20px;
  font-weight: 500;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0 12px 0 12px;
  font-size: .750rem;
  border-radius: 4px;
  margin: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.90;
  }
`
const Field = styled.div`
  margin: 6px;
`

let ContactForm = (props) => (
  <ContactFormLayout>
    <CloseButtonContactForm onClick={props.handleCloseContactForm}>
      X Close
    </CloseButtonContactForm><br></br>
    <div>NEW CONTACT</div><br></br>
    <FormContainer>
      <Title>
        Full Name:
      </Title>
      <Field>
        <InputFormatting type="text" onChange={props.handleNameChange}/>
      </Field>
      <Title>
        Memo:
      </Title>
      <Field>
          <TextAreaFormatting onChange={props.handleMemoChange} />
      </Field>
      <Title>
        Position:
      </Title>
      <Field>
          <InputFormatting type="text" onChange={props.handlePositionChange} />
      </Field>
      <Title>
        Company:
      </Title>
      <Field>
          <InputFormatting type="text" onChange={props.handleCompanyChange} />
      </Field>
      <Title>
        Location:
      </Title>
      <Field>
          <InputFormatting type="text" onChange={props.handleLocationChange} />
      </Field>
      <Title>
        Closeness:
      </Title>
      <Field>
          <InputFormatting type="text" onChange={props.handleClosenessChange} />
      </Field>
      <Title>
        Category:
      </Title>
      <Field>
          <InputFormatting type="text" onChange={props.handleCategoryChange} />
      </Field>
      <Title>
        Industry:
      </Title>
      <Field>
          <InputFormatting type="text" onChange={props.handleIndustryChange} />
      </Field>
      <Title>
        Last Spoke:
      </Title>
      <Field>
          <InputFormatting type="text" onChange={props.handleLastSpokeChange} />
      </Field>
      <Button onClick={props.handleContactFormSubmit}>Create</Button>
    </FormContainer>
  </ContactFormLayout>
)

export default ContactForm;