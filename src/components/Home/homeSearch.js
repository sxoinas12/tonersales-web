import React, { Component } from 'react';
import './homeSearch.css';

import { Button } from 'react-bootstrap';
import {ProductList} from './ProductList.js';

const Net = require('../helpers/net.js');
const Methods = require('../helpers/methods.js');



export class HomeSearch extends React.Component {
  constructor(){
    super();
    this.state={
      toner:"",
      list:[]
    }
  }


 change = (e) =>{
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]:value
          });
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    console.log("here");
    let reqBody = this.state.toner;
    let tempUrl = Net.Url.products + reqBody;
    Methods.Get(tempUrl)
    .then(res => {
      this.setState({list:res.data});
      console.log(this.state.list);
    });
  }

 
  render() {
    return (
          <div>
            <div className="input-group">
              <input 
                value={this.state.toner}
                type="text"
                name={"toner"}
                onChange={this.change}
                placeholder="Find your toner"
                className="form-control" id="inlineFormInputGroup"/>
                <div className="input-group-addon btn" onClick = {this.handleSubmit}>
                  <i  className="fas fa-search"></i>
                </div>
            </div>   
            <ProductList data = {this.state.list} />
            
         
        </div>



    


   
   
      
    );
  }
}