import React, { Component } from 'react';
import './ProductModal.css'




export class ProductModal extends React.Component {
  

  constructor(props) {
    super(props);
    
  }



  render() {
         

      
    return (
    <div className="prod_modal">
      <div className="row panel-header prod_name">
        <div className="col-xs-9 col-md-9 col-lg-9 text-left">
          Name: {this.props.product.name}


        </div>
      </div>
      <div className="row description panel-body description">
        <div className="col-xs-9 col-md-9 col-lg-9 text-left">
          Description: {this.props.product.description}

        </div>
      </div>
      <div className="row foot">
        <div className="col-xs-3 col-md-3 col-lg-3 text-right">
          Price: {this.props.product.price}
        </div>

      </div>
    </div>

     

      
    );
  }
}