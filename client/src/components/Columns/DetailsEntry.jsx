import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';

let DetailsEntry = (props) => (
    <div onClick={() => props.handleSelectEntry(props.index)}>
        O
    </div>
);

export default DetailsEntry;