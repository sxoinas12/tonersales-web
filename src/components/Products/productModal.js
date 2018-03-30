import React, { Component } from 'react';
import './ProductModal.css'




export class ProductModal extends React.Component {
  

  constructor(props) {
    super(props);
  }

  render() {
         

      
    return (
    <div className="">
      <div className="panel panel-default">
        <div className="panel-title">
        img will go here this {this.props.product.name}
        </div>
        <div className="panel-body">
          Panel content
        </div>
        <div className="panel-footer">Panel footer</div>
      </div>
    </div>

     

      
    );
  }
}