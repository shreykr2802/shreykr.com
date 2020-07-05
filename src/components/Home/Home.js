import React from 'react';
import styled from 'styled-components';
import './Home.css';

import ScrollDown from '../UI/ScrollDown/ScrollDown';

const HomePage = styled.section`
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
    `;

    const HomePageRight = styled.div`
        left: 50vw;
        top: 0;
        width: 50vw;
        height: 100vh;
        background: white;
        color: #296c92;
    `;

    const LeftSideWrapper = styled.div`
        left: 0;
        top: 0;
        height: 100vh;
        width: 50vw;
        background: #296c92;
        position: absolute;
        overflow: hidden;
        color: white;
    `;

const Home = props => {

    return (
        <HomePage>
            <HomePageRight>
                <span className="Hello-Text-Blue">
                    <span>HE</span>
                    <span>LLO.</span>
                </span>
                <LeftSideWrapper>
                    <span className="Hello-Text-White">
                        <span>HE</span>
                        <span>LLO.</span>
                    </span>
                </LeftSideWrapper>
            </HomePageRight>
            <ScrollDown section="about" />
        </HomePage>
    );
};

export default Home;