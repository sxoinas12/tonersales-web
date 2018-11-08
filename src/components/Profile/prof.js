import React, {component} from 'react';
import './prof.css';


export class Prof extends React.Component{
	
	constructor(props){
		super(props);
		
		this.state = {
			focused:true,
		};
		//console.log(props)
		
	}


	edit = () =>{
		
		this.setState({focused:false})

	}

	render(){
		return(
			<div className="row">
				<div className="col-xs-12">
					<div className="row">
					  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 ">
					  	<h4 className="prof_head">Profile Picture</h4>	
					    <a href="#" className="thumbnail">
					    	
					      <img src="../images/img_avatar.png" className="prof_img"/>
					    </a>
					  </div>
					  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 "> 
						    <div className="row">
						    	<h4 className="prof_head">Profile info</h4>
						    </div>
						    <div className="row info">
					  		<div className="col-xs-12" >
							  	<div className="row item">
							
									  <div className="col-xs-12 input-group input-group-lg">
									  	 <input type="text" className="form-control input-lg" name="username" onChange={this.props.change} value={this.props.info.username} aria-describedby="sizing-addon3" disabled={this.state.focused}/>	  
									</div>
							 
							  	</div>
							  	<div className="row item ">
									 <div className="col-xs-12 input-group input-group">
									  	  <input type="text" className="form-control input-lg" name="email" onChange={this.props.change} value={this.props.info.email}  aria-describedby="sizing-addon3" disabled={this.state.focused}/>
									</div>
							    </div>
							    <div className="row item">
							  	<div className="col-xs-12 input-group input-group">
									  	  <input type="text" className="form-control input-lg" name="password" onChange={this.props.change} placeholder="*******" aria-describedby="sizing-addon3" disabled={this.state.focused}/>
									</div>
							    </div>
							    <div className="row">
						    	
							    {this.state.focused ?(<div className="col-lg-6 col-lg-offset-2 text-right"></div>):( <Submit info = {this.props.info} submit={this.props.submit} />)}
							    <button type="button"  onClick={()=>this.edit()} className="btn btn-default btn-md ">Edit</button>
							   


						    </div>
						    </div>
						    </div>
						    
						
					 </div>
					  
					  </div>
					
				</div>
			</div>)}
	}






	const Submit = (props) => <div className="col-lg-6 col-lg-offset-2 text-right"

						onClick={()=> props.submit(props.info)}> 
						<button  type="button" className="btn btn-info btn-md">Submit</button>
						</div>



