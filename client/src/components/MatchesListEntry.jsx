import React from 'react';

let MatchesListEntry = (props) => (
    <div>
        Matches: {JSON.stringify(props.match)}
    </div>
)

export default MatchesListEntry;