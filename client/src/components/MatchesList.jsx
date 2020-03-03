import React, { Component } from 'react';
import styled from 'styled-components';

const CloseButtonMatchesList = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    width: 100%;
`
const MatchesListLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 1000px;
    height: 800px;
    overflow-y: scroll;
    background-color: rgba(238, 238, 238, 1);
    opacity: 1;
    color: hsl(0,0%,30%);
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
    border-radius: 10px;
`
const ContactLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-right: 60px;
`
const ContactRight = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-left: 60px;
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
    background-color: #FFFF00;
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
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.90;
  }
`
const Field = styled.div`
  display: flex;
  align-items: center;
  margin: 6px;
  border: 1px solid #CCCECF;
  background-color: white;
  font-size: 13px;
  border-radius: 3px;
  height: 20px;
`

const TextAreaFormatting = styled.div`
  border-radius: 3px;
  border: 1px solid #CCCECF;
  font-size: 13px;
  background-color: white;
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
                    X Close
        </CloseButtonMatchesList><br></br>
        <div>CONTACT MATCHES</div><br></br>
                {this.props.matches.matchedKeywords.length} Matched Keyword(s): {JSON.stringify(this.props.matches.matchedKeywords)}
                <NavigationBar>
                    <Button onClick={this.props.handlePreviousMatch}>Previous</Button>
                    <Button onClick={this.props.handleNextMatch}>Next</Button>
                </NavigationBar>
                <ContactColumnsLayout>
                    <ContactLeft>
                        <Title>Full Name:</Title>
                        <Field>
                            {contactLeft.fullname}
                        </Field>
                        <Title>Memo:</Title>
                        <Field>
                            {contactLeft.memo}
                        </Field>
                        <Title>Position:</Title>
                        <Field>
                            {contactLeft.position}
                        </Field>
                        <Title>Company:</Title>
                        <Field>
                            {contactLeft.company}
                        </Field>
                        <Title>Location:</Title>
                        <Field>
                            {contactLeft.location}
                        </Field>
                        <Title>Closeness:</Title>
                        <Field>
                            {contactLeft.closeness}
                        </Field>
                        <Title>Category:</Title>
                        <Field>
                            {contactLeft.category}
                        </Field>
                        <Title>Industry:</Title>
                        <Field>
                            {contactLeft.industry}
                        </Field>
                        <Title>Last Spoke:</Title>
                        <Field>
                            {contactLeft.lastspoke}
                        </Field>
                        <Title>Meeting Notes:</Title>
                        <TextAreaFormatting>
                            {
                                splitContactLeftNotes.map(word => {
                                    if (word.includes(".") || word.includes(",") || word.includes("?") || word.includes("!") || word.includes("(") || word.includes(")") || word.includes(":")) {
                                        var wordWithoutPunctuation = word.substr(0, word.length - 1);
                                        if (this.props.matches.matchedKeywords.indexOf(wordWithoutPunctuation.toLowerCase()) !== -1) {
                                            return <span><Bold>{wordWithoutPunctuation}</Bold>{word[word.length - 1]} </span>;
                                        }
                                    } else if (this.props.matches.matchedKeywords.indexOf(word.toLowerCase()) !== -1) {
                                        return <Bold>{word} </Bold>
                                    } else {
                                        return word + ' ';
                                    }
                                })
                            }
                        </TextAreaFormatting>
                    </ContactLeft>
                    <ContactRight>
                        <Title>Full Name:</Title>
                        <Field>
                            {contactRight.fullname}
                        </Field>
                        <Title>Memo:</Title>
                        <Field>
                            {contactRight.memo}
                        </Field>
                        <Title>Position:</Title>
                        <Field>
                            {contactRight.position}
                        </Field>
                        <Title>Company:</Title>
                        <Field>
                            {contactRight.company}
                        </Field>
                        <Title>Location:</Title>
                        <Field>
                            {contactRight.location}
                        </Field>
                        <Title>Closeness:</Title>
                        <Field>
                            {contactRight.closeness}
                        </Field>
                        <Title>Category:</Title>
                        <Field>
                            {contactRight.category}
                        </Field>
                        <Title>Industry:</Title>
                        <Field>
                            {contactRight.industry}
                        </Field>
                        <Title>Last Spoke:</Title>
                        <Field>
                            {contactRight.lastspoke}
                        </Field>
                        <Title>Meeting Notes:</Title>
                        <TextAreaFormatting>
                            {
                                splitContactRightNotes.map(word => {
                                    if (word.includes(".") || word.includes(",") || word.includes("?") || word.includes("!") || word.includes("(") || word.includes(")") || word.includes(":")) {
                                        var wordWithoutPunctuation = word.substr(0, word.length - 1);
                                        if (this.props.matches.matchedKeywords.indexOf(wordWithoutPunctuation.toLowerCase()) !== -1) {
                                            return <span><Bold>{wordWithoutPunctuation}</Bold>{word[word.length - 1]} </span>;
                                        }
                                    } else if (this.props.matches.matchedKeywords.indexOf(word.toLowerCase()) !== -1) {
                                        return <Bold>{word} </Bold>
                                    } else {
                                        return word + ' ';
                                    }
                                })
                            }
                        </TextAreaFormatting>
                    </ContactRight>
                </ContactColumnsLayout>
            </MatchesListLayout>
        )
    }
}

export default MatchesList;