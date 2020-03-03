import React, { Component } from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import ContactForm from './ContactForm.jsx';
import NotesForm from './NotesForm.jsx';
import MatchesList from './MatchesList.jsx';
import ContactFormModal from './ContactFormModal.jsx';
import MeetingNotesModal from './MeetingNotesModal.jsx';
import ViewEntry from './ViewEntry.jsx';
import ViewEntryModal from './ViewEntryModal.jsx';
import MatchesModal from './MatchesModal.jsx';
import extractKeywords from './stopwordsRemoval.js';
import dummyContacts from './dummyData.js';
import generateMatches from './generateMatches.js';
import FullNameEntry from './Columns/FullNameEntry.jsx';
import MemoEntry from './Columns/MemoEntry.jsx';
import CompanyEntry from './Columns/CompanyEntry.jsx';
import PositionEntry from './Columns/PositionEntry.jsx';
import ClosenessEntry from './Columns/ClosenessEntry.jsx';
import LastSpokeEntry from './Columns/LastSpokeEntry.jsx';
import IndustryEntry from './Columns/IndustryEntry.jsx';
import LocationEntry from './Columns/LocationEntry.jsx';
import CategoryEntry from './Columns/CategoryEntry.jsx';
import DetailsEntry from './Columns/DetailsEntry.jsx';

document.body.style.backgroundColor = "#EEEEEE";
document.body.style.fontFamily = "Helvetica Neue, Helvetica, Arial, sans-serif";
document.body.style.fontSize = "medium";

const AppPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: white;
  height: 75px;
  background-color: #2D4053;
`
const NavigationBar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`

const Controls = styled.div`
  margin-top: -20px;
  display: flex;
  flex-direction: row;
`

const ContactPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
`
const DetailsColumn = styled.div`
  border-right: solid 1px hsl(202,10%,88%);
  border-bottom: solid 1px hsl(202,10%,88%);
`

const FullNameColumn = styled.div`
  width: 100%;
  border-right: solid 1px hsl(202,10%,88%);
  border-bottom: solid 1px hsl(202,10%,88%);
`

const MemoColumn = styled.div`
  width: 100%;
  border-right: solid 1px hsl(202,10%,88%);
  border-bottom: solid 1px hsl(202,10%,88%);
`

const CompanyColumn = styled.div`
  width: 100%;
  border-right: solid 1px hsl(202,10%,88%);
  border-bottom: solid 1px hsl(202,10%,88%);
`

const PositionColumn = styled.div`
  width: 100%; 
  border-right: solid 1px hsl(202,10%,88%);
  border-bottom: solid 1px hsl(202,10%,88%);
`

const ClosenessColumn = styled.div`
  /* width: 100%; */
  border-right: solid 1px hsl(202,10%,88%);
  border-bottom: solid 1px hsl(202,10%,88%);
`

const CategoryColumn = styled.div`
  /* width: 100%; */
  border-right: solid 1px hsl(202,10%,88%);
  border-bottom: solid 1px hsl(202,10%,88%);
`

const IndustryColumn = styled.div`
  /* width: 100%; */
  border-right: solid 1px hsl(202,10%,88%);
  border-bottom: solid 1px hsl(202,10%,88%);
`
const LocationColumn = styled.div`
  /* width: 100%; */
  border-right: solid 1px hsl(202,10%,88%);
  border-bottom: solid 1px hsl(202,10%,88%);
`

const LastSpokeColumn = styled.div`
  /* width: 100%; */
  border-right: solid 1px hsl(202,10%,88%);
  border-bottom: solid 1px hsl(202,10%,88%);
`

const ColumnHeader = styled.div`
  font-weight: bold;
  background-color: #EEEE;
  /* padding: 16px; */
  padding-top: 8px;
  padding-bottom: 8px;
`

const ContactsBox = styled.div`
  background-color: white;
  width: 90px;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  border-radius: 4px 4px 0px 0px;
`

const Separator = styled.div`
  display: flex;
  align-items: flex-end;
  background-color: #31CE7B;
  height: 40px;
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

const MatchCount = styled.div`
  background-color: #0091FF;
  color: white;
  border-radius: 10px;
  padding: 0 10px 0 10px;
  font-size: .750rem;
  height: 20px;
  font-weight: 500;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;  
  align-items: center;
  width: 60px;
  margin: 5px;
  cursor: pointer;
`

const MatchControls = styled.div`
  display: flex;
  flex-direction: row;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { records: [], meetingnotes: [], matches: [], contactFormModal: false, matchesModal: false, meetingNotesModal: false, currentEntry: 0, viewEntryModal: false, currentMatch: 0 };
  }

  componentDidMount() {
    this.setState({ records: dummyContacts.contacts, meetingnotes: dummyContacts.meetingnotes }, this.generateKeyWords);
  }

  generateKeyWords() {
    for (var i = 0; i < this.state.meetingnotes.length; i++) {
      var keywords = extractKeywords(this.state.meetingnotes[i].NotesFormmeetingnotes);
      for (var j = 0; j < this.state.records.length; j++) {
        var oldrecords = this.state.records;
        if (this.state.meetingnotes[i].NotesFormfullname === oldrecords[i].fullname) {
          oldrecords[i].keywords = keywords;
          this.setState({ records: oldrecords });
        }
      }
    }
  }

  generateMatches() {
    this.generateKeyWords();
    var matches = [];
    var pairs = [];
    for (var i = 0; i < this.state.records.length; i++) {
      for (var j = 0; j < this.state.records.length; j++) {
        if (i === j) {
          continue;
        } else {
          var newMatch = generateMatches(this.state.records[i].keywords, this.state.records[j].keywords);
          if (newMatch.length !== 0 && this.checkDuplication(pairs, this.state.records[j].fullname, this.state.records[i].fullname)) {
            matches.push({ contact1: this.state.records[i].fullname, contact2: this.state.records[j].fullname, matchedKeywords: newMatch });
            pairs.push(this.state.records[i].fullname + this.state.records[j].fullname);
            pairs.push(this.state.records[j].fullname + this.state.records[i].fullname);
          }
        }
      }
    }
    this.setState({ matches: matches });
  }

  checkDuplication(pairs, contact1, contact2) {
    if (pairs.indexOf(contact1 + contact2) === -1) {
      return true;
    } else {
      return false;
    }
  }

  handleNameChange(event) {
    this.setState({ fullname: event.target.value });
  }

  handleMemoChange(event) {
    this.setState({ memo: event.target.value });
  }

  handlePositionChange(event) {
    this.setState({ position: event.target.value });
  }

  handleCompanyChange(event) {
    this.setState({ company: event.target.value });
  }

  handleMeetingNotesChange(event) {
    this.setState({ meetingnotes: event.target.value });
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value });
  }

  handleClosenessChange(event) {
    this.setState({ closeness: event.target.value });
  }

  handleCategoryChange(event) {
    this.setState({ category: event.target.value });
  }

  handleIndustryChange(event) {
    this.setState({ industry: event.target.value });
  }

  handleLastSpokeChange(event) {
    this.setState({ lastspoke: event.target.value });
  }

  handleContactFormSubmit() {
    var oldRecords = this.state.records;
    oldRecords.push({ fullname: this.state.fullname, position: this.state.position, company: this.state.company, location: this.state.location, closeness: this.state.closeness, category: this.state.cateogry, industry: this.state.industry, lastspoke: this.state.lastspoke, keywords: [], memo: this.state.memo });
    this.setState({ records: oldRecords });
  }

  handleNotesFormSubmit() {
    var oldMeetingNotes = this.state.meetingnotes;
    oldMeetingNotes.push({ NotesFormfullname: this.state.NotesFormfullname, NotesFormmeetingnotes: this.state.NotesFormmeetingnotes });
    this.setState({ meetingnotes: oldMeetingNotes });
  }

  handleNameChangeNotesForm(event) {
    this.setState({ NotesFormfullname: event.target.value });
  }

  handleMeetingNotesChangeNotesForm(event) {
    this.setState({ NotesFormmeetingnotes: event.target.value });
  }

  handleContactFormModal() {
    this.setState({ contactFormModal: !this.state.contactFormModal });
  }

  handleMatchesModal() {
    if (this.state.matches.length !== 0) {
      this.setState({ matchesModal: !this.state.matchesModal });
    }
  }

  handleMeetingNotesModal() {
    this.setState({ meetingNotesModal: !this.state.meetingNotesModal });
  }

  handleSelectEntry(entry) {
    this.setState({ viewEntryModal: true, currentEntry: entry });
  }

  handleCloseViewEntry() {
    this.setState({ viewEntryModal: false });
  }

  handleCloseMatchesList() {
    this.setState({ matchesModal: false });
  }

  handleCloseMeetingNotes() {
    this.setState({ meetingNotesModal: false });
  }

  handleCloseContactForm() {
    this.setState({ contactFormModal: false });
  }

  handleNextMatch() {
    if (this.state.currentMatch === this.state.matches.length - 1) {
      return;
    } else {
      this.setState({ currentMatch: this.state.currentMatch + 1 })
    }
  }

  handlePreviousMatch() {
    if (this.state.currentMatch === 0) {
      return;
    } else {
      this.setState({ currentMatch: this.state.currentMatch - 1 })
    }
  }

  render() {
    return (
      <AppPage>
        <Header>Super Connector</Header>
        <Separator>
          <ContactsBox>Contacts</ContactsBox>
        </Separator>
        <NavigationBar>
          <MatchControls>
            <MatchCount onClick={this.handleMatchesModal.bind(this)}>
              {this.state.matches.length + ' ' + "Matches"}
            </MatchCount>
            <Button onClick={this.generateMatches.bind(this)} style={{backgroundColor: '#FA6400'}}>Match!</Button>
          </MatchControls><br></br>
          <Controls>
            <Button onClick={this.handleContactFormModal.bind(this)}>Contact +</Button>
            <Button onClick={this.handleMeetingNotesModal.bind(this)}>Notes +</Button>
          </Controls>
        </NavigationBar>
        <ContactPage>
          <DetailsColumn>
            <ColumnHeader>Details</ColumnHeader>
            {this.state.records.map((record, index) => <DetailsEntry index={index} key={index} handleSelectEntry={this.handleSelectEntry.bind(this)} />)}
          </DetailsColumn >
          <FullNameColumn>
            <ColumnHeader>Full Name</ColumnHeader>
            {this.state.records.map((record, index) => <FullNameEntry fullname={record.fullname} key={index} />)}
          </FullNameColumn>
          <MemoColumn>
            <ColumnHeader>Memo</ColumnHeader>
            {this.state.records.map((record, index) => <MemoEntry memo={record.memo} key={index} />)}
          </MemoColumn>
          <CompanyColumn>
            <ColumnHeader>Company</ColumnHeader>
            {this.state.records.map((record, index) => <CompanyEntry company={record.company} key={index} />)}
          </CompanyColumn>
          <PositionColumn>
            <ColumnHeader>Position</ColumnHeader>
            {this.state.records.map((record, index) => <PositionEntry position={record.position} key={index} />)}
          </PositionColumn>
          <ClosenessColumn>
            <ColumnHeader>Closeness</ColumnHeader>
            {this.state.records.map((record, index) => <ClosenessEntry closeness={record.closeness} key={index} />)}
          </ClosenessColumn>
          <CategoryColumn>
            <ColumnHeader>Category</ColumnHeader>
            {this.state.records.map((record, index) => <CategoryEntry category={record.category} key={index} />)}
          </CategoryColumn>
          <IndustryColumn>
            <ColumnHeader>Industry</ColumnHeader>
            {this.state.records.map((record, index) => <IndustryEntry industry={record.industry} key={index} />)}
          </IndustryColumn>
          <LocationColumn>
            <ColumnHeader>Location</ColumnHeader>
            {this.state.records.map((record, index) => <LocationEntry location={record.location} key={index} />)}
          </LocationColumn>
          <LastSpokeColumn>
            <ColumnHeader>Last Spoke</ColumnHeader>
            {this.state.records.map((record, index) => <LastSpokeEntry lastspoke={record.lastspoke} key={index} />)}
          </LastSpokeColumn>
        </ContactPage>
        {this.state.contactFormModal ?
          (<ContactFormModal handleCloseContactForm={this.handleCloseContactForm.bind(this)}>
            <ContactForm handleCloseContactForm={this.handleCloseContactForm.bind(this)} handleNameChange={this.handleNameChange.bind(this)} handleMemoChange={this.handleMemoChange.bind(this)} handlePositionChange={this.handlePositionChange.bind(this)} handleCompanyChange={this.handleCompanyChange.bind(this)} handleMeetingNotesChange={this.handleMeetingNotesChange.bind(this)} handleLocationChange={this.handleLocationChange.bind(this)} handleClosenessChange={this.handleClosenessChange.bind(this)} handleCategoryChange={this.handleCategoryChange.bind(this)} handleIndustryChange={this.handleIndustryChange.bind(this)} handleLastSpokeChange={this.handleLastSpokeChange.bind(this)} handleContactFormSubmit={this.handleContactFormSubmit.bind(this)} />
          </ContactFormModal>) : null
        }
        {this.state.matchesModal ?
          (<MatchesModal>
            <MatchesList meetingNotes={this.state.meetingnotes} records={this.state.records} matches={this.state.matches[this.state.currentMatch]} handlePreviousMatch={this.handlePreviousMatch.bind(this)} handleNextMatch={this.handleNextMatch.bind(this)} handleCloseMatchesList={this.handleCloseMatchesList.bind(this)} />
          </MatchesModal>) : null
        }
        {this.state.meetingNotesModal ?
          (<MeetingNotesModal>
            <NotesForm handleCloseMeetingNotes={this.handleCloseMeetingNotes.bind(this)} handleNotesFormSubmit={this.handleNotesFormSubmit.bind(this)} handleNameChangeNotesForm={this.handleNameChangeNotesForm.bind(this)} handleMeetingNotesChangeNotesForm={this.handleMeetingNotesChangeNotesForm.bind(this)} />
          </MeetingNotesModal>) : null
        }
        {this.state.viewEntryModal ?
          (<ViewEntryModal>
            <ViewEntry currentEntry={this.state.records[this.state.currentEntry]} handleSelectEntry={this.handleSelectEntry.bind(this)} handleCloseViewEntry={this.handleCloseViewEntry.bind(this)} />
          </ViewEntryModal>) : null
        }
      </AppPage>
    );
  }
}

export default App;