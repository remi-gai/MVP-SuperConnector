import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';

const DetailsEntryStyling = styled.div`
    padding: 5px;
    border-bottom: solid 1px hsl(202,10%,88%);
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    align-items:center;
    justify-content: center;
`
const IconLandingPage = styled.input`
  width: 16px;
  height: 16px;
  opacity: 1;

  &:hover {
    opacity: 0.7;  
  }
`

let DetailsEntry = (props) => (
    <DetailsEntryStyling onClick={() => props.handleSelectEntry(props.index)}>
        <IconLandingPage type="image" src="./icons/Expand.svg" />
    </DetailsEntryStyling>
);

export default DetailsEntry;