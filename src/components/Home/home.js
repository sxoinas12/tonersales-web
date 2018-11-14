import React, { Component } from 'react';
import './home.css';
import HomeSearch from '../Search/homeSearch';
import {Entrance} from './entrance';
import {Footer} from './footer';
import {Card} from '../helpers/card';
import {ProductList} from '../Products/ProductList';
import Filter from '../helpers/Filters';
import ProductService from '../Services/ProductService';


const filters = [
  {
    type: 'includes',
    name: 'Product Type',
    field : 'productType', 
    options: [
     "Toner",
     "Samsung" 
  ]
},
  {
    type: 'includes',
    name: 'Category',
    field : 'category',
    options: [
    "HP",
    "Samsung"
  ]
  }
]
export class Home extends React.Component {
  constructor(props){
    super(props);

    
    this.state = {
      isLogged:false,
      list:[],
    }
  }
  Search = () =>{ 
    ProductService.getHome()
    .then(res => {
      this.setState({list:res})
    });
  }


  


  componentWillMount() {
    this.Search();
  }

  render() {
    return (

     <div className="main">
    
        <div className="container-fluid main" >
          <div className="row"> 
            <div className="col-xs-12 col-md-offset-9 col-md-3 col-lg-offset-10 col-lg-2">
              <Entrance {...this.props} />
              
            </div>
            <div className="row fullScreen">
              <HomeSearch />
            </div>
          </div>
            <div className="row">
              <div className="col-xs-6 col-sm-2 col-md-2  col-lg-2 filt">
                <Filter input={filters}/>
              </div>
              <div className="col-xs-12 col-sm-10 col-md-10 col-lg-10">
                <ProductList data = {this.state.list}  />
              </div>
            </div>
     

          <div className="row">
              <Footer />
          </div>
        </div>
        
     </div>

     
    );
  }
}