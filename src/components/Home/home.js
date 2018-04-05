import React, { Component } from 'react';
import './home.css';
import HomeSearch from '../Search/homeSearch';
import {Entrance} from './entrance';
import {Footer} from './footer';

export class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLogged:false

    }
  }

  render() {
    return (

     <div className="main">
    
        <div className="container-fluid main" >
          <div className="row"> 
            <div className="col-xs-12 col-md-offset-9 col-md-3 col-lg-offset-10 col-lg-2">
              <Entrance />
              
            </div>
          </div>
	        <div className="row fullScreen">
            <HomeSearch />
             
	        </div>

          <div className="row">
              <Footer />
          </div>
        </div>
        
     </div>

     
    );
  }
}