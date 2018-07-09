import React, { Component } from 'react';
import './mini-cart.css';
import cartEmitter from '../Events/events';


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
  

  handleClick = (e) =>{
    this.props.history.push({
      pathname:'/checkout',
      state: {products:this.products}
      });
  }

  saveToLocal() {
     
       
       const local = this.state.products;
       localStorage.setItem('cart_state', JSON.stringify(local));
       
   }




   componentDidUpdate() {

    this.saveToLocal();
   }

  componentWillMount() {

     Subscription = cartEmitter.addListener('addProduct', (data) => {
      console.log('first')
      console.log(data);
      if(data.name){
        console.log('here')
        console.log(data)
        var arrayvar = this.state.products.slice()
        this.setState({selector:true});
        arrayvar.push(data)
        if (this.refs.myRef){
          this.setState({ products: arrayvar })
          console.log('here');
          }
      }
    });

    var local = localStorage.getItem('cart_state');
    if(local){
      this.setState({products:JSON.parse(local)});
    }
    
    //this.setState({products:prod});
  }

  componentWillUnmount() {
      this.saveToLocal();
  }

  render() {
    //const prods = this.state.products.map((id) => ProductService.getById(id));
    const nameList = this.state.products.map((item)=>
        
            <div key={Math.random()}>
              <li>
                {item.name} 
                <label>
                  <button  onClick = { () => console.log("clicked")} type="button">&#43;</button> 
                  <button  onClick = { () => console.log("clicked")}type="button">&#8722;</button>
                </label>
              </li>
          </div>
          
          
        );

     const selector = this.state.products.length;
     const CartLayout = selector ? 
     (
      <div>
          <div className="dropdown-content">
            <div className="cart_title">
              Το καλάθι σου
            </div>
            <div>
              <ol className="cart_items">
                {nameList}
              </ol>
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
      <a className= "dropbtn" onClick= {this.handleClick}><i className="fas fa-shopping-cart"></i></a>
      
        {CartLayout}
      
     </div>
    
    );
  }
}