import { SET_MENU_DIV_COLOR, SET_SHOW_SIDE_DRAWER } from '../actions/home';

const initialState = {
    menuDivColor: 'white',
    sideDrawerOpen: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_MENU_DIV_COLOR:
            return {
                ...state,
                menuDivColor: action.color
            }
        case SET_SHOW_SIDE_DRAWER: 
            return {
                ...state,
                isOpen: action.isOpen
            }
        default: return state;
    }
}