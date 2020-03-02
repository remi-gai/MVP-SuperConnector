import React from 'react';
import MatchesListEntry from './MatchesListEntry.jsx';
import styled from 'styled-components';

let MatchesList = (props) => (
    <div>
        {props.matches.map((match, index) => <MatchesListEntry match = {match} key = {index}/>)}
    </div>
)

export default MatchesList;