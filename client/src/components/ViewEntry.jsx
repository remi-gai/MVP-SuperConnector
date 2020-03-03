import React from 'react';
import styled from 'styled-components';

const CloseButtonViewEntry = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: -45px;
    margin-left: -30px;
`

const ViewEntryLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 600px;
    height: 800px;
    background-color: white;
    color: hsl(0,0%,30%);
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
    border-radius: 10px;
    overflow-y: scroll;
`

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 440px;
  color: hsl(0,0%,30%);
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
  border-radius: 10px;
  background-color: rgba(238, 238, 238, 1);
  height: 700px;
`
const Title = styled.div`
  margin-top: 6px;
  margin-bottom: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Field = styled.div`
  display: flex;
  align-items: center;
  border-radius: 3px;
  border: 1px solid #CCCECF;
  width: 400px;
  font-size: 13px;
  height: 20px;
  background-color: white;
`
const IconLandingPage = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  opacity: 0.8;
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
  cursor: pointer;

  &:hover {
    opacity: 0.90;
  }
`
const Controls = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 400px;
    margin-top: -14px;
`

const TextAreaFormatting = styled.div`
  margin-top: 6px;
  border-radius: 3px;
  border: 1px solid #CCCECF;
  font-size: 13px;
  background-color: white;
  height: 80px;
  width: 400px;
`

const FieldLayout = styled.div`
  width: 400px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`

let ViewEntry = (props) => {

    var getNotes = (name) => {
        for (var i = 0; i < props.meetingNotes.length; i++) {
            if (props.meetingNotes[i].NotesFormfullname === name) {
                return props.meetingNotes[i];
            }
        }
    }
    var contactLeftNotes = getNotes(props.currentEntry.fullname);

    return (
        <ViewEntryLayout>
            <CloseButtonViewEntry onClick={props.handleCloseViewEntry}>
                x
        </CloseButtonViewEntry><br></br>
            <FormContainer>
                <FieldLayout>
                    <Title>
                        <IconLandingPage type="image" src="./icons/Name.svg"></IconLandingPage>
                        Full Name:</Title>
                    <Field>
                        {props.currentEntry.fullname}
                    </Field>
                </FieldLayout>
                <FieldLayout>
                    <Title>
                        <IconLandingPage type="image" src="./icons/Memo.svg" style={{ opacity: 0.5 }}></IconLandingPage>
                        Memo:</Title>
                    <Field>
                        {props.currentEntry.memo}
                    </Field>
                </FieldLayout>
                <FieldLayout>
                    <Title>
                        <IconLandingPage type="image" src="./icons/Position.svg"></IconLandingPage>
                        Position:</Title>
                    <Field>
                        {props.currentEntry.position}
                    </Field>
                </FieldLayout>
                <FieldLayout>
                    <Title>
                        <IconLandingPage type="image" src="./icons/Company.svg"></IconLandingPage>
                        Company:</Title>
                    <Field>
                        {props.currentEntry.company}
                    </Field>
                </FieldLayout>
                <FieldLayout>
                    <Title>
                        <IconLandingPage type="image" src="./icons/Location.svg"></IconLandingPage>
                        Location:</Title>
                    <Field>
                        {props.currentEntry.location}
                    </Field>
                </FieldLayout>
                <FieldLayout>
                    <Title>
                        <IconLandingPage type="image" src="./icons/Temperature.svg" style={{ opacity: 0.5 }}></IconLandingPage>
                        Temperature:</Title>
                    <Field>
                        {props.currentEntry.closeness}
                    </Field>
                </FieldLayout>
                <FieldLayout>
                    <Title>
                        <IconLandingPage type="image" src="./icons/Category.svg" style={{ opacity: 0.5 }}></IconLandingPage>
                        Category:</Title>
                    <Field>
                        {props.currentEntry.category}
                    </Field>
                </FieldLayout>
                <FieldLayout>
                    <Title>
                        <IconLandingPage type="image" src="./icons/Industry.svg" style={{ opacity: 0.5 }}></IconLandingPage>
                        Industry:</Title>
                    <Field>
                        {props.currentEntry.industry}
                    </Field>
                </FieldLayout>
                <FieldLayout>
                    <Title>
                        <IconLandingPage type="image" src="./icons/Conversation.svg"></IconLandingPage>
                        Last Spoke:</Title>
                    <Field>
                        {props.currentEntry.lastspoke}
                    </Field>
                </FieldLayout>
                <FieldLayout>
                    <Title>
                        <IconLandingPage type="image" src="./icons/Notes.svg"></IconLandingPage>
                        Meeting Notes:</Title>
                    <TextAreaFormatting>
                        {contactLeftNotes.NotesFormmeetingnotes}
                    </TextAreaFormatting><br></br>
                </FieldLayout>
                <Controls>
                    <Button style={{ backgroundColor: '#FA6400' }}>Delete</Button>
                    <Button style={{ backgroundColor: "#0091FF" }}>Update</Button>
                </Controls>
            </FormContainer>
        </ViewEntryLayout>
    )
};

export default ViewEntry;