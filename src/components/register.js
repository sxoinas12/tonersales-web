import React, { Component } from 'react';
import './register.css';
import 'bootstrap/dist/css/bootstrap.css';
import UserService from './Services/UserService.js';
const Net = require('./helpers/net.js');



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
		//let reqBody = this.state;
		UserService.register(this.state.username,this.state.email,this.state.password)
		.then(res => {
			this.props.onRegister(res);
			this.props.close();
		})
		.catch((err) => {
			this.setState({password:""});
			this.props.open();
		})
		
	}

  handleGoogleSubmit = () => {
		console.log(Net.urls.google);
		window.location.href= Net.urls.google;
	}

	handleFacebookSubmit = ()=> {
		console.log("dada")
	}

	render(){
		return(
			<div className="log">
				Εγγραφή
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
					<button onClick={this.handleFacebookSubmit} className="btn btn-primary google_button"> 
						<div className="bord">
							<i className="fab fa-facebook-f"></i>
						</div>
						<div>
							Sign in with Facebook
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
					 type="password" 
					 placeholder ="password"
					 name="password"
					 onChange={this.change}
					 />
					 <br />
					 <button className = " btn register_button" type="submit">
				      Register
				    </button>
				</form>
			</div>
			);
	}
}