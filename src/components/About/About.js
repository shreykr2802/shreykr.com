import React from 'react';
import styled from 'styled-components';

import AboutInfo from './AboutInfo/AboutInfo';
import AboutSkill from './AboutSkill/AboutSkill';

const AboutPage = styled.section`
    background: white;
    height: 100vh;
    width: 100%;
    user-select: none;
    overflow: hidden;
`;

const CorouselAbout = styled.div`
    height: 80vh;
    position: relative;
    min-width: 100%;
    width: 100%;
`;

const CorouselWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
`;

const About = props => {

    let x0 = null;

    let clickAndDrag = false;

    let corouselElement;

    let translatedWidth = 0;

    const unify = event => {
        return event.changedTouches ? event.changedTouches[0] : event
    }

    const lockHandler = event => {
        x0 = unify(event).clientX;
        clickAndDrag = true;
        corouselElement = document.getElementById('corouselWrapper');
    };

    const onClickAndDragEnd = event => {
        clickAndDrag = false;
        let dx = unify(event).clientX - x0;
        if (dx > 0 && dx > translatedWidth / 4) {
            translatedWidth = 0;
        } else if (dx < 0 && dx < (translatedWidth / 4)) {
            translatedWidth = -window.innerWidth;
        }
        corouselElement.style.transform = `translateX(${translatedWidth}px)`;
    };

    const clickAndDragHandler = event => {
        event.preventDefault();
        if (clickAndDrag) {
            if (x0 || x0 === 0) {
                let dx = unify(event).clientX - x0;
                corouselElement.style.transform = `translateX(${translatedWidth + dx}px)`;
                corouselElement.style.transition = 'transform 0.5s ease';
            }
        }
    }

    return (
        <AboutPage id="about" ref={ props.about }>
            <CorouselWrapper onMouseDown={ lockHandler } onTouchStart={ lockHandler }
                onMouseMove={ clickAndDragHandler } onTouchMove={ clickAndDragHandler }
                onMouseUp={ onClickAndDragEnd } onTouchEnd={ onClickAndDragEnd }
                id="corouselWrapper">
                <CorouselAbout>
                    <AboutInfo />
                </CorouselAbout>
                <CorouselAbout>
                    <AboutSkill />
                </CorouselAbout>
            </CorouselWrapper>
        </AboutPage>
    );
};

export default About;