import React from 'react';
import styled from 'styled-components';
import ContactListEntry from './ContactListEntry.jsx';


let ContactList = (props) => (
    <div>
        {props.contacts.map((contact,index) => <ContactListEntry contact = {contact} key = {index} handleSelectEntry = {props.handleSelectEntry} index = {index}/>)}
    </div>
)

export default ContactList;