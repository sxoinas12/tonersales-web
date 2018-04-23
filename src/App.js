import React, { Component } from 'react';

import {Template} from './components/template';

import './App.css';

function getJsonFromUrl() {
  var query = window.location.search.substr(1);
  var result = {};
  query.split("&").forEach(function(part) {
    var item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      null:null
    }
  }

  componentDidUpdate() {
    let json = getJsonFromUrl();
    if (json.token) {
      localStorage.setItem('token', json.token);
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
