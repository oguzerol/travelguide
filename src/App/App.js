import React, { Component } from 'react';
import BaseLayout from '../layout/baselayout';
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router>
        <BaseLayout />
      </Router>
    );
  }
}

export default App;
