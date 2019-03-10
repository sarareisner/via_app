import React, { Component } from 'react';
import Contacts from './containers/Contacts';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Contacts />
      </div>
    );
  }
}

export default App;
