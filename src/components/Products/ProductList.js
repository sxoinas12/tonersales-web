import React, { Component } from 'react';
import './ProductList.css'; 
import {Card} from '../helpers/card';



export class ProductList extends React.Component {
  

  constructor(props) {
    super(props);
    //info ={item.id}
    this.state = {
      modalIsOpen:false,
    };
   
  }

  render() {
         
    const {data} = this.props;
    const nameList = data.map((item)=>
       
        <Card data= {item}  id={item.id} key={item.id}/>
      
        );

    return (
        <div className="row ProdCont">

        {nameList}
        </div>
      
     

      
    );
  }
}