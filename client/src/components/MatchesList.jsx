import React from 'react';
import MatchesListEntry from './MatchesListEntry.jsx';
import styled from 'styled-components';

const CloseButtonMatchesList = styled.div`
    cursor: pointer;
`
const MatchesListLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1000px;
    height: 700px;
    background-color: white;
    border: solid 1px black;
`

let MatchesList = (props) => (
    <MatchesListLayout>
        <CloseButtonMatchesList onClick={props.handleCloseMatchesList}>
            X Close
        </CloseButtonMatchesList><br></br>
        {props.matches.map((match, index) => <MatchesListEntry match={match} key={index} />)}
    </MatchesListLayout>
)

export default MatchesList;