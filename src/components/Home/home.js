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
        <div className="container-fluid " >
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
          
	        <div className="row main">
		        <div className="col-xs-12 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6">        
		            <HomeSearch />
		        </div>  
	        </div>

          <div className="row footer ">
            <div class="container ">
              <div class="col-sm-2">
                <h6>© Konstantinos Schoinas</h6>
              </div>

              <div class="col-sm-4">
                <h6>About us </h6>
                <p>Now principles discovered off increasing how reasonably middletons men. Add seems out man met plate court sense. His joy she worth truth given. All year feet led view went sake. You agreeable breakfast his set perceived immediate. Stimulated man are projecting favourable middletons can cultivated.</p>
              </div>

              <div class="col-sm-2">
                <h6>Navigation</h6>
                <ul class="unstyled">
                  <li><a href="" >Home</a></li>
                  <li><a href="" >Home</a></li>
                  <li><a href="" >Home</a></li>
                  <li><a href="" >Home</a></li>

                </ul>
              </div>

              <div class="col-sm-4">
              </div>
               <div class="col-sm-2">
                <h6>Coded with <span class="glyphicon glyphicon-heart"></span> by Konstantinos</h6>
              </div>
            </div>
          </div>

        </div>
     </div>

   
        
      
    );
  }
}