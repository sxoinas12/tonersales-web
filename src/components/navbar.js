import React,{component} from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

export class Navbar extends React.Component{

	render(){

		return(
			<div>
				<nav className="navbar navbar-expand-sm bg-light">
					<ul>
					  <Link to="Home"><li>Home </li> </Link>
					  <Link to="Register"><li>Register </li> </Link>
					  <Link to="Login"><li> Login</li> </Link>
					  <Link to=""><li> Contact</li> </Link>
					</ul>
				</nav>
			</div>
			);
	}
}