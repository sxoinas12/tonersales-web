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
      total:0,

    }
  }
  

  handleClick = (e) =>{
    this.props.history.push({
      pathname:'/checkout',
      state: {products:this.products}
      });
  }

 
  

  addBut = (e,index) => {
    let products = this.state.products;
    products[index].quantity +=1;
    this.setState({products:products});
    this.setState({total:this.state.total+products[index].price});
    
  }

  minBut = (e,index) => {
    let products = this.state.products;
    if(products[index].quantity != 1){
      products[index].quantity -=1;
      this.setState({products:products});
      this.setState({total:this.state.total-products[index].price});
      
    }
    else if(products[index].quantity === 1){
      this.setState({total:this.state.total-products[index].price})
      products.splice(index,1);
      this.setState({products:products});
      //this.setState({total:this.state.total-products[index].price});
      

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
            this.setState({total:this.state.total + data.price});
            
            }
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
    
    const nameList = this.state.products.map((item,index)=>
            
        <li key={item.id} className="row cart_product">
        
          
          <div className="col-xs-6 cart_name">
            {index+1}. {item.name}
          </div>        
          <div className="col-xs-3 no-padding">
            <span className="quantity_but" onClick = { () => {this.addBut(item,index) }} type="button">&#43;</span> 
            <span className="quantity">
              {item.quantity} 
            </span>
            <span  className="quantity_but" onClick = {() => { this.minBut(item,index) }} type="button">&#8722;</span>
          </div>
          <div className="col-xs-3 text-right no-padding-left">
         
            {item.quantity *item.price} €
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
                  <div className="col-xs-9 text-right" >
                    Total 
                  </div>
                  <div className="col-xs-3 text-right price no-padding-left">
                    
                     {this.state.total} €
                    
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
      <a className= "dropbtn" onClick= {this.handleClick}><i className="fas fa-shopping-cart"></i></a>
      
        {CartLayout}
      
     </div>
    
    );
  }
}