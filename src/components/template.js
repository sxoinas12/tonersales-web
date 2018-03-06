import React, {component} from 'react';
//import {Bootstrap} from 'react-boostrap';
import 'bootstrap/dist/css/bootstrap.css';
import './template.css';

import {Register} from './register';
import {Login} from './login';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Navbar} from './navbar';
import {Home} from './Home/home';


export class Template extends React.Component{

	render(){
		return(
	
		<Router>
			<div>
				<Route path="/" component={Home} />
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
			</div>
		</Router>	

			);
	}
}

/*
	

*/
