import React, { Component } from 'react';
import {Register} from './components/register';
import {Template} from './components/template';
import {Login} from './components/login';
//import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      null:null
    }
  }


  render() {
    return (
      <div>
        <Template />
      </div>
    );
  }
}

export default App;
