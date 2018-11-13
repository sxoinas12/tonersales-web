import React, { Component } from 'react';
import './mini-cart.css';
import Emitter from '../Events/events';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

let Subscription = null
const customLabel = {
  content : {
    border : 'solid 5px',
    color: 'blue',
  }
};


export class Mini_Cart extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      products:[],
    }
  }
  addBut = (e,index) => {
    let products = this.state.products;
    products[index].quantity +=1;
    this.setState({products:products});
    this._save();

  }

  minBut = (e,index) => {
    let products = this.state.products;
    if(products[index].quantity != 1){
      products[index].quantity -=1; 
      this.setState({products:products});
    }
    else if(products[index].quantity === 1){
      products.splice(index,1);
      this.setState({products:products});
  
    }
    this._save();
    
  }

  _save = () =>{
    
    localStorage.setItem("cart_state", JSON.stringify(this.state));
  }

  _load = () =>{
    let local = localStorage.getItem("cart_state");
    if(local){
      this.setState(JSON.parse(local))
    }
    
  }
  componentWillMount() {
     this._load()
     Subscription = Emitter.addListener('addProduct', (data) => {
      
      let products = this.state.products;
      let prod = this.state.products.find(prod => prod.id === data.id);
      if(prod)
        prod.quantity += 1;
      else 
        products.push(data);
      this.setState({products});
      this._save();
    });

   
   
  }

  

  render() {
    
    let total = this.state.products.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
    const nameList = this.state.products.map((item,index)=>
            
        <li key={item.id} className="row cart_product">
        
          
          <div className="col-xs-6 cart_name">
            {index+1}. {item.name}
          </div>        
          <div className="col-xs-3 no-padding text-right">
            <div className="row">
              <div className="col-xs-5 no-padding">
                <span  className="quantity_but" onClick = {() => { this.minBut(item,index) }} type="button">&#8722;</span>
              </div>
              <div className="col-xs-2 no-padding">
                <span className="quantity">
                  {item.quantity} 
                </span>
              </div>
              <div className="col-xs-5 no-padding text-left">
                <span className="quantity_but" onClick = { () => {this.addBut(item,index) }} type="button">&#43;</span> 
              </div>
            </div>
          </div>
          <div className="col-xs-3 text-right no-padding-left">
         
            {item.price} €
          </div>
         
          
          
   
        </li>
          
          
        );

     const selector = this.state.products.length;

     const CartLayout = selector ? 
     (
      <div>
          <div className="dropdown-content cart">
            <div className="cart_title">
              Το καλάθι σου
            </div>
            <div className="cart_products">
              <ol>
                {nameList}
              </ol>
            </div>
            <div className="cart_total">
                <div className="row">
                  <div className="col-xs-11 text-right no-padding ">
                    Total: <b>{total} €</b>
                  </div>
                 
                </div>

            </div>
          </div>
        
        
      </div>
        
      ) :
     (
      <div className="dropdown-content">  
        <div>
        Αδειο Καλάθι :(
        </div>
      </div> 
     
      )
     

    return (
    <div  ref="myRef" className="dropdown">
      <Route render={({history}) =>(
        <a className= "dropbtn" onClick= {() => {
          history.push({
          pathname:'/checkout',
          state: {data:this.state}
          });
        }}><img src="/images/mini_cart.png" className="cart_size"/></a>
      
        

        )}
      />
      {CartLayout}
     </div>
    
    );
  }
}