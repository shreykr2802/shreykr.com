import React from 'react';
import styled from 'styled-components';

const BackdropBox = styled.div`
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
    display: ${props => props.show ? 'block' : 'none'};
`;

const Backdrop = props => {
    return (
        <BackdropBox onClick={ props.closed } show={ props.show } />
    );
};

export default Backdrop;