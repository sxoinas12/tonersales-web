import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {code,Row,Col,Grid,ListGroupItem} from 'react-bootstrap';



export class ProductList extends React.Component {
  

  constructor(props) {
    super(props);
  }

  render() {

    const {data} = this.props;
    const nameList = data.map((item)=>
      <ListGroupItem key={item.id}>Name:{item.name} <br />
      Description:{item.description} <br /> 
      Price:{item.price}</ListGroupItem>
      )
    return (
      <div className="row">
    <div className="col">
      {nameList.slice(1,9)}
    </div>
    <div className="col">
      {nameList.slice(1,9)}
    </div>
    <div className="col">
      {nameList.slice(1,9)}
    </div>
  </div>

        
      
      

      
    );
  }
}