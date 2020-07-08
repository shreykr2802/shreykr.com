import React from 'react';
import styled from 'styled-components';

const DrawerToggleDiv = styled.div`
    width: 40px;
    height: 50px;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    box-sizing: border-box;
    cursor: pointer;
    z-index: 20;
    position: fixed;
    top: 0;
    left: 0;
    margin-top: 10px;

    @media (min-width: 600px) {
      display: none;
    }
`;

const MenuDiv = styled.div`
    width: 90%;
    height: 3px;
    background-color: white;
`;

const DrawerToggle = props => {

    return (
        <DrawerToggleDiv onClick={ props.clicked } ref={props.menuDiv}>
            <MenuDiv ref={props.menuDiv1}/>
            <MenuDiv ref={props.menuDiv2}/>
            <MenuDiv ref={props.menuDiv3}/>
        </DrawerToggleDiv>
    );
};

export default DrawerToggle;