import React from 'react';
import styled from 'styled-components';
import './ScrollDown.css';

import { FaArrowDown } from 'react-icons/fa';

const ScrollDownDiv = styled.div`
        position: relative;
        margin-left: 50vw;
        width: 30%;
        bottom: 10%;
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
        color: #296c92;
        font-size: 1rem;
        font-weight: 600;
        font-family: 'Montserrat', sans-serif;
        cursor: pointer;
    `;

const ScrollDown = props => {

    const scrollToNextHandler = event => {
        event.preventDefault();
        console.log("clicked");
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
                <span className="Scroll-Down-Text">Scroll Down</span>
            </ScrollDownButton>
        </ScrollDownDiv>
    );
};

export default ScrollDown;