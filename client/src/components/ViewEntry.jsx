import React from 'react';
import styled from 'styled-components';

const CloseButtonViewEntry = styled.div`
    cursor: pointer;
`

const ViewEntryLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 500px;
    background-color: white;
    border: solid 1px black;
`

let ViewEntry = (props) => (
    <ViewEntryLayout>
        <CloseButtonViewEntry onClick={props.handleCloseViewEntry}>
            X Close
        </CloseButtonViewEntry><br></br>
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
    </ViewEntryLayout>
);

export default ViewEntry;