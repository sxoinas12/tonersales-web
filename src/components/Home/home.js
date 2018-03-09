import React, { Component } from 'react';
import './home.css';
import {HomeSearch} from './homeSearch';
import {Entrance} from './entrance';

export class Home extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
     <div>
        <div className="container-fluid" >
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
        </div>

       <div className="navbar navbar-inverse navbar-fixed-bottom" role="navigation">
        <div className="container">
            <div class="navbar-text pull-left">
              <p>© Konstantinos Schoinas</p>
            </div>
        </div>
       </div>
     </div>

   
        
      
    );
  }
}