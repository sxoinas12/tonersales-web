import React from 'react';
import './Filters.css';
const models = require("../helpers/Models");

// require parser service 
// parser service will take as input this.props and convert it 

export default class Filter extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
    	// Filters:Parser.create(this.props)
   		}
   	//request to take product types and categories (all of them)
   	
    }

    render() {	
    // const Filters = this.props.filters.map((item)=>
    const filters = {
    	"ProductType" : {
			"1" : "Toner",
			"2" : "Inks"
		},
    	"Category":{
    		"1" : "HP",
			"23": "Samsung"
    	}
    }
    const Filters = Object.keys(filters).map((key,index)=>
    	<FilterField inputName = {key} input = {filters[key]} key ={index} />
    )
    
    return (

    	<div className="row ">
    		<div className="col-xs-12  filter">
	    		{Filters}
    		</div>	
    	</div>
    	)}
}


class FilterField extends React.Component {
	constructor(props){
		super(props);
	}


	checkVal = (e) =>{
		console.log(e.target.checked)
		if(e.target.checked === false){
			e.target.checked = true;
		}
		else if(e.target.checked === true){
			console.log("here");
			e.target.checked = false;
		}
		

	}

	render(){
		const options = Object.keys(this.props.input).map((key,index)=>
			<Option input={this.props.input[key]} checkVal={this.checkVal}key = {index}  />
		)
		return(
			<div className="row">
	    			<div className="col-xs-12 ">
	    				<div className="row">
	    					<div className="col-xs-12">
	    					{this.props.inputName}
	    					</div>
	    				</div>
	    				<div className="row">
	    					<div className="col-xs-12">
	    					 <form>
						     {options}
						     </form>
						   	</div>
	    				</div>

	    			</div>


	    		</div>



			)
	}
}



const Option = (props)=> <div className="radio">
						          <label>
						            <input type="radio"  onChange={props.checkVal}/>
						            {props.input}
						          </label>
						        </div>;



