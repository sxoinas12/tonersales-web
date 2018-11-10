import React, {component} from 'react';
import './profile.css';
import {Entrance} from '../Home/entrance';
import {Footer} from '../Home/footer';
import SearchBar from '../helpers/searchBar';
import {Prof} from './prof';
import {Orders} from './orders';
import {Settings} from './settings';


const Net = require('../helpers/net.js');



export class Profile extends React.Component{
	
	constructor(props){
		super(props);
		
		this.state = {
			select:"Profile",
			isLogged:true,
			user:{
				username:"",
				email:""
			},
			orders:[],
		};

		
	}

	change = (e) =>{
	    const target = e.target;
	    const value = target.value;
	    const name = target.name;
	    let user = this.state.user;
	    user[name] = value;
	    this.setState({user:user});
	}

	submitChanges = (values) =>{
		
		let access = localStorage.getItem('entrance_state');
		access = JSON.parse(access);
		let user = {...this.state.user};
	
		try{
			if(values && access.user.token){
				
				Net.post(Net.urls.profile,values,access.user.token)
				.then((data) =>{
					user["username"] = data.username;
					user["email"] = data.email;
					
				}).catch((e)=>{
					console.log(e);
				})
			}
		}
		catch(e){
			console.log(e)
		}

	}

	showProfile = () => {
		this.setState({select:"Profile"});
	}


	showOrders = () => {
		
		this.setState({select:"Orders"});
		
	}

	showSetting = () => {
		this.setState({select:"Settings"});
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
		let access = localStorage.getItem('entrance_state');
			access = JSON.parse(access);
		try{
			
			
			if(access.user.token){
				let user = this.state.user
				Net.get(Net.urls.profile,access.user.token).
				then((data)=>{
					user["username"] = data.username;
					user["email"] = data.email;		
					this.setState({user:user});
					
				})
				.catch(error=>error)
			}
		}
		catch(e){
			console.log(e);
		}

		try{
			if(access.user.token){
				Net.get(Net.urls.myOrders,access.user.token).
				then((data)=>{
					//console.log(data);
					this.setState({orders:data.data})
				}).catch((e)=>{
					console.log(e)
				})
			}
		}
		catch(e){
			console.log(e)
		}
		
	}

	
	render(){
		let View;
		switch(this.state.select){
			case "Profile":
			default:
				View = <Prof change={this.change} info={this.state.user} submit={this.submitChanges} />;
				break;

			case "Orders":
				View = <Orders info={this.state.orders}/>;
				break;
			case "Settings":
				View = <Settings />;
				break;
		}
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
		            <div className="col-xs-12 col-md-3 col-sm-3 col-md-offset-1 col-lg-2 col-lg-offset-2 text-right entrance ">
		             <Entrance {...this.props} logOff = {this.logOff}/> 
		            </div> 
		      		</div>
					<div className="row sect">
						<div className="col-xs-10 col-xs-offset-1 prof_sect">

							<div className="row head">
							<label className="">Profile Section</label>
							</div>
							
							<div className="row menu" >
								<ol className="col-xs-2  no-padding-left" >
									<li onClick={() => this.showProfile()} className="selectView"><b>Profile</b></li>
									<li onClick={() => this.showOrders()} className="selectView"><b>Orders</b></li>
									<li onClick={() => this.showSetting()} className="selectView"><b>Settings</b></li>
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