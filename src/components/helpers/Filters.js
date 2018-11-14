import React from 'react';
import './Filters.css';
const models = require("../helpers/Models");

// require parser service 
// parser service will take as input this.props and convert it 

export default class Filter extends React.Component {
  

  	constructor(props) {
    	super(props);
    	this.state = {
    		selected:{}
   		}
    }

    componentDidMount() {
    	this._load();
    }




    render() {	

    const filter = {
    	options:"", // filter options
    	type:"", // type of search
    	name:"", // name of the filter in front-end
    	field:"" // database table name
    }
    const selected = {
    	productType: []
    }
    const filters = [
    	{
    		type: 'includes',
    		name: 'Product Type',
    		field : 'productType', 
    		options: [
			   "Toner",
			   "Samsung" 
			]
		},
    	{
    		type: 'includes',
    		name: 'Category',
    		field : 'category',
    		options: [
				"HP",
				"Samsung"
			]
    	}
    ]
    const Filters = this.FieldFactory(filters);
    	
    
    	return (
    	<div className="row ">
    		<div className="col-xs-12  filter">
	    		{Filters}
    		</div>	
    	</div>
    	)
	}
	_save(selected) {
		localStorage.setItem('filters', JSON.stringify(selected));
	}
	_load() {
		let local = localStorage.getItem('filters');
		this.setState({selected:JSON.parse(local)})
	}
	_onUpdate(filter, values) {
		let selected = {
			...this.state.selected,
			[filter]: values
		}
		this._save(selected);
		this.setState({selected});
	}

	FieldFactory(filters) {
		return filters.map((filter, index) => {
			let a = this.state.selected[filter.field] || [];
			switch(filter.type) {
				case 'includes': 
					return <IncludeFilterField selected={a} onUpdate={(values) => this._onUpdate(filter.field, values)} name={filter.name} options={filter.options} key={index}/>;
				case 'equals' : 
					return '';
			}
		});
	}
}

class IncludeFilterField extends React.Component {
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
<div className="radio">
  <label>
    <input type="checkbox" name={props.value} checked={props.selected} onChange={props.check}/> {props.value}
  </label>
</div>;



