import React from 'react';

export default class ExactFilter extends React.Component {
	constructor(props){
		super(props);
	}
	
	checkFilter = (value,index) =>{
		console.log(this.props.selected)
		let options = this.props.selected;

		if(this.props.onUpdate)
			this.props.onUpdate(value);
		
	
	}

	render(){
		
		const options = (this.props.options).map((option,index)=>
			<Option selected = {this.props.selected.indexOf(option) > -1} value={option} check={(e) => this.checkFilter(option, index)} key={index}  />
		)
		return(
			<div className="row">
	    			<div className="col-xs-12 ">
	    				<div className="row">
	    					<div className="col-xs-12">
	    					{this.props.name}
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
const Option = (props)=>

<div className="row radio">
  <label>
    <input type="radio" name={props.value} checked={props.selected} onChange={props.check}/> {props.value}
  </label>
</div>;



