import React, { Component } from 'react';
import './homeSearch.css';
import { withRouter } from 'react-router-dom'

import { Button } from 'react-bootstrap';
import {ProductList} from '../Products/ProductList';
import {Entrance} from '../Home/entrance';
import SearchBar from '../helpers/searchBar';
import {Route , Redirect } from 'react-router';

const Net = require('../helpers/net.js');
const Methods = require('../helpers/methods.js');



class HomeSearch extends React.Component {
  constructor(){
    super();
    this.state={
      searchQuery:"",
      list:[]
      
    }
  }


  handleSubmit = (e) =>{

  
    this.props.history.push({
      pathname:'/search',
      state: {searchQuery:e}
      });
   

  }

 
  render() {
    
    

    return (
          <div>
            <div className="col-xs-12 text-center home_logo">
            
              <a className="" href="http://localhost:3000/"></a>
           
            </div>
            <div className="col-xs-12 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6">        
              <SearchBar initialValue = {""} onSubmit = {this.handleSubmit} />
            </div> 
        </div>
    );
  }
}

export default withRouter(HomeSearch);




