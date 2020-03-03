import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';

const FullNameEntryStyling = styled.div`
    padding: 5px;
    border-bottom: solid 1px hsl(202,10%,88%);
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

let FullNameEntry = (props) => (
    <FullNameEntryStyling>
        {props.fullname}
    </FullNameEntryStyling>
);

export default FullNameEntry;