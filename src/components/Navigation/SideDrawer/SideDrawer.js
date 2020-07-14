import React from 'react';
import styled, { css } from 'styled-components';

import { useSelector } from 'react-redux';

import NavigationItems from '../NavigationItems/NavigationItems';

const SideDrawerDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    height: 30vh;
    list-style: none;
    font-family: 'Montserrat', sans-serif;
    flex-flow: column;
    opacity: 0.8;
    background: #296c92;
    width: 100%;
    align-items: center;
    justify-content: space-around;
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

    const sideDrawerOpen = useSelector(state => state.home.isOpen);

    return (
        <SideDrawerDiv open={ sideDrawerOpen } >
            <NavigationItems sideDrawer={ props.open }  />
        </SideDrawerDiv>
    );
};

export default SideDrawer;