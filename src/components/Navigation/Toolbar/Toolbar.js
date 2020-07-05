import React from 'react';
import styled from 'styled-components';

import shrey from '../../../assets/images/shreykr.png';

const ToolbarDiv = styled.div`
        background: transparent;
        height: 50px;
        width: 100%;
        top: 0;
        left: 0;
        position: fixed;
        color: black;
        font-family: 'Montserrat', sans-serif;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 10;
    `;

    const NavDivLeft = styled.div`
        display: flex;
        float: left;
        top: 0;
        left: 0;
        flex-flow: row;
        padding-left: 5%;
        color: black;
        align-items: center;
        font-weight: bold;
    `;

    const NavDivRight = styled.nav`
        display: flex;
        float: right;
        top: 0;
        right: 0;
        flex-flow: row;
        padding-right: 2%;
        width: 40%;
        justify-content: space-around;
        text-transform: uppercase;
    `;

    const NavButton = styled.a`
        font-size: 10pt;
        font-family: 'Montserrat', sans-serif;
        text-decoration: none;
        color: black;
        font-weight: 600;
        padding: 10px;
        &:active {
            color: #296c92;
        }
    `;

    const Logo = styled.img`
        height: 30px;
        width: 30px;
        border-radius: 50%;
        padding: 10px;
    `;

const Toolbar = props => {

    return (
        <ToolbarDiv>
            <NavDivLeft>
                <Logo src={shrey}/>
                <div>Shrey Kumar</div>
            </NavDivLeft>
            <NavDivRight>
                <NavButton href="#">Home</NavButton>
                <NavButton href="#about">About</NavButton>
                <NavButton href="#testimonials">Testimonials</NavButton>
                <NavButton href="#works">Works</NavButton>
                <NavButton href="#contact">Contact</NavButton>
            </NavDivRight>
        </ToolbarDiv>
    );
};

export default Toolbar;