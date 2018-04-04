import React, { Component } from 'react';
import './mini-cart.css';
import cartEmitter from '../Events/events';


let Subscription = null

export class Mini_Cart extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
      products:[],
    }
  }

  componentWillMount() {
    Subscription = cartEmitter.addListener('addProduct', (data) => {
      var arrayvar = this.state.products.slice()
      arrayvar.push(data)

      this.setState({ products: arrayvar })
    });
  }

   componentWillUnmount() {
    Subscription.remove()
  }
  render() {
 
     const nameList = this.state.products.map((item)=>
        
            <div key={item.id}>
            <a> 
              {item.name}
            </a>
          </div>
          
          
        );

    return (
    <div className="dropdown">
      <a className= "dropbtn" onClick= {() => console.log("clicked")}><i className="fas fa-shopping-cart"></i></a>
      <div className="dropdown-content">
        {nameList}
      </div>
     </div>
    
    );
  }
}