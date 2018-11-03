import React, {component} from 'react';
import './profile.css';
import {Entrance} from '../Home/entrance';
import {Footer} from '../Home/footer';
import SearchBar from '../helpers/searchBar';
import {Prof} from './prof';
import {Orders} from './orders';
import {Settings} from './settings';

export class Profile extends React.Component{
	
	constructor(props){
		super(props);
		
		this.state = {
			select:<Prof />,
			isLogged:true,
		};
		
	}
	showProfile = () => {
		this.setState({select:<Prof />});
	}


	showOrders = () => {
		this.setState({select:<Orders />});
	}

	showSetting = () => {
		this.setState({select:<Settings />});
	}


	logOff = () => {

		      console.log("do i come here")
		      this.setState({isLogged:false})
		      this.props.history.push({
		      pathname:'/'
		      });
	}

	loadfromlocal = () => {
		let access = localStorage.getItem('entrance_state');
		access = JSON.parse(access);
		console.log(access);
		if(access){
	   	try{
		    if(access.user.token){
		      this.setState({isLogged:true});      
		    }
		    
		} catch(e) {
			console.log(e);
			}
		}
		
			
	}

	componentWillMount(){
		
		this.loadfromlocal();
		
	}

	
	render(){
		const View = this.state.select;

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
		             <Entrance {...this.props} logOff = {this.logOff}/> 
		            </div> 
		      		</div>
					<div className="row sect">
						<div className="col-xs-10 col-xs-offset-1 prof_sect">

							<div className="row head">
							<label className="">Profile Section</label>
							</div>
							
							<div className="row" >
								<ol className="col-xs-1  no-padding-left" >
									<li onClick={() => this.showProfile()} className="selectView">Profile</li>
									<li onClick={() => this.showOrders()} className="selectView">Orders</li>
									<li onClick={() => this.showSetting()} className="selectView">Settings</li>
								</ol>
								
								<div className="col-xs-7 viewPossition">
									{View}
								</div>
							</div>
							
							
							</div>
					
						
					</div>
					<div className="row">
		              <Footer />
		          </div>
				</div>
			</div>

			)
	}
}