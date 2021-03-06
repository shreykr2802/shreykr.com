import React from 'react';
import styled from 'styled-components';

import shrey from '../../../assets/images/shreykr.png';

const NavigationItemsDiv = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media(max-width: 600px) {
        flex-flow: column;
    }
`;

const NavDivLeft = styled.div`
    display: flex;
    float: left;
    top: 0;
    left: 0;
    flex-flow: row;
    padding-left: 2%;
    align-items: center;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    cursor: pointer;

    @media( max-width: 1000px) {
        font-size: 0.8rem;
    }

    @media(max-width: 600px) {
        font-size: 1rem;
    }
`;

const NavDivRight = styled.div`
    display: flex;
    float: right;
    top: 0;
    right: 0;
    flex-flow: row;
    padding-right: 2%;
    width: 60%;
    justify-content: space-around;
    text-transform: uppercase;

    @media(max-width: 600px) {
        flex-flow: column;
        align-items: center;
    }
`;

const NavButton = styled.a`
    font-size: 0.8rem;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    color: white;
    font-weight: 600;
    padding: 10px;
    cursor: pointer;

    &:active {
        color: #296c92;
    }

    @media( max-width: 1000px) {
        font-size: 0.6rem;
        padding: 5px;
    }

    @media(max-width: 600px) {
        font-size: 1rem;
        padding-top: 10px;
    }
`;

const Logo = styled.img`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    padding: 10px;
`;

const NavigationItems = props => {

    const goToSection = (event, section) => {
        const secEle = props[section].current;
        event.preventDefault();
        let y = secEle.getBoundingClientRect().top + window.scrollY;
        window.scroll({
            top: y,
            behavior: 'smooth'
        });
        props.closed && props.closed();
    }

    return (
        <NavigationItemsDiv>
            <NavDivLeft onClick={ (event) => goToSection(event, "home") }>
                <Logo src={ shrey } />
                <div>Shrey Kumar</div>
            </NavDivLeft>
            <NavDivRight>
                <NavButton onClick={ (event) => goToSection(event, "about") }>About</NavButton>
                <NavButton onClick={ (event) => goToSection(event, "testimonials") }>Testimonials</NavButton>
                <NavButton onClick={ (event) => goToSection(event, "works") }>Works</NavButton>
                <NavButton onClick={ (event) => goToSection(event, "contact") }>Contact</NavButton>
            </NavDivRight>
        </NavigationItemsDiv>
    );
};

export default NavigationItems;
