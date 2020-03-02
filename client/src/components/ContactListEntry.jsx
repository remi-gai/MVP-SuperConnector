import React from 'react';

let ContactListEntry = (props) => (
    <div>
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
    </div>
)

export default ContactListEntry;