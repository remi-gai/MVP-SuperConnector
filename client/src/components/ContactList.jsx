import React from 'react';
import ContactListEntry from './ContactListEntry.jsx';

let ContactList = (props) => (
    <div>
        {props.contacts.map((contact,index) => <ContactListEntry contact = {contact} key = {index}/>)}
    </div>
)

export default ContactList;