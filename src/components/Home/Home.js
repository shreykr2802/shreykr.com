import React from 'react';
import styled from 'styled-components';

import ScrollDown from '../UI/ScrollDown/ScrollDown';

const HomePage = styled.section`
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: #296c92;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Greet = styled.div`
    font-size: 3rem;
    background: transparent;

    @media (max-width: 400px) {
        font-size: 2rem;
    }
`;

const Typewriter = styled.h1`
    color: #fff;
    font-family: "DM Mono", monospace;
    overflow: hidden;
    border-right: .15em solid white;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: .15em;
    animation: 
        typing 3s steps(30, end),
        blink-caret .6s step-end infinite;

    @keyframes typing {
        from { 
            width: 0 
        }
        to { 
            width: 100% 
        }
    }

    @keyframes blink-caret {
        from, to { 
            border-color: transparent 
        }
        50% { 
            border-color: white; 
        }
    }
`;

const Home = props => {

    return (
        <HomePage ref={ props.home }>
            <Greet><Typewriter>Hello.</Typewriter></Greet>
            <ScrollDown section="about" />
        </HomePage>
    );
};

export default Home;