import React from 'react';
import styled from 'styled-components';

let MatchesListEntry = (props) => (
    <div>
        Matches: {JSON.stringify(props.match)}
    </div>
)

export default MatchesListEntry;