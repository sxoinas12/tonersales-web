import React from 'react';


export default class RangeFilter extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			min:"",
			max:""
		}
	}

	_handleSubmit() {
		
		let options = [this.state.min,this.state.max]
		if(this.props.onUpdate)
			console.log(options)
			this.props.onUpdate(options);
	}
	render(){
		
	return (
		<div className="row">
			<div className="col-xs-12">
				<div className="row">
					<div className="col-xs-12">
						{this.props.name}
					</div>
				</div>
				<div className="">
						<input className="min" value={this.state.min} onChange={(e)=>this.setState({min:e.target.value})}  placeholder="Από €" />
						<input className="max" value={this.state.max} onChange={(e)=>this.setState({max:e.target.value})}  placeholder="Έως €" />
						<button className=" val_but btn btn-primary" onClick={() => this._handleSubmit()} > > </button>

				</div>
			</div>
		</div>

)}
}