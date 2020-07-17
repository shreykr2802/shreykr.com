import React from 'react';
import styled from 'styled-components';

import TestimonialBox from './TestimonialBox';

const TestimonialsPage = styled.section`
    background: white;
    height: 100vh;
    width: 100%;
    user-select: none;
    overflow: hidden;
    text-align: center;
`;

const TestimonialContents = styled.div`
    position: relative;
    top: 7vh;
    width: 100vw;
    height: 50vh;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-around;

    @media(max-width: 1000px) {
        top: 0vh;
        height: 90vh;
        flex-flow: column;
    }
`;

const TestimonialHeading = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    color: gray;
    margin-top: 6vh;
    margin-bottom: 0;

    @media(max-width: 1000px) {
        font-size: 1rem;
        margin-top: 1vh;
    }
`;

const DoubleQt = styled.span`
    margin: 0;
    padding: 0;
    font-size: 6rem;
    color: #296c92;
    font-family: 'Montserrat', sans-serif;

    @media(max-width: 1000px) {
        font-size: 3rem;
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

const Testimonials = props => {
    return (
        <TestimonialsPage id="testimonials">
            <TestimonialHeading><DoubleQt>&ldquo;</DoubleQt>A word from people</TestimonialHeading>
            <Underline />   
            <TestimonialContents>
                <TestimonialBox />
                <TestimonialBox />
                <TestimonialBox />
            </TestimonialContents>
        </TestimonialsPage>
    );
};

export default Testimonials;