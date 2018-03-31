import React, { Component } from 'react';
import './mini-cart.css';



export class Mini_Cart extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
      products:null
    }
  }

  render() {
         
    return (
    <div className="dropdown">
              <a className= "dropbtn" onClick= {() => console.log("clicked")}><i className="fas fa-shopping-cart"></i></a>
              <div className="dropdown-content">
                <a>Link 1</a>
                <a>Link 2</a>
                <a>Link 3</a>
              </div>
              </div>
  
      
    );
  }
}