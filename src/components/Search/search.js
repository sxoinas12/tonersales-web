import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './search.css';
import {ProductList} from '../Products/ProductList';

import {Footer} from '../Home/footer';
import {Entrance} from '../Home/entrance';
import SearchBar from '../helpers/searchBar';


const Net = require('../helpers/net.js');



export class Search extends React.Component {
  

  constructor(props) {
    super(props);
    this.state={
      list:[],
    } 
    let reqBody = this.props.location.state.searchQuery;
    this.Search(reqBody);
    


  }

    Search = (reqBody) =>{
   
    Net.get(Net.urls.products+ reqBody)
    .then(res => {
      
      this.setState({list:res});
    });
  }


  onSubmit = (e) => {
    console.log(e);

    const val = e;
    this.Search(val);
  }

  render() {
    
    return (
    <div className="container-fluid main ">
    
      <div className="row ">
          
            <div className= "col-xs-12 col-md-3 col-sm-3 title">
              <a href="/"><div className="mini_logo"></div></a>
            </div>
            <div className="col-xs-12  col-md-5 col-sm-6 bar text-left">
              <SearchBar initialValue={this.props.location.state.searchQuery} onSubmit={this.onSubmit} /> 
            </div>
            <div className="col-xs-12 col-md-3 col-sm-3 col-md-offset-1 text-right entrance ">
             <Entrance {...this.props}/> 
            </div> 
      </div>
         
      <div className="row">
         <div className="container">
            <div className="row">
            <ProductList data = {this.state.list} />
            </div>
         </div>
    </div>

      <div className="row">
        <Footer />
      </div>

    </div>




      
    );
  }
}