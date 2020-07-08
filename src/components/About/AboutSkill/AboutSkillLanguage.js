import React, { Fragment } from 'react';
import styled from 'styled-components';
import '../About.css';

const Languages = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`;

const ProgressBar = styled.div`
    width: 80%;
    box-sizing: border-box;
    background: rgba(0,0,0,0.187);
    border-radius: 15px;
    height: 20px;
    z-index: 1;

    @media( max-width: 900px) {
        width: 60%;
        height: 10px;
    }
`;

const AboutSkillLanguage = props => {

    return (
        <Fragment>
            <div className="skill-title"><span>Languages</span></div>
            <Languages className="language-name">
                <div style={ { display: 'flex', flexFlow: 'column', width: '20%' } }>
                    <p>English</p>
                    <small>Fluent</small>
                </div>
                <ProgressBar>
                    <div className="english-bar"></div>
                </ProgressBar>
            </Languages>
            <Languages className="language-name">
                <div style={ { display: 'flex', flexFlow: 'column', width: '20%' } }>
                    <p>Hindi</p>
                    <small>Fluent</small>
                </div>
                <ProgressBar>
                    <div className="hindi-bar"></div>
                </ProgressBar>
            </Languages>
            <div className="language-name">
                <p></p>
            </div>
            <div className="language-name">
                <p></p>
            </div>
            <div className="language-name">
                <p></p>
            </div>
        </Fragment>
    );
};

export default AboutSkillLanguage;