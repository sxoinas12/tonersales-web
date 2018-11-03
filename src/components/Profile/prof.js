import React, {component} from 'react';
import './prof.css';


export class Prof extends React.Component{
	
	constructor(props){
		super(props);
		
		this.state = {
			
		};
		
	}


	render(){
		return(
			<div className="row">
				<div className="col-xs-12">
					<div class="row">
					  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 "> 
						    <div className="row">
						    	<h4 className="prof_head">Profile info</h4>
						    </div>
						    <div className="row">
					  		<div className="col-xs-12 prof_info" >
							  	<div className="row item">
							  	<label>
									  Username:	
							  	</label>
							  	</div>
							  	<div className="row item">
							  	<label>
									 Email:
							  	</label>
							    </div>
							    <div className="row ">
							  	<label>
									 Password:
							  	</label>
							    </div>
						    </div>
						    </div>
						    <div className="row ">
							    <div className="col-lg-1 col-lg-offset-10 text-right edit">
							    edit
							    </div>
						    </div>
						
					 </div>
					  <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 ">
					  	<h4 className="prof_head">Profile Picture</h4>	
					    <a href="#" class="thumbnail">
					    	
					      <img src="../images/img_avatar.png" className="prof_img"/>
					    </a>
					  </div>
					  </div>
					
				</div>
			</div>)}
	}