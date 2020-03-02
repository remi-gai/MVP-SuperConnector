import React from 'react';

let ViewEntry = (props) => (
    <div>
        <div>
            Full Name: {props.currentEntry.fullname}
        </div><br></br>
        <div>
            Memo: {props.currentEntry.memo}
        </div><br></br>
        <div>
            Position: {props.currentEntry.position}
        </div><br></br>
        <div>
            Company: {props.currentEntry.company}
        </div><br></br>
        <div>
            Location: {props.currentEntry.location}
        </div><br></br>
        <div>
            Closeness: {props.currentEntry.closeness}
        </div><br></br>
        <div>
            Category: {props.currentEntry.category}
        </div><br></br>
        <div>
            Industry: {props.currentEntry.industry}
        </div><br></br>
        <div>
            Last Spoke: {props.currentEntry.lastspoke}
        </div><br></br>
    </div>
);

export default ViewEntry;