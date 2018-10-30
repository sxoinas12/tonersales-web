import React, {component} from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.css';

const Net = require('./helpers/net.js');
const Methods = require('./helpers/methods.js');

export class Login extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			email:"",
			password:"",
			warning:"warning",
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
		
		Net.post(Net.urls.login,reqBody)
		.then(res => {
			if(res.token){
				
				this.props.access(res.token);
				this.props.close();
			}
			else{
				//missing html and css for hint
				
				
				this.setState({email:"",password:"",warning:"warningOn"});
				this.props.open();
			}
		})
		
	}

	handleGoogleSubmit = () => {
		//console.log(Net.Url.google);
		console.log(Net.urls.google);
	
		window.location.href= Net.urls.google
		
		
		//console.log(Net.urls.google);
	}

	handleFacebookSubmit = () =>{
		//it do nothing atm missing back end funcitonality
		console.log('hi');
	}

	render(){
		let warning = this.state.warning;
		return(
			<div className="log">
				Σύνδεση
				<form className="form" onSubmit = {this.handleSubmit}> 
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
					 <button className = " btn login_button" type="submit">
				     Login
				    </button>

				    <div className={this.state.warning}>
				    Wrong Information!
				    </div>

				</form>
			</div>
			);
	}
}