import React, { Component } from 'react';
import './mini-cart.css';
import cartEmitter from '../Events/events';


let Subscription = null
const customLabel = {
  content : {
    border                   : 'solid 5px',
    color                 : 'blue',
  }
};



export class Mini_Cart extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
      products:[],
    }
  }



  componentWillMount() {
     Subscription = cartEmitter.addListener('addProduct', (data) => {
      if(data.name){
        var arrayvar = this.state.products.slice()
        arrayvar.push(data)
        if (this.refs.myRef){
          this.setState({ products: arrayvar })
          }
      }
      
      
    });
  }

   componentWillUnmount() {
    
  }
  render() {
 
     const nameList = this.state.products.map((item)=>
        
            <div key={Math.random()}>
              <li>
                {item.name} <label style={customLabel}>+</label>
              </li>
          </div>
          
          
        );

    return (
    <div  ref="myRef" className="dropdown">
      <a className= "dropbtn" onClick= {() => console.log('clicked') }><i className="fas fa-shopping-cart"></i></a>
      <div className="dropdown-content">
        <ol className="cart_list">
        {nameList}
        </ol>
      </div>
     </div>
    
    );
  }
}