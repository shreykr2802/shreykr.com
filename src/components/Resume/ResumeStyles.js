import styled, { keyframes } from 'styled-components';

import Colors from '../../constants/Color';

export const ResumePage = styled.section`
    background: ${Colors.primary};
    height: 100vh;
    width: 100vw;
    user-select: none;
    overflow: hidden;
    text-align: center;
`;

export const RowResumePage = styled.div`
    width: 100vw;
    height: 50vh;
    display: flex;
    flex-flow: row;
`;

export const ResumeContent = styled.div`
   width: 50vw;
   height: 100%;
   background: ${props => props.background};
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const ContentButton = styled.button`
    width: 50%;
    height: 100px;
    background: #eee;
    color: ${Colors.primary};
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    outline: none;
    border: 0;
    border-radius: 50px;
    cursor: pointer;
    box-sizing: border-box;
    box-shadow: inset 1px 1px 10px 5px ${Colors.primary};

    &:hover{
        transform: scale(1.1, 1.1);
    }
`;

const ResumeSummaryAnimation = (x, y) => keyframes`
    0% {
        clip-path: circle(0% at 0 0);
    }
    100% {
        clip-path: circle(150% at 0 0);
    }
`;

const ResumeSummaryAnimationExit = (x, y) => keyframes`
    0% {
        clip-path: circle(150% at 0 0);
    }
    100% {
        clip-path: circle(0% at 0 0);
    }
`;

const ResumeEducationAnimation = (x, y) => keyframes`
    0% {
        clip-path: circle(0% at 100% 0);
    }
    100% {
        clip-path: circle(150% at 100% 0);
    }
`;

const ResumeEducationAnimationExit = (x, y) => keyframes`
    0% {
        clip-path: circle(150% at 100% 0);
    }
    100% {
        clip-path: circle(0% at 100% 0);
    }
`;

const ResumeExperienceAnimation = (x, y) => keyframes`
    0% {
        clip-path: circle(0% at 0 100%);
    }
    100% {
        clip-path: circle(150% at 0 100%);
    }
`;

const ResumeExperienceAnimationExit = (x, y) => keyframes`
    0% {
        clip-path: circle(150% at 0 100%);
    }
    100% {
        clip-path: circle(0% at 0 100%);
    }
`;

const ResumeExceptWorkAnimation = (x, y) => keyframes`
    0% {
        clip-path: circle(0% at 100% 100%);
    }
    100% {
        clip-path: circle(150% at 100% 100%);
    }
`;

const ResumeExceptWorkAnimationExit = (x, y) => keyframes`
    0% {
        clip-path: circle(150% at 100% 100%);
    }
    100% {
        clip-path: circle(0% at 100% 100%);
    }
`;

export const ResumeSummary = styled.div`
    width: 100vw;
    height: 100vh;
    display: none;
    flex-flow: row;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    animation: ${props => props.exit ? ResumeSummaryAnimation : ResumeSummaryAnimationExit } 0.8s ease-in-out;
    animation-fill-mode: forwards;
`;

export const ResumeEducation = styled.div`
    width: 100vw;
    height: 100vh;
    display: none;
    flex-flow: row;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    animation: ${props => props.exit ? ResumeEducationAnimation : ResumeEducationAnimationExit } 0.8s ease-in-out;
    animation-fill-mode: forwards;
`;

export const ResumeExperience = styled.div`
    width: 100vw;
    height: 100vh;
    display: none;
    flex-flow: row;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    animation: ${props => props.exit ? ResumeExperienceAnimation : ResumeExperienceAnimationExit } 0.8s ease-in-out;
    animation-fill-mode: forwards;
`;

export const ResumeExceptWork = styled.div`
    width: 100vw;
    height: 100vh;
    display: none;
    flex-flow: row;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    animation: ${props => props.exit ? ResumeExceptWorkAnimation : ResumeExceptWorkAnimationExit } 0.8s ease-in-out;
    animation-fill-mode: forwards;
`;

export const ResumeSplitScreenContent = styled.div`
    width: 50vw;
    height: 100%;
    background: ${props => props.background};
`;

export const BackButton = styled.div`
    height: 50px;
    width: 50px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 50px;
    cursor: pointer;
    transform: ${props => props.exit ? "translateX(50px)" : "translateX(-100px)"};
    transition: transform 0.4s ease;
`;