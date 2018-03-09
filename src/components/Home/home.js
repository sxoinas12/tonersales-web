import React, { Component } from 'react';
import './home.css';
import {HomeSearch} from './homeSearch';


export class Home extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
     <div>
        <div className="container-fluid" >
        
          <div className="row">
            <div className="col-xs-12"><center>Logo will go here</center> </div>
          </div>

         <div className="row">
            <div className="col-xs-12">
	            <center><h1>TonerSales</h1></center>
	           </div>
         </div>
          
	        <div className="row">
		        <div className="col-xs-12 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6">        
		            <HomeSearch />
		        </div>      
	        </div>
        </div>
     </div>

   
        
      
    );
  }
}