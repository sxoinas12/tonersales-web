import React, { Component } from 'react';
import './homeSearch.css';

import { Button } from 'react-bootstrap';
import {ProductList} from './ProductList.js';
import {Entrance} from './entrance.js';

import {Route , Redirect } from 'react-router'

const Net = require('../helpers/net.js');
const Methods = require('../helpers/methods.js');



export class HomeSearch extends React.Component {
  constructor(){
    super();
    this.state={
      toner:"",
      list:[],
      redirect:false
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
    //console.log("here");
    let reqBody = this.state.toner;
    let tempUrl = Net.Url.products + reqBody;
    Methods.Get(tempUrl)
    .then(res => {
      this.setState({list:res.data,redirect:true});
      
    });
  }

 
  render() {
    
    if( this.state.redirect === true){

      return <Redirect to={{
        pathname:'/search',
        state :{referrer : this.state.list}
      }} /> 
    }
    return (
          <div>
            

            <div className="col-xs-12 text-center"> <a href="http://localhost:3000/"> <img src={require('./toner-sales-logo.jpg')} /> </a>  </div>
            <div className="col-xs-12 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6">        

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
            
            </div> 
            <div> <Entrance /> </div>
         
        </div>



    


   
   
      
    );
  }
}