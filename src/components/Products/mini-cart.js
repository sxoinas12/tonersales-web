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
      products:[]
    }
  }
  

  handleClick = (e) =>{
    console.log(this.props);
    this.props.history.push({
      pathname:'/checkout',
      state: {products:this.state.products}
      });
    
  }

 
  

  addBut = (e,index) => {
    let products = this.state.products;
    products[index].quantity +=1;
    this.setState({total:this.state.total+products[index].price});
    this.setState({products:products});
    this.saveToLocal();
   
  }

  minBut = (e,index) => {
    let products = this.state.products;
    let temp;
    if(products[index].quantity != 1){
      products[index].quantity -=1;
     
      
      temp =this.state.total-products[index].price;
      this.setState({total:temp});
      this.setState({products:products});
      this.saveToLocal();
    }
    else if(products[index].quantity === 1){
      this.setState({total:this.state.total-products[index].price})
      products.splice(index,1);
      this.setState({products:products});
      this.saveToLocal();
    }
  }


  saveToLocal() {
       const local = this.state;
       localStorage.setItem('cart_state', JSON.stringify(local));
       Emitter.emit('addProd');
  }

  componentWillMount() {
     Subscription = Emitter.addListener('addProduct', (data) => {
      //it was data.name with error
      if(data){
        let products = this.state.products;
        let index = null;
        
        for (let i=0; i<products.length; i++){
          if(products[i].id === data.id){
            index = i;

            break;
          }
          else{
            continue;
          }
        }

        if(index !== null){
          products[index].quantity +=1;
          this.setState({products:products});
          this.setState({total:this.state.total+products[index].price}); 
        }
        else {
          var arrayvar = this.state.products.slice()
          this.setState({selector:true});
          arrayvar.push(data)
          if (this.refs.myRef){
            console.log("not here");
            this.setState({ products: arrayvar })
            //this.setState({total:this.state.total-products[index].price});
            this.setState({ total:this.state.total + data.price });
          }
        }
      }
      this.saveToLocal();
    });

    var local = localStorage.getItem('cart_state');
    if(local){
      this.setState(JSON.parse(local));
    }
    //this.setState({products:prod});
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
    // const total = 0;
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
                  <div className="col-xs-11 text-right no-padding " >
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
          state: {products:this.state.products}
          });
        }}><img src="/images/mini_cart.png" className="cart_size"/></a>
      
        

        )}
      />
      {CartLayout}
     </div>
    
    );
  }
}