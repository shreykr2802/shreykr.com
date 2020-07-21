import React from 'react';
import styled from 'styled-components';

import oldWebsite from '../../assets/images/OldWebsite.png';

const WorksPage = styled.section`
    background: white;
    height: 100vh;
    width: 100%;
    user-select: none;
    overflow: hidden;
    text-align: center;
`;

const WorksHeading = styled.h1`
    position: relative;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    color: gray;
    top: 12vh;
    
    @media(max-width: 1024px) {
        font-size: 1rem;
        top: 15vh;
    }
`;

const Underline = styled.div`
    width: 30%;
    height: 5px;
    background-color: #296c92;
    border-radius: 10px;
    left: 35%;
    position: relative;
    top: 15vh;
`;

const WroksTitle = styled.h2`
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    color: gray;
    top: 15vh;
    position: relative;

    @media(max-width: 1024px) {
        font-size: 1rem;
        top: 18vh;
    }
`;

const WorkImage = styled.img`
    position: relative;
    height: 400px;
    width: 500px;
    border: 1px solid #296c92;
    box-sizing: border-box;
    border-radius: 20px;
    box-shadow: 0px 10px 20px 1px #cadcfc;
    top: 15vh;

    &:hover {
        box-shadow: 0px 10px 20px 5px #cadcfc;
        transform: translateY(-5px);
    }

    @media(max-width: 768px) {
        height: 300px;
        width: 400px;
        top: 22vh;
    }

    @media(max-width: 425px) {
        height: 200px;
        width: 300px;
    }

`;

const Works = props => {

    return (
        <WorksPage ref = { props.works }>
            <WorksHeading>What do I do in my free time</WorksHeading>
            <Underline />
            <WroksTitle>Old version of the website</WroksTitle>
            <a href="http://shreykr.com" target="_blank" rel="noopener noreferrer"><WorkImage src={oldWebsite} /></a>
        </WorksPage>
    );
};

export default Works;