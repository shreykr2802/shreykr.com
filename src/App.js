import React, { Fragment } from 'react';

import Home from './components/Home/Home';
import About from './components/About/About';
import Navigation from './components/Navigation/Navigation';

function App() {

  return (
    <Fragment>
        <Navigation />
        <Home />
        <About />
    </Fragment>
  );
}

export default App;
