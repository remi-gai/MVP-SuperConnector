import React from 'react';
import styled from 'styled-components';

const Entry = styled.div`
   /* display: flex; */
   /* flex-direction: row; */
   border: solid 1px black;
   cursor: pointer;
`

let ContactListEntry = (props) => (
   <Entry onClick={() => props.handleSelectEntry(props.index)}>
      <div>
         Full Name: {props.contact.fullname}
      </div>
      <div>
         Memo: {props.contact.memo}
      </div>
      <div>
         Position: {props.contact.position}
      </div>
      <div>
         Location: {props.contact.location}
      </div>
      <div>
         Closeness: {props.contact.closeness}
      </div>
      <div>
         Category: {props.contact.category}
      </div>
      <div>
         Industry: {props.contact.industry}
      </div>
      <div>
         Last Spoke: {props.contact.lastspoke}
      </div>
      <div>
         Keywords: {JSON.stringify(props.contact.keywords)}
      </div><br></br>
   </Entry>
)

export default ContactListEntry;