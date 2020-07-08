import React from 'react';
import styled from 'styled-components';

import NavigationItems from '../NavigationItems/NavigationItems';

const ToolbarDiv = styled.div`
    background: #296c92;
    height: 50px;
    width: 100%;
    top: 0;
    left: 0;
    position: fixed;
    color: white;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;

    @media(max-width: 600px) {
        display: none;
    }

`;

const Toolbar = props => {

    return (
        <ToolbarDiv>
            <NavigationItems />
        </ToolbarDiv>
    );
};

export default Toolbar;