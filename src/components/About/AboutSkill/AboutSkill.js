import React from 'react';
import styled from 'styled-components';
import '../About.css';
import { FaArrowRight } from 'react-icons/fa';

import AboutSkillDesc from '../AboutSkill/AboutSkillDesc';
import AboutSkillPassion from '../AboutSkill/AboutSkillPassion';
import AboutSkillLanguage from '../AboutSkill/AboutSkillLanguage';

const AboutDiv = styled.div`
    top: 20vh;
    position: relative;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    left: 10%;

    @media( max-width: 1000px) {
        top: 10vh;
        left: 2.5%;
        width: 95%;
    }

    @media (max-width: 850px) {
        top: 5vh;
        flex-flow: column;
        align-items: flex-start;
        left: 20%;
        width: 80%;
    }
`;

const SwipeRightDiv = styled.div`  
    margin-top: 1%;
    position: relative;
    display: flex;
    align-items: center;
    animation: swipeleft-animation 2s infinite; 
    float: right;
    width: 100%;

    @keyframes swipeleft-animation {
        0% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(-10px);
        }
        100% {
            transform: translateX(0);
        }
    }

    @media (max-width: 850px) {
        flex: 1 1 100%;
    }
`;

const SwipeRight = styled.button`
    outline: none;
    border: 0;
    background: transparent;
    font-size: 1rem;
    color: #296c92;
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    cursor: move;
`;

const SkillsDiv = styled.div`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
    justify-content: flex-start;

    @media (max-width: 850px) {
        flex-flow: row;
        max-width: 80%;
        align-items: flex-start;
        justify-content: flex-start;
        flex-wrap: wrap;
        flex-grow: 1;
    }
`;

const AboutSkill = props => {

    return (
        <AboutDiv>
            <SkillsDiv>
                <AboutSkillDesc />
            </SkillsDiv>
            <SkillsDiv>
                <AboutSkillPassion />
            </SkillsDiv>
            <SkillsDiv>
                <AboutSkillLanguage />
                <SwipeRightDiv>
                    <SwipeRight>
                        <span style={ { marginRight: '3px' } }>Swipe</span>
                        <FaArrowRight />
                    </SwipeRight>
                </SwipeRightDiv>
            </SkillsDiv>
        </AboutDiv>
    );
};

export default AboutSkill;