import React from 'react';
import styled from 'styled-components';

const CloseButtonContactForm = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: -40px;
    margin-right: 25px;
`

const ContactFormLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 700px;
  background-color: white;
  opacity: 1;
  color: hsl(0,0%,30%);
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
  border-radius: 10px;
  overflow-y: scroll;
`
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 440px;
  color: hsl(0,0%,30%);
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
  border-radius: 10px;
  background-color: rgba(238, 238, 238, 1);
  height: 600px;
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
  height: 80px;
`

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.90;
  }
`
const Field = styled.div`
`

const FieldLayout = styled.div`
  width: 400px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`
const IconLandingPage = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  opacity: 0.8;
`

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
`

let ContactForm = (props) => (
  <ContactFormLayout>
    <CloseButtonContactForm onClick={props.handleCloseContactForm}>
      x
    </CloseButtonContactForm><br></br>
    <FormContainer>
      <FieldLayout>
        <Title>
          <IconLandingPage type="image" src="./icons/Name.svg"></IconLandingPage>
          Full Name:
      </Title>
      </FieldLayout>
      <FieldLayout>
        <Field>
          <InputFormatting type="text" onChange={props.handleNameChange} />
        </Field>
      </FieldLayout>
      <FieldLayout>
        <Title>
          <IconLandingPage type="image" src="./icons/Memo.svg" style={{ opacity: 0.5 }}></IconLandingPage>
          Memo:
      </Title>
      </FieldLayout>
      <FieldLayout>
        <Field>
          <TextAreaFormatting onChange={props.handleMemoChange} />
        </Field>
      </FieldLayout>
      <FieldLayout>
        <Title>
          <IconLandingPage type="image" src="./icons/Position.svg"></IconLandingPage>
          Position:
      </Title>
      </FieldLayout>
      <FieldLayout>
        <Field>
          <InputFormatting type="text" onChange={props.handlePositionChange} />
        </Field>
      </FieldLayout>
      <FieldLayout>
        <Title>
          <IconLandingPage type="image" src="./icons/Company.svg"></IconLandingPage>
          Company:
      </Title>
      </FieldLayout>
      <FieldLayout>
        <Field>
          <InputFormatting type="text" onChange={props.handleCompanyChange} />
        </Field>
      </FieldLayout>
      <FieldLayout>
        <Title>
          <IconLandingPage type="image" src="./icons/Location.svg"></IconLandingPage>
          Location:
      </Title>
        <FieldLayout>
        </FieldLayout>
        <Field>
          <InputFormatting type="text" onChange={props.handleLocationChange} />
        </Field>
      </FieldLayout>
      <FieldLayout>
        <Title>
          <IconLandingPage type="image" src="./icons/Temperature.svg" style={{ opacity: 0.5 }}></IconLandingPage>
          Temperature:
      </Title>
      </FieldLayout>
      <FieldLayout>
        <Field>
          <InputFormatting type="text" onChange={props.handleClosenessChange} style={{ opacity: 0.5 }} />
        </Field>
      </FieldLayout>
      <FieldLayout>
        <Title>
          <IconLandingPage type="image" src="./icons/Category.svg" style={{ opacity: 0.5 }}></IconLandingPage>
          Category:
      </Title>
      </FieldLayout>
      <FieldLayout>
        <Field>
          <InputFormatting type="text" onChange={props.handleCategoryChange} />
        </Field>
      </FieldLayout>
      <FieldLayout>
        <Title>
          <IconLandingPage type="image" src="./icons/Industry.svg" style={{ opacity: 0.5 }}></IconLandingPage>
          Industry:
      </Title>
      </FieldLayout>
      <FieldLayout>
        <Field>
          <InputFormatting type="text" onChange={props.handleIndustryChange} />
        </Field>
      </FieldLayout>
      <FieldLayout>
        <Title>
          <IconLandingPage type="image" src="./icons/Conversation.svg"></IconLandingPage>
          Last Spoke:
      </Title>
      </FieldLayout>
      <FieldLayout>
        <Field>
          <InputFormatting type="text" onChange={props.handleLastSpokeChange} />
        </Field>
      </FieldLayout>
      <Controls>
        <Button onClick = {props.handleCloseContactForm} style={{ backgroundColor: "#FA6400" }}>Cancel</Button>
        <Button onClick={props.handleContactFormSubmit} style={{ backgroundColor: "#0091FF" }}>Create</Button>
      </Controls>
    </FormContainer>
  </ContactFormLayout>
)

export default ContactForm;