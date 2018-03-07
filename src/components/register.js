import React, { Component } from 'react';
import './register.css';


const url ="http://192.168.1.173:5000/user/register";
export class Register extends React.Component{
	constructor(){
		super();
		this.state ={
		email:"email",
		username:"username",
		password:"password"
		};
		this.change = this.change.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	//no need to bind this

	handleClick =  (e) =>{

		const target = e.target;
		const name = target.name
		const value = target.value;
		if (name === 'password'){
			e.target.type = 'password';
		}
		if (value === 'username' || 'email' || 'password'){
			this.setState({
			[name]:''

		});
		}	
		
	}

	handleSubmit(e){
		e.preventDefault();
		let reqBody = this.state;
		fetch(url,{
			method:"POST",
			headers:{
				"Content-Type": "application/json"
			},
			body:JSON.stringify(reqBody)
		})
		.then(response => response.json())
		.catch(error => error);
	}

	change(e){
		const target = e.target;
		const value = target.value;
		const name = target.name;
		//alert(name);
		this.setState({
			[name]:value
					});
	}
	render(){
		return(
				<div className="reg">
				<form className = "form" onSubmit={this.handleSubmit}>
					 <input 
					 className="user"
					 value = {this.state.username}
					 type="text" 
					 name={"username"} 
					 onChange = {this.change}
					 onClick = {this.handleClick}/>	
					 <br />

					 <input 
					 className="user"
					 value = {this.state.email}
					 type="text"
					 name={"email"} 
					 onChange={this.change}
					 onClick = {this.handleClick}/>
					 <br />

					 <input 
					 className="user"
					 value = {this.state.password}
					 type="text" 
					 name={"password"} 
					 onChange = {this.change}
					 onClick = {this.handleClick}/>

					 <br />
					 <button className = "B" type="submit">
				      Register
				    </button>

				</form>
				</div>
			);
	}
}