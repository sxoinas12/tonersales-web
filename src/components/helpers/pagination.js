import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './pagination.css';


export class Pagination extends React.Component {
  constructor(props) {
    super(props);

  }


  

    render() {
    console.log("Pagination");
    console.log(this.props.pagination);
    console.log(this.props.pagination.currentPage);
   	const currentPage = parseInt(this.props.pagination.currentPage) || 1;
   	const lastPage = parseInt(this.props.pagination.lastPage) || 1;
   	
    return (
    	<div className="row">
    		<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 text">
	    		{currentPage - 2 > 0 ? 
		    		<div className="pageNumber" onClick={() =>this.props.onLoad(currentPage - 2)}>
		    		{currentPage - 2}
		    		</div>
		    		: ''
	    		}
	    		{currentPage - 1 > 0 ? 
		    		<div className="pageNumber" onClick={() =>this.props.onLoad(currentPage - 1)}>
		    			{currentPage - 1}
		    		</div>
		    		: ''
	    		}
 
		    		<div className="pageNumber" >
		    			{currentPage}
		    		</div>
		    	
	    		{currentPage + 1 <= lastPage ? 
		    		<div className="pageNumber"  onClick={() =>this.props.onLoad(currentPage + 1)}>
		    			{currentPage + 1}
		    		</div>
		    		: ''
	    		}
	    		{currentPage + 2 <= lastPage ? 
		    		<div className="pageNumber"  onClick={() =>this.props.onLoad(currentPage + 2)}>
		    			{currentPage + 2}
		    		</div>
		    		: ''
	    		}
    		</div>
    	</div>
    	)}
}