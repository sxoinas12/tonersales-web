import React, {component} from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.css';

const Net = require('./helpers/net.js');
const Methods = require('./helpers/methods.js');

export class Login extends React.Component{

	constructor(){
		super();
		this.state = {
			email:"",
			password:""
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

	handleSubmit = (e) => {
		e.preventDefault();
		let reqBody = this.state;
		Methods.Post(Net.Url.login);
	}

	render(){

		return(
			<div className="log">

				<form className="form" onSubmit = {this.handleSubmit}> 
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
					 type="text"
					 placeholder="password"
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