import React, { Component } from 'react';



export class ProductList extends React.Component {
  

  constructor(props) {
    super(props);
  }

  render() {

    const {data} = this.props;
    const nameList = data.map((item)=>
      <li key={item.id}>{item.name}</li> )
    return (
      <div>
        <ul>
          <center>{nameList} </center>
        </ul>
        
        
      </div>
    );
  }
}