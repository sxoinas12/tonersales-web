import React, { Component } from 'react';
import './home.css';
import {HomeSearch} from './homeSearch';
import {Entrance} from './entrance';
import {Footer} from './footer';


export class Home extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
     <div className="main">
        <div className="container-fluid main" >
          <div className="row">
            <div className="col-md-offset-10 col-lg-offset-10"><Entrance />  </div>
          </div> 
          <div className="row">
            
            <div className="col-xs-12"><center> <a href="http://localhost:3000/"> <img src={require('./toner-sales-logo.jpg')} /> </a> </center> </div>
          </div>

         <div className="row">
            <div className="col-xs-12">

	           </div>
         </div>
          
	        <div className="row">
		        <div className="col-xs-12 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6">        
		            <HomeSearch />
		        </div> 
	        </div>

          <div className="row">
              <div className="footer">
              <Footer />
              </div>
          </div>
        </div>

     </div>

   
        
      
    );
  }
}