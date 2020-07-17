import React from 'react';
import styled from 'styled-components';

import oldWebsite from '../../assets/images/OldWebsite.png';

const WroksPage = styled.section`
    background: white;
    height: 80vh;
    width: 100%;
    user-select: none;
    overflow: hidden;
    text-align: center;
`;

const WroksHeading = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    color: gray;
    margin-top: 6vh;

    @media(max-width: 1000px) {
        font-size: 1rem;
        margin-top: 1vh;
    }
`;

const Underline = styled.div`
    width: 30%;
    height: 5px;
    background-color: #296c92;
    border-radius: 10px;
    left: 35%;
    position: absolute;
`;

const WroksTitle = styled.h2`
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    color: gray;
    margin-top: 4vh;

    @media(max-width: 1000px) {
        font-size: 1rem;
        margin-top: 1vh;
    }
`;

const WorkImage = styled.img`
    height: 400px;
    width: 500px;
    border: 1px solid #296c92;
    box-sizing: border-box;
    border-radius: 20px;
    box-shadow: 0px 10px 20px 1px #cadcfc;
    margin-top: 10px;

    &:hover {
        box-shadow: 0px 10px 20px 5px #cadcfc;
        transform: translateY(-5px);
    }

`;

const Works = props => {
    return (
        <WroksPage>
            <WroksHeading>What do I do in my free time</WroksHeading>
            <Underline />
            <WroksTitle>Old version of the website</WroksTitle>
            <a href="http://shreykr.com" target="_blank"><WorkImage src={oldWebsite} /></a>
        </WroksPage>
    );
};

export default Works;