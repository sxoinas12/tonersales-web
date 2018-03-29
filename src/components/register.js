import React, { Component } from 'react';
import './register.css';
import 'bootstrap/dist/css/bootstrap.css';

const Net = require('./helpers/net.js');
const Methods = require('./helpers/methods.js');


export class Register extends React.Component{
	constructor(props){
		super(props);
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

  handleGoogleSubmit = () => {
		console.log(Net.Url.google);
		window.location.href= Net.Url.google;
	}

	render(){
		return(
			<div className="log">

				<form className = "form" onSubmit={this.handleSubmit}>
					 <button onClick={this.handleGoogleSubmit} className="btn btn-danger google_button"> 
						<div className="bord">
							<i className="fab fa-google-plus-g"></i>
						</div>
						<div>
							Sign in with Google
						</div>
					</button>
					<br />
					
					 <input 
					 
					 value = {this.state.username}
					 type="text" 
					 placeholder="username" 
					 name="username"
					 onChange={this.change}
					 /> 
					 <br />
					 <input  
					 value = {this.state.email}
					 type="text"
					 placeholder="email"
					 name="email"
					 onChange={this.change} 
					 />
					 <br />
					 <input 
					 value = {this.state.password}
					 type="text" 
					 placeholder ="password"
					 name="password"
					 onChange={this.change}
					 />
					 <br />
					 <button className = "B" type="submit">
				      Register
				    </button>
				</form>
			</div>
			);
	}
}