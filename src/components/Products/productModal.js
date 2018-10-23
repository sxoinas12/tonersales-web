import React, { Component } from 'react';
import './ProductModal.css'




export class ProductModal extends React.Component {
  

  constructor(props) {
    super(props);
    
  }

  stripHtml = (html) =>{
    
   var max_len = 15; 
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   let s = tmp.innerText 
  // s = s.replace(/(^\s*)|(\s*$)/gi,"");
   s = s.replace(/[ ]{2,}/gi," ");
   s = s.replace(/[, ]+/g, " ").trim();
   s = s.replace(/\n /,"\n");
   return s;


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
               <b>Description:</b> {this.stripHtml(this.props.product.description)}
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
          <button onClick ={this.props.onAdd}>
           Προσθκη
          </button>
        </div>

      </div>
    </div>

     

      
    );
  }
}