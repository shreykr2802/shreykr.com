import React, { Fragment } from 'react';

import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {

  return (
    <Fragment>
        <Toolbar />
        <Home />
        <About />
    </Fragment>
  );
}

export default App;
