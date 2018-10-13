import React, { Component } from 'react';
import './home.css';
import HomeSearch from '../Search/homeSearch';
import {Entrance} from './entrance';
import {Footer} from './footer';
import {Card} from '../helpers/card';

export class Home extends React.Component {
  constructor(props){
    super(props);

    console.log(props);
    this.state = {
      isLogged:false,
      item: {
        name:'not filled',
        price:'not filled'
      }
    }
  }


 componentWillMount() {
  
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
	        
          <div className="row HotProd">
            <Card data= {this.state.item}  />
            <Card data= {this.state.item}  />
            <Card data= {this.state.item}   />
          </div>
          <div className="row HotProd">
            <Card data= {this.state.item}  />
            <Card data= {this.state.item}   />
            <Card data= {this.state.item}   />
          </div>
          <div className="row HotProd">
          </div>


          <div className="row">
              <Footer />
          </div>
        </div>
        
     </div>

     
    );
  }
}