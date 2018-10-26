import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './search.css';
import {ProductList} from '../Products/ProductList';

import {Footer} from '../Home/footer';
import {Entrance} from '../Home/entrance';
import SearchBar from '../helpers/searchBar';






export class Search extends React.Component {
  

  constructor(props) {
    super(props);
    this.input = this.checkReq();
    this.state={
      list:[],
      
       
    } 

  }


  handleSubmit = (res) => {
    //console.log(res);
    this.setState({list:res});
  }

  checkReq = () => {
    if(this.props.location.state === undefined){
      return "";
    }
    else {
      //console.log(this.props.location);
      return this.props.location.search;
    }
  }
  loadfromlocal = () => {
    var local = localStorage.getItem('cart_state');
    local = JSON.parse(local);
    console.log(local);
    try {
      if(local){
        this.setState({list:local.products})
      }

    }
      
     catch(e) {
      console.log(e);
    }
  }
  componentWillMount(){
    this.loadfromlocal();

 
  }



  render() {
    
    return (
    <div className="container-fluid main ">
      <div className="row ">
            <div className= "col-xs-12 col-md-3 col-sm-3 title">
              <a href="/"><div className="mini_logo"></div></a>
            </div>
            <div className="col-xs-12  col-md-5 col-sm-6 bar text-left">
              <SearchBar initialValue={this.input} handleSubmit={this.handleSubmit} /> 
            </div>
            <div className="col-xs-12 col-md-3 col-sm-3 col-md-offset-1 text-right entrance ">
             <Entrance {...this.state.credential}/> 
            </div> 
      </div>
         
  
      <ProductList data = {this.state.list} />
           
  

      <div className="row">
        <Footer />
      </div>

    </div>




      
    );
  }
}