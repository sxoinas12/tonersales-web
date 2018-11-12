import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './search.css';
import {ProductList} from '../Products/ProductList';

import {Footer} from '../Home/footer';
import {Entrance} from '../Home/entrance';
import SearchBar from '../helpers/searchBar';
import Filter from '../helpers/Filters';

import ProductService from '../Services/ProductService';



export class Search extends React.Component {
  constructor(props) {
    super(props);
    //this.input = this.checkReq();

    this.state={
      list:[],
      search: props.match.params.searchTerm
    }
    this.loadProducts(this.state.search);
  }

  loadProducts(term) {
    ProductService.search(term, 1)
    .then((prods) => this.setState({list:prods.data}));
  }

  handleSubmit = (term) => {
    ProductService.search(term, 1)
    .then((prods) => this.setState({list:prods.data}));
    this.props.history.push({
      pathname:'/search/' + term
    })
  }

  checkReq = () => {
    if(this.props.location.state === undefined){

      return "";
    }
    else {
      //console.log(this.props.location);
      console.log(this.props.location.search);
      return this.props.location.search;
    }
  }

  render() {
    
    return (
    <div className="container-fluid main ">
      <div className="row ">
            <div className= "col-xs-12 col-md-3 col-sm-3 col-lg-3 title">
              <a href="/"><div className="mini_logo"></div></a>
            </div>
            <div className="col-xs-12  col-md-5 col-sm-6 col-lg-5 bar text-left">
              <SearchBar initialValue={this.state.search} handleSubmit={this.handleSubmit} /> 
            </div>
            <div className="col-xs-12 col-md-3 col-sm-3 col-md-offset-1 col-lg-2 col-lg-offset-2 text-right entrance ">
             <Entrance /> 
            </div> 
      </div>
         
  
      <div className="row body">
              <div className="col-xs-6 col-sm-2 col-md-2  col-lg-2 filt">
                <Filter input={"Filter Input"} />
              </div>
              <div className="col-xs-12 col-sm-10 col-md-10 col-lg-10">
                <ProductList data = {this.state.list} />
              </div>
            </div>

      <div className="row">
        <Footer />
      </div>

    </div>




      
    );
  }
}