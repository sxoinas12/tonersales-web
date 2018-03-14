import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './search.css';
import {ProductList} from './ProductList.js';

const Net = require('../helpers/net.js');
const Methods = require('../helpers/methods.js');


export class Search extends React.Component {
  

  constructor(props) {

    super(props);
    this.state={
      list:[]
    } 
    let reqBody = this.props.history.location.state.searchQuery;
    this.Search(reqBody);

  }

    Search = (reqBody) =>{
    
    let tempUrl = Net.Url.products + reqBody;
    Methods.Get(tempUrl)
    .then(res => {
      this.setState({list:res.data});
   
    });
  }
  render() {
    
    return (
    <div>
        <ProductList data = {this.state.list} />
    </div>

      
    );
  }
}