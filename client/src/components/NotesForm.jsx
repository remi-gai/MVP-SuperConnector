import React from 'react';
import styled from 'styled-components';

const CloseButtonNotesForm = styled.div`
    cursor: pointer;
`
const NotesFormLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 500px;
    background-color: white;
    border: solid 1px black;
`

let NotesForm = (props) => (
  <NotesFormLayout>
    <CloseButtonNotesForm onClick={props.handleCloseMeetingNotes}>
      X Close
    </CloseButtonNotesForm><br></br>
    <label>
      Full Name:
          <input type="text" onChange={props.handleNameChangeNotesForm} />
    </label><br></br>
    <label>
      Meeting Notes:
          <textarea onChange={props.handleMeetingNotesChangeNotesForm} />
    </label><br></br>
    <button onClick={props.handleNotesFormSubmit}>Save</button>
  </NotesFormLayout>
)

export default NotesForm;
