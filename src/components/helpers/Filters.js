import React from 'react';
import './Filters.css';
import RangeFilter from '../FilterOptions/RangeFilter';
import IncludeFilterField from '../FilterOptions/IncludeFilter';
const models = require("../helpers/Models");

// require parser service 
// parser service will take as input this.props and convert it 

export default class Filter extends React.Component {
  

  	constructor(props) {
    	super(props);
    	this.state = {
    		filters: {
    			// filter_field: options
    		}
    	};
   		this._persistence = props.persistence || false;
    }

    componentDidMount() {
    	
    	if(this._persistence)
    		this._load();
    	this._load();
    }

    componentWillUpdate(){
    //	console.log(this.state)
    }


    render() {	

    const Filters = this.FieldFactory(this.props.input);
    	
    
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
		if(local){
			let filters = JSON.parse(local);
			this.setState({filters});
			if(this.props.onChange)
				this.props.onChange(filters);
		}
		
	}
	_onUpdate(filter, values) {
		console.log("values",filter,values)
		filter.options = values;
		let filters = {
			...this.state.filters,
		};
		if ( filter.options.length > 0 ) {
			filters[filter.field] = filter;
		} else {
			delete filters[filter.field];
		}

		if(this._persistence)
			this._save(filters);
		this.setState({
			filters
		});
		let filtersArray = Object.keys(filters).map((key, index) => filters[key]);

		if(this.props.onChange)
			this.props.onChange(filtersArray);
	}

	FieldFactory(filters) {
		return filters.map((filter, index) => {
			let a = (this.state.filters[filter.field] || {}).options || [];
			
			switch(filter.type) {
				case 'includes': 
					return <IncludeFilterField selected={a} onUpdate={(values) => this._onUpdate(filter, values)} name={filter.name} options={filter.values} key={index}/>;
				case 'value_range' : 
					return <RangeFilter selected={a} onUpdate={(values) => this._onUpdate(filter, values)} name={filter.name} options={filter.values} key={index}/>;
			}
		});
	}
}

