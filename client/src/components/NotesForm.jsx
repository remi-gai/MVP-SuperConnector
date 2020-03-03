import React from 'react';
import styled from 'styled-components';

const CloseButtonNotesForm = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: -70px;
    margin-left: -30px;
`
const NotesFormLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 440px;
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
  justify-content: center;
  align-items: center;
  width: 440px;
  color: hsl(0,0%,30%);
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
  border-radius: 10px;
  background-color: rgba(238, 238, 238, 1);
  height: 300px;
`
const InputFormatting = styled.input`
  border-radius: 3px;
  border: 1px solid #CCCECF;
  width: 400px;
  font-size: 13px;
  cursor: text;
  height: 20px;
`

const Title = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
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
  margin-top: 5px;
  width: 40px;
  cursor: pointer;

  &:hover {
    opacity: 0.90;
  }
`
const Field = styled.div`
margin-bottom: 5px;
`
const TextAreaFormatting = styled.textarea`
  border-radius: 3px;
  border: 1px solid #CCCECF;
  width: 400px;
  font-size: 13px;
  cursor: text;
  height: 120px;
`

const IconLandingPage = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  opacity: 0.8;
`

const FieldLayout = styled.div`
  width: 400px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
`

let NotesForm = (props) => (
  <NotesFormLayout>
    <CloseButtonNotesForm onClick={props.handleCloseMeetingNotes}>
      x
    </CloseButtonNotesForm><br></br>
    <FormContainer>
      <FieldLayout>
      <Title>
      <IconLandingPage type="image" src="./icons/Name.svg"></IconLandingPage>
        Full Name:</Title>
      <Field>
          <InputFormatting type="text" onChange={props.handleNameChangeNotesForm} />
      </Field>
      </FieldLayout>
      <FieldLayout>
      <Title>
      <IconLandingPage type="image" src="./icons/Notes.svg"></IconLandingPage>
        Meeting Notes:</Title>
        </FieldLayout>
        <FieldLayout>
      <Field>
          <TextAreaFormatting onChange={props.handleMeetingNotesChangeNotesForm} />
      </Field>
      <Controls>
        <Button onClick = {props.handleCloseMeetingNotes} style={{ backgroundColor: "#FA6400" }}>Cancel</Button>
        <Button onClick={props.handleNotesFormSubmit} style={{ backgroundColor: "#0091FF" }}>Create</Button>
      </Controls>
      </FieldLayout>
    </FormContainer>
  </NotesFormLayout>
)

export default NotesForm;
