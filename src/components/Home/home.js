import React, { Component } from 'react';
import './home.css';
import {HomeSearch} from './homeSearch';


export class Home extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      
        <HomeSearch />
      
    );
  }
}