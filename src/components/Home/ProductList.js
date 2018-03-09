import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {code,Row,Col,Grid,ListGroupItem} from 'react-bootstrap';
import './ProductList.css';


export class ProductList extends React.Component {
  

  constructor(props) {
    super(props);
  }

  render() {
    
    const {data} = this.props;
    const nameList = data.map((item)=>
      <ListGroupItem className="col-xs-12 col-md-4" key={item.id}>

      Name:{item.name} <br />
      Description:{item.description} <br /> 
      Price:{item.price}
      </ListGroupItem>
      )
    return (
    <div>
      <div className="row">
        {nameList}
      </div>
    </div>

      
    );
  }
}