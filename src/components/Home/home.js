import React, { Component } from 'react';
import './home.css';
import HomeSearch from './homeSearch';
import {Entrance} from './entrance';
import {Footer} from './footer';


export class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
     <div className="main">
        <div className="container-fluid main" >

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