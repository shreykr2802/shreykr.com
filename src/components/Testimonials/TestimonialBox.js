import React from 'react';
import styled from 'styled-components';

import testimonialIcon from '../../assets/images/shreykr.png';

const Testimonials = styled.div`
    height: 50vh;
    width: 30%;
    border: 1px solid #296c92;
    box-sizing: border-box;
    border-radius: 20px;
    box-shadow: 0px 10px 20px 1px #cadcfc;
    margin: -15px;

    &:hover {
        box-shadow: 0px 10px 20px 5px #cadcfc;
        transform: translateY(-5px);
    }

    @media(max-width: 1000px) {
        width: 90%;
        height: 25%;
    }
`;

const TestimonialImage = styled.img`
    position: relative;
    height: 90px;
    width: 90px;
    border-radius: 50%;
    top: -45px;
`;

// const TestimonialContent = styled.div`

// `;

const TestimonialBox = props => {
    return (
        <Testimonials>
            <TestimonialImage src={ testimonialIcon } />
        </Testimonials>
    );
};

export default TestimonialBox;