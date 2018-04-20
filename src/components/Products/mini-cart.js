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
      selector:false,
      products:[]
    }
  }



  componentWillMount() {
     state = this.state;
     Subscription = cartEmitter.addListener('addProduct', (data) => {
      if(data.name){
        var arrayvar = this.state.products.slice()
        this.setState({selector:true});
        console.log(this.selector);
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
                {item.name} 
              </li>
          </div>
          
          
        );

     const selector = this.state.selector;
     const CartLayout = selector ? 
     (
      <div>
          <div className="dropdown-content">
            <div className="">
              Το καλάθι σου
            </div>
            <div>
              <ol className="">
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
      <a className= "dropbtn" onClick= {() => console.log('clicked') }><i className="fas fa-shopping-cart"></i></a>
      
        {CartLayout}
      
     </div>
    
    );
  }
}