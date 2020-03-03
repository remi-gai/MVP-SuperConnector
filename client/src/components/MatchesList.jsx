import React, { Component } from 'react';
import styled from 'styled-components';

const CloseButtonMatchesList = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-left: -25px;
    margin-top: 10px;
`
const MatchesListLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 1000px;
    height: 800px;
    overflow-y: scroll;
    background-color: white;
    opacity: 1;
    color: hsl(0,0%,30%);
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
    border-radius: 10px;
`
const ContactLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 440px;
    margin-right: 20px;
    color: hsl(0,0%,30%);
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
    border-radius: 10px;
    background-color: rgba(238, 238, 238, 1);
    height: 600px;
`
const ContactRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 440px;
    margin-left: 20px;
    color: hsl(0,0%,30%);
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
    border-radius: 10px;
    background-color: rgba(238, 238, 238, 1);
    height: 600px;
`
const ContactColumnsLayout = styled.div`
    display: flex;
    flex-direction: row;
`
const NavigationBar = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 10px;
`

const Bold = styled.span`
    font-weight: bold;
    background-color: #FFBA8B;
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
  margin-bottom: 6px;
  border: 1px solid #CCCECF;
  background-color: white;
  font-size: 13px;
  border-radius: 3px;
  height: 20px;
  width: 400px;
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
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.90;
  }
`

const TextAreaFormatting = styled.div`
  border-radius: 3px;
  border: 1px solid #CCCECF;
  font-size: 13px;
  background-color: white;
  width: 400px;
  height: 65px;
`

const IconLandingPage = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  opacity: 0.8;
`

const MatchHeader = styled.div`
  background-color: #0091FF;
  color: white;
  border-radius: 10px;
  padding: 6px 6px 6px 6px;
  font-size: 16px;
  height: 25px;
  font-weight: 500;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;  
  justify-content: center;
  align-items: center;
  width: 200px;
  margin: 5px;
`

const FieldLayout = styled.div`
  width: 400px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`

class MatchesList extends Component {
    constructor(props) {
        super(props);
    }

    getContact(name) {
        for (var i = 0; i < this.props.records.length; i++) {
            if (this.props.records[i].fullname === name) {
                return this.props.records[i];
            }
        }
    }

    getNotes(name) {
        for (var i = 0; i < this.props.meetingNotes.length; i++) {
            if (this.props.meetingNotes[i].NotesFormfullname === name) {
                return this.props.meetingNotes[i];
            }
        }
    }

    render() {
        var contactLeft = this.getContact(this.props.matches.contact1);
        var contactRight = this.getContact(this.props.matches.contact2);
        var contactLeftNotes = this.getNotes(this.props.matches.contact1);
        var contactRightNotes = this.getNotes(this.props.matches.contact2);
        var splitContactLeftNotes = contactLeftNotes.NotesFormmeetingnotes.split(" ");
        var splitContactRightNotes = contactRightNotes.NotesFormmeetingnotes.split(" ");
        return (
            <MatchesListLayout>
                <CloseButtonMatchesList onClick={this.props.handleCloseMatchesList}>
                    x
        </CloseButtonMatchesList><br></br>
                <MatchHeader>
                    {this.props.matches.matchedKeywords.length} Matched Keyword(s):
                </MatchHeader>
                <div><Bold>|</Bold>
                    {this.props.matches.matchedKeywords.map(word => {
                        return <Bold> {word} |</Bold>
                    })}
                </div>
                <NavigationBar>
                    <Button onClick={this.props.handlePreviousMatch}>Previous</Button>
                    <Button onClick={this.props.handleNextMatch}>Next</Button>
                </NavigationBar><br></br>
                <ContactColumnsLayout>
                    <ContactLeft>
                        <FieldLayout>
                            <Title>
                                <IconLandingPage type="image" src="./icons/Name.svg"></IconLandingPage>
                                Full Name:</Title>
                            <Field>
                                {contactLeft.fullname}
                            </Field>
                        </FieldLayout>
                        <FieldLayout>
                            <Title>
                                <IconLandingPage type="image" src="./icons/Memo.svg" style={{ opacity: 0.5 }}></IconLandingPage>
                                Memo:</Title>
                            <Field>
                                {contactLeft.memo}
                            </Field>
                        </FieldLayout>
                        <FieldLayout>
                        <Title>
                            <IconLandingPage type="image" src="./icons/Position.svg"></IconLandingPage>
                            Position:</Title>
                        <Field>
                            {contactLeft.position}
                        </Field>
                        </FieldLayout>
                        <FieldLayout>
                        <Title>
                            <IconLandingPage type="image" src="./icons/Company.svg"></IconLandingPage>
                            Company:</Title>
                        <Field>
                            {contactLeft.company}
                        </Field>
                        </FieldLayout>
                        <FieldLayout>
                        <Title>
                            <IconLandingPage type="image" src="./icons/Location.svg"></IconLandingPage>
                            Location:</Title>
                        <Field>
                            {contactLeft.location}
                        </Field>
                        </FieldLayout>
                        <FieldLayout>
                        <Title>
                            <IconLandingPage type="image" src="./icons/Temperature.svg" style={{ opacity: 0.5 }}></IconLandingPage>
                            Temperature:</Title>
                        <Field>
                            {contactLeft.closeness}
                        </Field>
                        </FieldLayout>
                        <FieldLayout>
                        <Title>
                            <IconLandingPage type="image" src="./icons/Category.svg" style={{ opacity: 0.5 }}></IconLandingPage>
                            Category:</Title>
                        <Field>
                            {contactLeft.category}
                        </Field>
                        </FieldLayout>
                        <FieldLayout>
                        <Title>
                            <IconLandingPage type="image" src="./icons/Industry.svg" style={{ opacity: 0.5 }}></IconLandingPage>
                            Industry:</Title>
                        <Field>
                            {contactLeft.industry}
                        </Field>
                        </FieldLayout>
                        <FieldLayout>
                        <Title>
                            <IconLandingPage type="image" src="./icons/Conversation.svg"></IconLandingPage>
                            Last Spoke:</Title>
                        <Field>
                            {contactLeft.lastspoke}
                        </Field>
                        </FieldLayout>
                        <FieldLayout>
                        <Title>
                            <IconLandingPage type="image" src="./icons/Notes.svg"></IconLandingPage>
                            Meeting Notes:</Title>
                        <TextAreaFormatting>
                            {
                                splitContactLeftNotes.map(word => {
                                    console.log(word);
                                    if (word.includes(".") || word.includes(",") || word.includes("?") || word.includes("!") || word.includes("(") || word.includes(")") || word.includes(":")) {
                                        var wordWithoutPunctuation = word.substr(0, word.length - 1);
                                        if (this.props.matches.matchedKeywords.indexOf(wordWithoutPunctuation.toLowerCase()) !== -1) {
                                            return <span><Bold>{wordWithoutPunctuation}</Bold>{word[word.length - 1]} </span>;
                                        } else {
                                            return word + ' ';
                                        }
                                    } else if (this.props.matches.matchedKeywords.indexOf(word.toLowerCase()) !== -1) {
                                        return <Bold>{word} </Bold>
                                    } else {
                                        return word + ' ';
                                    }
                                })
                            }
                        </TextAreaFormatting>
                        </FieldLayout>
                    </ContactLeft>
                    <ContactRight>
                        <FieldLayout>
                        <Title>
                            <IconLandingPage type="image" src="./icons/Name.svg"></IconLandingPage>
                            Full Name:</Title>
                        <Field>
                            {contactRight.fullname}
                        </Field>
                        </FieldLayout>
                        <FieldLayout>
                        <Title>
                            <IconLandingPage type="image" src="./icons/Memo.svg" style={{ opacity: 0.5 }}></IconLandingPage>
                            Memo:</Title>
                        <Field>
                            {contactRight.memo}
                        </Field>
                        </FieldLayout>
                        <FieldLayout>
                        <Title>
                            <IconLandingPage type="image" src="./icons/Position.svg"></IconLandingPage>
                            Position:</Title>
                        <Field>
                            {contactRight.position}
                        </Field>
                        </FieldLayout>
                        <FieldLayout>
                        <Title>
                            <IconLandingPage type="image" src="./icons/Company.svg"></IconLandingPage>
                            Company:</Title>
                        <Field>
                            {contactRight.company}
                        </Field>
                        </FieldLayout>
                        <FieldLayout>
                        <Title>
                            <IconLandingPage type="image" src="./icons/Location.svg"></IconLandingPage>
                            Location:</Title>
                        <Field>
                            {contactRight.location}
                        </Field>
                        </FieldLayout>
                        <FieldLayout>
                        <Title>
                            <IconLandingPage type="image" src="./icons/Temperature.svg" style={{ opacity: 0.5 }}></IconLandingPage>
                            Temperature:</Title>
                        <Field>
                            {contactRight.closeness}
                        </Field>
                        </FieldLayout>
                        <FieldLayout>
                        <Title>
                            <IconLandingPage type="image" src="./icons/Category.svg" style={{ opacity: 0.5 }}></IconLandingPage>
                            Category:</Title>
                        <Field>
                            {contactRight.category}
                        </Field>
                        </FieldLayout>
                        <FieldLayout>
                        <Title>
                            <IconLandingPage type="image" src="./icons/Industry.svg" style={{ opacity: 0.5 }}></IconLandingPage>
                            Industry:</Title>
                        <Field>
                            {contactRight.industry}
                        </Field>
                        </FieldLayout>
                        <FieldLayout>
                        <Title>
                            <IconLandingPage type="image" src="./icons/Conversation.svg"></IconLandingPage>
                            Last Spoke:</Title>
                        <Field>
                            {contactRight.lastspoke}
                        </Field>
                        </FieldLayout>
                        <FieldLayout>
                        <Title>
                            <IconLandingPage type="image" src="./icons/Notes.svg"></IconLandingPage>
                            Meeting Notes:</Title>
                        <TextAreaFormatting>
                            {
                                splitContactRightNotes.map(word => {
                                    if (word.includes(".") || word.includes(",") || word.includes("?") || word.includes("!") || word.includes("(") || word.includes(")") || word.includes(":")) {
                                        var wordWithoutPunctuation = word.substr(0, word.length - 1);
                                        if (this.props.matches.matchedKeywords.indexOf(wordWithoutPunctuation.toLowerCase()) !== -1) {
                                            return <span><Bold>{wordWithoutPunctuation}</Bold>{word[word.length - 1]} </span>;
                                        } else {
                                            return word + ' ';
                                        }
                                    } else if (this.props.matches.matchedKeywords.indexOf(word.toLowerCase()) !== -1) {
                                        return <Bold>{word} </Bold>
                                    } else {
                                        return word + ' ';
                                    }
                                })
                            }
                        </TextAreaFormatting>
                        </FieldLayout>
                    </ContactRight>
                </ContactColumnsLayout>
            </MatchesListLayout>
        )
    }
}

export default MatchesList;