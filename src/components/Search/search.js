import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './search.css';
import {ProductList} from '../Products/ProductList';

import {Footer} from '../Home/footer';
import {Entrance} from '../Home/entrance';
import SearchBar from '../helpers/searchBar';
import Filter from '../helpers/Filters';
import {Pagination} from '../helpers/pagination';



import ProductService from '../Services/ProductService';


const Filters = [
  {
    type: 'includes',
    name: 'Product Type',
    field : 'price', 
    values: [
     "36.95",
       "23.56" 
    ]
  },
  {
    type: 'value_range',
    name: 'Περιοχη Τιμων',
    field : 'price'
  },
  {
    type: 'includes',
    name: 'Category',
    field : 'category',
    values: [
    "HP",
    "Samsung"
  ]
  },
  {
    type: 'equals',
    name: 'Type',
    field : 'price',
    values: [
    "20",
    "25"
  ]
  }

]

export class Search extends React.Component {
  constructor(props) {
    super(props);
    //this.input = this.checkReq();

    this.state={
      list:[],
      search: props.match.params.searchTerm,
      pagination:{},
    }
    this.loadProducts(this.state.search, props.match.params.page || 1);
   

  }


  _showpages () {
    //console.log(this.state.pages)
  }


  loadProducts(term,page = 1,filters) {
    //console.log("filters",filters); 
    ProductService.search(term, page,filters)
    .then((prods) => this.setState({
      list:prods.data,
      pagination:prods.pagination
    }))
    .then(()=>{

      this.props.history.push({
        pathname:'/search/' + term + '/' + page
      })
    })
  }

  handleSubmit = (term) => {
    this.loadProducts(term)
   
  }

  checkReq = () => {
    if(this.props.location.state === undefined){

      return "";
    }
    else {
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
                <Filter input={Filters} onChange={(filters)=> this.loadProducts(this.state.search,1,filters)} />
              </div>
              <div className="col-xs-12 col-sm-10 col-md-10 col-lg-10">
                <ProductList data = {this.state.list} />
              </div>


       </div>
       
       <div className="row pagination-pad">
         <div className="col-xs-12 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 text-center">
         <Pagination onLoad ={(page) => this.loadProducts(this.state.search,page)} pagination={this.state.pagination}/>
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