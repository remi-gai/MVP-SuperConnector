import React from 'react';
import styled from 'styled-components';

const CloseButtonViewEntry = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    width: 100%;
`

const ViewEntryLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 800px;
    height: 800px;
    background-color: rgba(238, 238, 238, 1);
    color: hsl(0,0%,30%);
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
const Title = styled.div`
  margin-top: 3px;
  margin-bottom: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Field = styled.div`
  display: flex;
  align-items: center;
  margin: 6px;
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

let ViewEntry = (props) => (
    <ViewEntryLayout>
        <CloseButtonViewEntry onClick={props.handleCloseViewEntry}>
            X
        </CloseButtonViewEntry><br></br>
        <div>VIEW CONTACT</div><br></br>
        <FormContainer>
            <Title>
            <IconLandingPage type="image" src="./icons/Name.svg"></IconLandingPage>
                Full Name:</Title>
            <Field>
                {props.currentEntry.fullname}
            </Field>
            <Title>
            <IconLandingPage type="image" src="./icons/Memo.svg" style={{opacity: 0.5}}></IconLandingPage>
                Memo:</Title>
            <Field>
                {props.currentEntry.memo}
            </Field>
            <Title>
            <IconLandingPage type="image" src="./icons/Position.svg"></IconLandingPage>
                Position:</Title>
            <Field>
                {props.currentEntry.position}
            </Field>
            <Title>
            <IconLandingPage type="image" src="./icons/Company.svg"></IconLandingPage>
                Company:</Title>
            <Field>
                {props.currentEntry.company}
            </Field>
            <Title>
            <IconLandingPage type="image" src="./icons/Location.svg"></IconLandingPage>
                Location:</Title>
            <Field>
                {props.currentEntry.location}
            </Field>
            <Title>
            <IconLandingPage type="image" src="./icons/Temperature.svg" style={{opacity: 0.5}}></IconLandingPage>
                Temperature:</Title>
            <Field>
                {props.currentEntry.closeness}
            </Field>
            <Title>
            <IconLandingPage type="image" src="./icons/Category.svg" style={{opacity: 0.5}}></IconLandingPage>
                Category:</Title>
            <Field>
                {props.currentEntry.category}
            </Field>
            <Title>
            <IconLandingPage type="image" src="./icons/Industry.svg" style={{opacity: 0.5}}></IconLandingPage>
                Industry:</Title>
            <Field>
                {props.currentEntry.industry}
            </Field>
            <Title>
            <IconLandingPage type="image" src="./icons/Conversation.svg"></IconLandingPage>
                Last Spoke:</Title>
            <Field>
                {props.currentEntry.lastspoke}
            </Field><br></br>
        </FormContainer>
    </ViewEntryLayout>
);

export default ViewEntry;