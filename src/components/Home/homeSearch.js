import React, { Component } from 'react';
import './homeSearch.css';
//import './App.css';
import { Button } from 'react-bootstrap';
import {ProductList} from './ProductList.js';
const url = "http://192.168.1.121:5000/products/specific?val=";


// 192.168.1.121


export class HomeSearch extends React.Component {
  constructor(){
    super();
    this.state={
      toner:"",
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
      <div>
        <div className="container">

          <div className="row">
            <div className="col-xs-12"><center>Logo will go here</center> </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
            <center><h1>TonerSales</h1></center>
            </div>
          </div>



        <div className="row">

          <div className="col-xs-12">        
            <div className="input-group">
              <input 

                value={this.state.toner}
                type="text"
                name={"toner"}
                onChange={this.change}
                placeholder="Find your toner"
                className="form-control" id="inlineFormInputGroup" placeholder="Username"/>


                <div className="input-group-addon btn" onClick = {this.handleSubmit}>
                  <i  className="fas fa-search"></i>
                </div>
            </div>  
       
            
          </div>
          

        </div>



     
            <ProductList data = {this.state.list} />
         
        </div>
      </div>


    


   
   
      
    );
  }
}