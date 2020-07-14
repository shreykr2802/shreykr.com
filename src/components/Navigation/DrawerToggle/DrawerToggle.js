import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

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
    background-color: ${props => props.menuDivColor};
`;

const DrawerToggle = props => {

    const menuDivColor = useSelector(state => state.home.menuDivColor);

    return (
        <DrawerToggleDiv onClick={ props.clicked } ref={ props.menuDiv }>
            <MenuDiv ref={ props.menuDiv1 } menuDivColor={ menuDivColor } />
            <MenuDiv ref={ props.menuDiv2 } menuDivColor={ menuDivColor } />
            <MenuDiv ref={ props.menuDiv3 } menuDivColor={ menuDivColor } />
        </DrawerToggleDiv>
    );
};

export default DrawerToggle;