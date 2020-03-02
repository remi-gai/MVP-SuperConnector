import React, { Component } from 'react';
import styled from 'styled-components';

const CloseButtonMatchesList = styled.div`
    cursor: pointer;
`
const MatchesListLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1000px;
    height: 700px;
    background-color: white;
    border: solid 1px black;
    overflow-y: scroll;
`
const ContactLeft = styled.div`
    display: flex;
    flex-direction: column;
    border: solid 1px black;
    width: 300px;
`
const ContactRight = styled.div`
    display: flex;
    flex-direction: column;
    border: solid 1px black;
    width: 300px;
`
const ContactColumnsLayout = styled.div`
    display: flex;
    flex-direction: row;
`
const NavigationBar = styled.div`
    display: flex;
    justify-content: space-evenly;
    border: solid 1px black;
    width:  800px;
    height: 50px;
`

const Bold = styled.span`
    font-weight: bold;
    background-color: #FFFF00;
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
        {this.props.matches.matchedKeywords.length} Matched Keyword(s): {JSON.stringify(this.props.matches.matchedKeywords)}
                <NavigationBar>
                    <button onClick = {this.props.handlePreviousMatch}>Previous</button>
                    <button onClick = {this.props.handleNextMatch}>Next</button>
                </NavigationBar>
                <ContactColumnsLayout>
                    <ContactLeft>
                        <div>
                            Full Name: {contactLeft.fullname}
                        </div><br></br>
                        <div>
                            Memo: {contactLeft.memo}
                        </div><br></br>
                        <div>
                            Position: {contactLeft.position}
                        </div><br></br>
                        <div>
                            Company: {contactLeft.company}
                        </div><br></br>
                        <div>
                            Location: {contactLeft.location}
                        </div><br></br>
                        <div>
                            Closeness: {contactLeft.closeness}
                        </div><br></br>
                        <div>
                            Category: {contactLeft.category}
                        </div><br></br>
                        <div>
                            Industry: {contactLeft.industry}
                        </div><br></br>
                        <div>
                            Last Spoke: {contactLeft.lastspoke}
                        </div><br></br>
                        <div>
                            Meeting Notes: {
                            splitContactLeftNotes.map(word => {
                                if (word.includes(".") || word.includes(",") || word.includes("?") || word.includes("!") || word.includes("(") || word.includes(")") || word.includes(":")) {
                                    var wordWithoutPunctuation = word.substr(0, word.length - 1);
                                    if (this.props.matches.matchedKeywords.indexOf(wordWithoutPunctuation.toLowerCase()) !== -1) {
                                        return <span><Bold>{wordWithoutPunctuation}</Bold>{word[word.length -1]} </span>;
                                    }
                                } else if (this.props.matches.matchedKeywords.indexOf(word.toLowerCase()) !== -1) {
                                    return <Bold>{word} </Bold>
                                } else {
                                    return word + ' ';
                                }
                            })
                            }
                        </div><br></br>
                    </ContactLeft>
                    <ContactRight>
                        <div>
                            Full Name: {contactRight.fullname}
                        </div><br></br>
                        <div>
                            Memo: {contactRight.memo}
                        </div><br></br>
                        <div>
                            Position: {contactRight.position}
                        </div><br></br>
                        <div>
                            Company: {contactRight.company}
                        </div><br></br>
                        <div>
                            Location: {contactRight.location}
                        </div><br></br>
                        <div>
                            Closeness: {contactRight.closeness}
                        </div><br></br>
                        <div>
                            Category: {contactRight.category}
                        </div><br></br>
                        <div>
                            Industry: {contactRight.industry}
                        </div><br></br>
                        <div>
                            Last Spoke: {contactRight.lastspoke}
                        </div><br></br>
                        <div>
                            Meeting Notes: {
                            splitContactRightNotes.map(word => {
                                if (word.includes(".") || word.includes(",") || word.includes("?") || word.includes("!") || word.includes("(") || word.includes(")") || word.includes(":")) {
                                    var wordWithoutPunctuation = word.substr(0, word.length - 1);
                                    if (this.props.matches.matchedKeywords.indexOf(wordWithoutPunctuation.toLowerCase()) !== -1) {
                                        return <span><Bold>{wordWithoutPunctuation}</Bold>{word[word.length -1]} </span>;
                                    }
                                } else if (this.props.matches.matchedKeywords.indexOf(word.toLowerCase()) !== -1) {
                                    return <Bold>{word} </Bold>
                                } else {
                                    return word + ' ';
                                }
                            })
                            }
                        </div><br></br>
                    </ContactRight>
                </ContactColumnsLayout>
            </MatchesListLayout>
        )
    }
}

export default MatchesList;