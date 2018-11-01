import React, {component} from 'react';
import './profile.css';
import {Entrance} from '../Home/entrance';
import {Footer} from '../Home/footer';
import SearchBar from '../helpers/searchBar';
export class Profile extends React.Component{
	
	constructor(props){
		super(props);
		
		this.state = {
			
		};
		
	}


	render(){
		return(
			<div className="row">
				<div className="col-xs-12">
					<div className="row ">
		            <div className= "col-xs-12 col-md-3 col-sm-3 title">
		              <a href="/"><div className="mini_logo"></div></a>
		            </div>
		            <div className="col-xs-12  col-md-5 col-sm-6 bar text-left">
		              <SearchBar initialValue={this.input} handleSubmit={this.handleSubmit} /> 
		            </div>
		            <div className="col-xs-12 col-md-3 col-sm-3 col-md-offset-1 text-right entrance ">
		             <Entrance {...this.state.credential}/> 
		            </div> 
		      		</div>
					<div className="row">
						Profile seconds
					</div>
					<div className="row">
		              <Footer />
		          </div>
				</div>
			</div>

			)
	}
}