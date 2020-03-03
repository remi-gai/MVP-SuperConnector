import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';

const CategoryEntryStyling = styled.div`
    padding: 5px;
    border-bottom: solid 1px hsl(202,10%,88%);
    font-size: 14px;
`

let CategoryEntry = (props) => (
    <CategoryEntryStyling>
        {props.category}
    </CategoryEntryStyling>
);

export default CategoryEntry;