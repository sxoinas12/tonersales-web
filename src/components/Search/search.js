import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './search.css';
import {ProductList} from '../Products/ProductList';
import SearchBar from '../helpers/searchBar';
import {Footer} from '../Home/footer';



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
    <div className="container-fluid main ">
      <div className="row fullscreen">
        <div className="container">

          <div className="row">
            <div className= "col-xs-12 text-center">
              <h3>Mini Logo will go here</h3><SearchBar />
            </div>

        
          </div>

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