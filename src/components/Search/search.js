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
   // let tempUrl = Net.Url.products + reqBody;
    //console.log(tempUrl);
    //debugger;
    Net.get(Net.urls.products+ reqBody)
    .then(res => {
      //console.log(res);
      //console.log(res.data);
      //debugger;
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
          
            <div className= "col-xs-1  title">
              <a href="/"><img src="./images/logo4.png" className="mini_logo"/></a>
            </div>
            <div className="col-xs-3  bar text-right">
              <SearchBar initialValue={this.props.location.state.searchQuery} onSubmit={this.onSubmit} /> 
            </div>
            <div className="col-xs-2 col-xs-offset-5    text-right  ">
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