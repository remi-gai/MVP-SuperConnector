import React from 'react';
import MatchesListEntry from './MatchesListEntry.jsx';
import styled from 'styled-components';

const CloseButtonMatchesList = styled.div`
    cursor: pointer;
`

let MatchesList = (props) => (
    <div>
        <CloseButtonMatchesList onClick={props.handleCloseMatchesList}>
            X Close
        </CloseButtonMatchesList><br></br>
        {props.matches.map((match, index) => <MatchesListEntry match = {match} key = {index}/>)}
    </div>
)

export default MatchesList;