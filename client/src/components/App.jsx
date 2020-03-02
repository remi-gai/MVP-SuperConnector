import React, { Component } from 'react';
import ContactForm from './ContactForm.jsx';
import NotesForm from './NotesForm.jsx';
import ContactList from './ContactList.jsx';
import MatchesList from './MatchesList.jsx';
import ContactFormModal from './ContactFormModal.jsx';
import MeetingNotesModal from './MeetingNotesModal.jsx';
import MatchesModal from './MatchesModal.jsx';
import extractKeywords from './stopwordsRemoval.js';
import dummyContacts from './dummyData.js';
import generateMatches from './generateMatches.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { records: [], meetingnotes: [], matches: [], contactFormModal: false, matchesModal: false, meetingNotesModal: false };
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
    this.setState({ matchesModal: !this.state.matchesModal });
  }

  handleMeetingNotesModal() {
    this.setState({ meetingNotesModal: !this.state.meetingNotesModal });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleContactFormModal.bind(this)}>Contact Form</button>
        <button onClick={this.generateMatches.bind(this)}>Generate Matches</button>
        <button onClick={this.handleMatchesModal.bind(this)}>View Matches</button>
        <button onClick={this.handleMeetingNotesModal.bind(this)}>Create Meeting Notes</button>
        <ContactList contacts={this.state.records} />
        {this.state.contactFormModal ?
          (<ContactFormModal>
            <ContactForm handleNameChange={this.handleNameChange.bind(this)} handleMemoChange={this.handleMemoChange.bind(this)} handlePositionChange={this.handlePositionChange.bind(this)} handleCompanyChange={this.handleCompanyChange.bind(this)} handleMeetingNotesChange={this.handleMeetingNotesChange.bind(this)} handleLocationChange={this.handleLocationChange.bind(this)} handleClosenessChange={this.handleClosenessChange.bind(this)} handleCategoryChange={this.handleCategoryChange.bind(this)} handleIndustryChange={this.handleIndustryChange.bind(this)} handleLastSpokeChange={this.handleLastSpokeChange.bind(this)} handleContactFormSubmit={this.handleContactFormSubmit.bind(this)} />
          </ContactFormModal>) : null
        }
        {this.state.matchesModal ?
          (<MatchesModal>
            <MatchesList matches={this.state.matches} />
          </MatchesModal>) : null
        }
        {this.state.meetingNotesModal ?
          (<MeetingNotesModal>
            <NotesForm handleNotesFormSubmit={this.handleNotesFormSubmit.bind(this)} handleNameChangeNotesForm={this.handleNameChangeNotesForm.bind(this)} handleMeetingNotesChangeNotesForm={this.handleMeetingNotesChangeNotesForm.bind(this)} />
          </MeetingNotesModal>) : null
        }
      </div>
    );
  }
}

export default App;