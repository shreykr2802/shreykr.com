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
    `;

const SwipeRightDiv = styled.div`  
        margin-top: 1%;
        position: absolute;
        display: flex;
        align-items: center;
        animation: swipeleft-animation 2s infinite; 

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
    `;

const SwipeRight = styled.button`
        outline: none;
        border: 0;
        background: transparent;
        font-size: 11pt;
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
        height: 50%;
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
                <div>
                    <SwipeRightDiv>
                        <SwipeRight onClick={ props.swipeRight }>
                            <span style={ { marginRight: '3px' } }>Swipe Right</span>
                            <FaArrowRight />
                        </SwipeRight>
                    </SwipeRightDiv>
                </div>
            </SkillsDiv>
        </AboutDiv>
    );
};

export default AboutSkill;