import React, { Component } from 'react';

import {Template} from './components/template';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      null:null
    }
  }


  render() {
    return (
      <div className="main">
        <Template />
      </div>
    );
  }
}

export default App;
