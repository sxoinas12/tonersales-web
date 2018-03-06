import React, { Component } from 'react';



export class ProductList extends React.Component {
  

  constructor(props) {
    super(props);
  }

  render() {

    const {data} = this.props;
    const nameList = data.map((item)=>
      <li key={item.id}>Name:{item.name} <br />
      Description:{item.description} <br /> 
      Price:{item.price}</li> 
      )
    return (
      <div>
        <ol>
          <center>{nameList} </center>
        </ol>
        
        
      </div>
    );
  }
}