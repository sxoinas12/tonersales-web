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

        
        <div className="col-xs-12 col-md-3" key={item.id}>
        <a  href="#" className="thumbnail">
          <img src={require('./first.jpeg')} />
          Name:{item.name} <br />
          Description:{item.description} <br /> 
          Price:{item.price}
        </a>
        </div>
  
   

      
      )
    return (

      <div className="row">
        {nameList}
      </div>


      
    );
  }
}