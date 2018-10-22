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

    console.log(e.keyCode);
    this.props.history.push({
      pathname:'/search',
      state: {searchQuery:e}
      });
   

  }

  

 
  render() {
    
    

    return (
          <div className="row">
            <div className="col-xs-12">
              <div className="row text-center">
                <div className="col-xs-12">
                  <a className="" href="http://localhost:3000/">
                    <img src="./images/logo4.png" className="home_logo"/>
                  </a>
                </div>
              </div>
              <div className="row">  
                <div className="col-xs-6 col-xs-offset-3">      
                  <SearchBar initialValue = {""} onSubmit = {this.handleSubmit} />
                </div>
              </div> 
            </div>
        </div>
    );
  }
}

export default withRouter(HomeSearch);




