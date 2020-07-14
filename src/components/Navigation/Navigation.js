import React, { useRef } from 'react';
import styled from 'styled-components';

import SideDrawer from './SideDrawer/SideDrawer';
import Toolbar from './Toolbar/Toolbar';
import DrawerToggle from './DrawerToggle/DrawerToggle';
import Backdrop from '../UI/Backdrop/Backdrop';

import { useDispatch, useSelector } from 'react-redux';

import { setMenuDivColor, setShowSideDrawer } from '../../store/actions/home';
import usePrevious from '../../hooks/usePrevious';

const Nav = styled.nav`
    height: 50px;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    color: white;
`;

const Navigation = props => {

    const sideDrawerOpen = useSelector(state => state.home.isOpen);

    const divColor = useSelector(state => state.home.menuDivColor);

    const menuDivColor = usePrevious(divColor);

    const dispatch = useDispatch();

    let menuDiv1 = useRef();
    let menuDiv2 = useRef();
    let menuDiv3 = useRef();
    let menuDiv = useRef();

    const showSideDrawerToggle = () => {
        if(sideDrawerOpen) {
            dispatch(setMenuDivColor(menuDivColor));
            convertXToMenu();
        } else {
            dispatch(setMenuDivColor('white'));
            convertMenuToX();
        }
        dispatch(setShowSideDrawer(!sideDrawerOpen));
    };

    const convertMenuToX = () => {
        menuDiv1.current.style.transform = 'rotate(45deg)';
        menuDiv1.current.style.transition = 'transform 0.8s ease';
        menuDiv2.current.style.display = 'none';
        menuDiv2.current.style.transition = 'transform 0.8s ease';
        menuDiv3.current.style.transform = 'rotate(-45deg) translate(10px,-10px)';
        menuDiv3.current.style.transition = 'transform 0.8s ease';
    };

    const convertXToMenu = () => {
        menuDiv1.current.style.transform = 'rotate(0deg)';
        menuDiv1.current.style.transition = 'transform 0.8s ease';
        menuDiv2.current.style.display = 'block';
        menuDiv2.current.style.transition = 'transform 0.8s ease';
        menuDiv3.current.style.transform = 'rotate(0deg)';
        menuDiv3.current.style.transition = 'transform 0.8s ease';
    };

    const sideDrawerClosedHandler = () => {
        convertXToMenu();
        dispatch(setShowSideDrawer(false));
    };

    return (
        <Nav>
            <Toolbar />
            <DrawerToggle clicked={ showSideDrawerToggle } 
                menuDiv1={ menuDiv1 } menuDiv2={ menuDiv2 } 
                menuDiv3={ menuDiv3 } menuDiv={ menuDiv } 
                />
            <SideDrawer />
            <Backdrop closed={ sideDrawerClosedHandler } />
        </Nav>
    );
};

export default Navigation;