import React from 'react';
import styled from 'styled-components';

const CloseButtonNotesForm = styled.div`
    cursor: pointer;
`

let NotesForm = (props) => (
  <div>
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
  </div>
)

export default NotesForm;
