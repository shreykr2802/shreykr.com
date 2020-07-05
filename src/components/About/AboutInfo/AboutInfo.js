import React from 'react';
import styled from 'styled-components';
import '../About.css';
import { FaArrowLeft } from 'react-icons/fa';

import shrey from '../../../assets/images/shreykr.png';

const AboutDiv = styled.div`
        top: 20vh;
        position: relative;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: space-evenly;
        width: 80%;
        left: 10%;
    `;

const ProfileImg = styled.img`
        height: 200px;
        width: 200px;
        border-radius: 50%; 
        &:hover {
            transform: translate(-10px, -10px);
        }
    `;

const AboutContentsImage = styled.div`
        width: 20%;
        height: 100%;
    `;

const ProfileImgDiv = styled.div`
        height: 200px;
        width: 200px;
        border-radius: 50%;
        background-color: #e7e7e7;
    `;

const AboutContentsDesc = styled.div`
        width: 60%;
        height: 100%;
    `;

const SwipeLeftDiv = styled.div`  
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

const SwipeLeft = styled.button`
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

const AboutInfo = props => {

    return (
        <AboutDiv>
            <AboutContentsImage>
                <ProfileImgDiv>
                    <ProfileImg src={ shrey } />
                </ProfileImgDiv>
            </AboutContentsImage>
            <AboutContentsDesc>
                <div>
                    <span className="title">I am Shrey</span><br />
                    <span className="designation">Front End Developer</span>
                    <div className="underline"></div>
                    <div className="about-description">
                        <p>Born in Bihar and moved all across India. I have completed my schooling from various parts of the India!</p>
                        <p>I have been learning and practicing programming since I was 13 years of age!</p>
                        <p>I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience.</p>
                        <p>Over the course of years I have learned various programming languages and actively learning new things, and web designing took my heart!</p>
                        <p>I am often termed as Ambitious, Smart Worker, Enthusiastic towards work! Not to brag here but I do believe it!</p>
                        <p>I love to travel and usually spend my free time by watching TV Series!</p>
                    </div>
                    <SwipeLeftDiv>
                        <SwipeLeft onClick={ props.swipeLeft }>
                            <FaArrowLeft />
                            <span style={ { marginLeft: '3px' } }>Swipe Left</span>
                        </SwipeLeft>
                    </SwipeLeftDiv>
                </div>
            </AboutContentsDesc>
        </AboutDiv>
    );
};

export default AboutInfo;