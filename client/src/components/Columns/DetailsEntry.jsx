import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';

const DetailsEntryStyling = styled.div`
    padding: 5px;
    border-bottom: solid 1px hsl(202,10%,88%);
    font-size: 14px;
`

let DetailsEntry = (props) => (
    <DetailsEntryStyling onClick={() => props.handleSelectEntry(props.index)}>
        O
    </DetailsEntryStyling>
);

export default DetailsEntry;