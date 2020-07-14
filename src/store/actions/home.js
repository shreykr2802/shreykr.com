export const SET_MENU_DIV_COLOR = 'SET_MENU_DIV_COLOR';
export const SET_SHOW_SIDE_DRAWER = 'SET_SHOW_SIDE_DRAWER';

export const setMenuDivColor = color => {
    return {
        type: SET_MENU_DIV_COLOR,
        color: color
    }
};

export const setShowSideDrawer = isOpen => {
    return {
        type: SET_SHOW_SIDE_DRAWER,
        isOpen: isOpen
    }
}