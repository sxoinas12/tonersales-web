import React, { Component } from 'react';
import './homeSearch.css';
//import './App.css';
import {ProductList} from './ProductList.js';
const url = "http://192.168.1.5:5000/products/specific?val=";



export class HomeSearch extends React.Component {
  constructor(){
    super();
    this.state={
      toner:"Find toner for your printer",
      list:[]
    }
  }

  handleClick = (e) =>{
    const target = e.target;
    const name = target.name
    const value = target.value;
    if (value === 'Find toner for your printer'){
      this.setState({
      [name]:''
    });
    }
  }

 change = (e) =>{
    const target = e.target;
    const value = target.value;
    const name = target.name;
    //alert(name);
    this.setState({
      [name]:value
          });
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    let reqBody = this.state.toner;
    let tempUrl = url + reqBody;
    //console.log(tempUrl);
    fetch(tempUrl,{
      method:"GET",
      headers:{
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .catch(error => error)
    .then(res => {
      this.setState({list:res.data});
      console.log(this.state.list);
   

    });

  }

 
  render() {
    return (
      <div id="wrapper" className="main">
      <div className="container">
          <h1 className="header">Tonersales </h1>

          <center>
          <form onSubmit={this.handleSubmit}>
          <input
          className="inp"
          value={this.state.toner}
          type="text"
          name={"toner"}
          onChange={this.change}
          onClick = {this.handleClick}
          />
          
          <button type="submit">
              Search
            </button>
            </form>
          </center>
          <ProductList data = {this.state.list} />
       
        </div>
      </div>
    );
  }
}