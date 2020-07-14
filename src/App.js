import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Layout from './containers/Layout/Layout';

import homeReducer from './store/reducers/home';

const rootReducer = combineReducers({
    home: homeReducer
});

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {

    return (
        <Provider store={ store }>
            <Layout />
        </Provider>
    );
}

export default App;
