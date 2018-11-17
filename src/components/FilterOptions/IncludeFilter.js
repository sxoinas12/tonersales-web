import React from 'react';

export default class IncludeFilterField extends React.Component {
	constructor(props){
		super(props);
	}
	
	checkFilter = (value, index) =>{
		let indx = this.props.selected.indexOf(value);
		let options = this.props.selected;
		if(indx > -1) {
			options.splice(indx, 1);
		} else {
			options = [...this.props.selected, value]
		}
		if(this.props.onUpdate)
			this.props.onUpdate(options);
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
    <input type="checkbox" name={props.value} checked={props.selected} onChange={props.check}/> {props.value}
  </label>
</div>;



