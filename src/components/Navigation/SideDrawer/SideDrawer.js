import React from 'react';
import styled, { css } from 'styled-components';

import NavigationItems from '../NavigationItems/NavigationItems';

const SideDrawerDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    height: 200px;
    list-style: none;
    font-family: 'Montserrat', sans-serif;
    flex-flow: column;
    opacity: 1;
    width: 100%;
    transition: transform 1s ease-out;
    transform: translateX(-200%);
    z-index: 10;

    ${props => props.open && css`
        transform: translateX(0%);
    `}

    @media(min-width: 600px) {
        display: none;
    }
`;

const SideDrawer = props => {
    return (
        <SideDrawerDiv open = { props.open} >
            <NavigationItems />
        </SideDrawerDiv>
    );
};

export default SideDrawer;