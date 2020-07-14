import React from 'react';
import styled from 'styled-components';

import TestimonialBox from './TestimonialBox';

const TestimonialsPage = styled.section`
    background: white;
    height: 100vh;
    width: 100%;
    user-select: none;
    overflow: hidden;
`;

const TestimonialContents = styled.div`
    position: relative;
    top: 25vh;
    width: 100vw;
    height: 50vh;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-around;

    @media(max-width: 1000px) {
        top: 5vh;
        height: 90vh;
        flex-flow: column;
    }
`;

const Testimonials = props => {
    return (
        <TestimonialsPage id="testimonials">
            <TestimonialContents>
                <TestimonialBox />
                <TestimonialBox />
                <TestimonialBox />
            </TestimonialContents>
        </TestimonialsPage>
    );
};

export default Testimonials;