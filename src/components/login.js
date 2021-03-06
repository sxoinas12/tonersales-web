import React, {component} from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.css';

import UserService from './Services/UserService.js';

const Net = require('./helpers/net.js');

export class Login extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			email:"",
			password:"",
			warning:"warning",
			reset:true
		}
	}

	change = (e) =>{
	    const target = e.target;
	    const value = target.value;
	    const name = target.name;
	    this.setState({
	      	[name]:value
	    });
	}

	resetPassword = (e) =>{
		this.setState({reset:false})
	}

	resetPass = (e) =>{
		e.preventDefault();
		let email = this.state.email;
		let obj = {email:email};
		Net.post(Net.urls.restore,obj)
		.then(res=>{
			 console.log(res);
		})
		.catch((e)=>{
			console.log("error",e);
		})
	} 

	handleSubmit = (e) => {
		e.preventDefault();
		UserService.login(this.state.email, this.state.password)
		.then(res => {
			
			this.props.onLogin(res);
			this.props.close();
		})
		.catch((err) => {
			this.setState({email:"",password:"",warning:"warningOn"});
			this.props.open();
		})
	}

	_handleKeyPress = (e) => {
	    if (e.key === 'Enter') {
	    	e.preventDefault();
	      	this.handleSubmit(e)
	    }
  	}
	_handleKeyPass = (e) => {
	    if (e.key === 'Enter') {
	    	e.preventDefault();
	      	this.resetPass(e)
	    }
	}
	handleGoogleSubmit = (e) => {
		window.location.href =  Net.BaseUrl + Net.urls.google 
	}

	handleFacebookSubmit = (e) =>{
		//it do nothing atm missing back end funcitonality
		e.preventDefault();
		window.location.href = Net.BaseUrl + Net.urls.facebook;
	}
	
	render(){
		const reset = this.state.reset;
		let warning = this.state.warning;
		return(
		
			<div>
				{reset ?(
				<div	className="log">
				Σύνδεση
				<form className="form" onKeyPress={this._handleKeyPress}> 
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
					 value={this.state.email}
					 type="text"
					 placeholder="email"
					 name="email"
					 onChange={this.change}
					 /> 
					  <br />
					 <input
					 value={this.state.password}
					 type="password"
					 placeholder="password"
					 name="password"
					 onChange={this.change}
					 />
					 <br />
					 <button className = " btn login_button" type="submit"  onClick = {this.handleSubmit}>
				     Login
				    </button>
				    <div className="forgot">
				    	or <a onClick={this.resetPassword}>Forgot Password</a>
				    </div>
				    <div className={this.state.warning}>
				    Wrong Information!
				    </div>

				</form>
				</div>
				):
				(<div className="log">
					<div className="form" onKeyPress={this._handleKeyPass}>
						<div className="header">
							Forgot Password
						</div>
					
					<br />
					 <input
					
					 placeholder="email"
					 name="email"
					 onChange={this.change}
					 /> 
					 </div>
					 <button className = " btn login_button" type="submit"  onClick = {this.resetPass}>
				     Submit
				    </button>
				</div>
				)}
			</div>

		
			);
	}
}