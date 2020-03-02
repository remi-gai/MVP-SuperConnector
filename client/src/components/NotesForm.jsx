import React from 'react';
import styled from 'styled-components';


let NotesForm = (props) => (
    <div>
        <label>
            Full Name:
          <input type="text" onChange={props.handleNameChangeNotesForm} />
        </label><br></br>
        <label>
            Meeting Notes:
          <textarea onChange={props.handleMeetingNotesChangeNotesForm} />
        </label><br></br>
        <button onClick = {props.handleNotesFormSubmit}>Save</button>
    </div>
)

export default NotesForm;
