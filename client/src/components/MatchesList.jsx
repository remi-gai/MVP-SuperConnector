import React from 'react';
import MatchesListEntry from './MatchesListEntry.jsx';

let MatchesList = (props) => (
    <div>
        {props.matches.map((match, index) => <MatchesListEntry match = {match} key = {index}/>)}
    </div>
)

export default MatchesList;