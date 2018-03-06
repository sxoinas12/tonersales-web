import React, {component} from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.css';


const url ="http://192.168.1.173:5000/user/login";
export class Login extends React.Component{

	constructor(){
		super();
		this.state = {
			email:"email",
			password:"password"
		}
	}

	handleClick = (e) => {
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

	change = (e) => {
		const target = e.target;
		const value = target.value;
		const name = target.name;
		//alert(name);
		this.setState({
			[name]:value
					});
	}

	handleSubmit = (e) => {
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



	render(){

		return(
			<div className="container">

				<form className="form" onSubmit = {this.handleSubmit}> 
					 <input
					 value={this.state.email}
					 type="text"
					 name="email"
					 onClick={this.handleClick}
					 onChange={this.change}
					 /> 
					  <br />
					 <input
					 value={this.state.password}
					 type="text"
					 name="password"
					 onClick={this.handleClick}
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