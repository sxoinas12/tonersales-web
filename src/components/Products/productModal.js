import React, { Component } from 'react';
import './ProductModal.css'




export class ProductModal extends React.Component {
  

  constructor(props) {
    super(props);
    
  }



  render() {
         

      
    return (
    <div className="prod_modal">
      <div className="row prod_name">
        <div className="col-xs-9 text-left ">
          {this.props.product.name}
        </div>
        <div className="col-xs-3 text-right">
          <div onClick={this.props.onClose} className="close_but">
          &#x2715; 
          </div>
        </div>

      </div>
      <div className="row">
          <div className="col-xs-3 prod_img ">
          </div>
           <div className="col-xs-9  text-left">
             <div className="row">
               <div className="col-xs-12 description">
               Description: {this.props.product.description}
               </div>
             </div>
             <div className="row prod_price"> 
               <div className="col-xs-12 text-right">        
                Price: {this.props.product.price}
               </div>
             </div>
          
          </div>
          
        </div>
     
      <div className="row foot">
       
        <div className="col-xs-12 text-right">
          <button>
           Προσθκη
          </button>
        </div>

      </div>
    </div>

     

      
    );
  }
}