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


  _handleDelete(id){
    this.setState(prevState => ({
        products: prevState.products.filter(el => el != id )
    }));
}

  addBut = (e,index) => {
   
    let products = this.state.products;
    
    console.log(index);
    products[index].quantity +=1;
    this.setState({products:products});
   
    
  }

  minBut = (e,index) => {
    console.log("simple click for start");
    let products = this.state.products;
    if(products[index].quantity != 1){
      products[index].quantity -=1;
    }
    else if(products[index].quantity != 1){
      this.state.products._handleDelete(index);

    }
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
      //it was data.name with error
      if(data){
    
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
     //let arrayvar  =[];
     //localStorage.clear();
      this.saveToLocal();
    //this.setState({ products: arrayvar })


  }

  render() {
    //const prods = this.state.products.map((id) => ProductService.getById(id));
     // <button  onClick = { () => console.log("clicked")} type="button">&#43;</button> 

    //
    const nameList = this.state.products.map((item,index)=>
            
            <li key={item.id}>
            <div className="cart_item" >
                
                {item.name} 
                {item.quantity}
                <label>
                  <button  className="button btn btn-primary btn-xs" onClick = { () => {this.addBut(item,index) }} type="button">&#43;</button> 
                  <br />
                  <button  className="button btn btn-danger btn-xs" onClick = {() => { this.minBut(item,index) }} type="button">&#8722;</button>
                </label>
              
          </div>
          </li>
          
          
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
              <ol>
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