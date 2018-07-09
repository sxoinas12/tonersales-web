import React, { Component } from 'react';
import './ProductList.css'; 
import {Card} from '../helpers/card';



export class ProductList extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen:false,
    };
   
  }

  render() {
         
    const {data} = this.props;
    const nameList = data.map((item)=>
       
        <Card data= {item} info ={item.id} key={item.id}/>
      
        );

    return (
      <div>
     
      <div className="row">
        {nameList}
      </div>
      </div>

      
    );
  }
}