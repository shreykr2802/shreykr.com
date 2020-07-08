import React from 'react';
import styled from 'styled-components';

import { FaArrowDown } from 'react-icons/fa';

const ScrollDownDiv = styled.div`
    position: absolute;
    bottom: 3%;
    height: 10%;
    display: flex;
    align-items: center;
    animation: scrolldown-animation 2s infinite; 
    @keyframes scrolldown-animation {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0);
        }
    }
`;

const ScrollDownButton = styled.button`
    outline: none;
    border: 0;
    background: transparent;
    font-size: 11pt;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
`;

const ScrollDownText = styled.span`
    margin-left: 3px;
`;

const ScrollDown = props => {

    const scrollToNextHandler = event => {
        event.preventDefault();
        const aboutElement = document.getElementById(props.section);
        let y = aboutElement.getBoundingClientRect().top + window.scrollY;
        window.scroll({
            top: y,
            behavior: 'smooth'
        });
    }

    return (
        <ScrollDownDiv>
            <ScrollDownButton onClick={ scrollToNextHandler }>
                <FaArrowDown />
                <ScrollDownText>Scroll Down</ScrollDownText>
            </ScrollDownButton>
        </ScrollDownDiv>
    );
};

export default ScrollDown;