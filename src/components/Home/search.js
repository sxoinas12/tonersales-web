import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './search.css';
import {ProductList} from './ProductList.js';

export class Search extends React.Component {
  

  constructor(props) {
    super(props);
    

  }

  render() {
    
    console.log(this.props);
    return (
    <div>
        <ProductList data = {this.props} />
      
    </div>

      
    );
  }
}