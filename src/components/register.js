import React, { Component } from 'react';
import './register.css';

const Net = require('./helpers/net.js');
const Methods = require('./helpers/methods.js');


export class Register extends React.Component{
	constructor(){
		super();
		this.state ={
		email:"",
		username:"",
		password:""
		};

	}

change = (e) =>{
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]:value
          });
  }
  handleSubmit = (e) =>{
		e.preventDefault();
		let reqBody = this.state;
		Methods.Post(Net.Url.login);
	}

	

	render(){
		return(
			<div>
				<form className = "form" onSubmit={this.handleSubmit}>
					 <input 
					 className="user"
					 value = {this.state.username}
					 type="text" 
					 name={"username"}
					 placeholder="username" 
					 onChange={this.change}/>
					 
					 <br />

					 <input 
					 className="user"
					 value = {this.state.email}
					 type="text"
					 name={"email"}
					 placeholder="email"
					 onChange={this.change} />
					 <br />

					 <input 
					 className="user"
					 value = {this.state.password}
					 type="text" 
					 name={"password"} 
					 placeholder ="password" 
					 onChange={this.change}/>

					 <br />
					 <button className = "B" type="submit">
				      Register
				    </button>

				</form>
			</div>
			);
	}
}