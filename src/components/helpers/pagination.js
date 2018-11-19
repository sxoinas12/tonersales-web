import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './pagination.css';


export class Pagination extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.pagination);

  }

  	
    render() {

   	const currentPage = parseInt(this.props.pagination.currentPage) || 1;
   	const lastPage = parseInt(this.props.pagination.lastPage) || 1;
  	
    return (
    	<div className="row">
    		<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 text">
    			<ul className="pagination">
		    		

    				{currentPage - 4 >= 0 ?
		    		(<li className="pageNumber" onClick={() =>this.props.onLoad(currentPage - 3)}>
				    		<a>
				        <span aria-hidden="true">&laquo;</span>
				        </a>
				     </li>):('')
				 }
	    			{
		    			currentPage - 2 > 0 ? 
			    		(
			    		<li className="pageNumber"   onClick={() =>this.props.onLoad(currentPage - 2)}>
				    		<a>
				    		{currentPage - 2}
				    		</a>
			    		</li>
			    		)
			    		: ('')
		    		}
		    		{currentPage - 1 > 0 ? 
			    		(<li className="pageNumber"  onClick={() =>this.props.onLoad(currentPage - 1)}>
			    
			    			<a>{currentPage - 1}</a>
			    		</li>)
			    		: ('')
		    		}
	 
			    		<li className="pageNumber" className="active">
			    
			    			<a>{currentPage}</a>
			    		</li>
			    	
		    		{currentPage + 1 <= lastPage ? 
			    		(<li className="pageNumber"    onClick={() =>this.props.onLoad(currentPage + 1)}>
			    			
			    			<a>{currentPage + 1}</a>
			    		</li>)
			    		: ('')
		    		}
		    		{currentPage + 2 <= lastPage ? 
			    		(<li className="pageNumber"   onClick={() =>this.props.onLoad(currentPage + 2)}>
			    
			    			<a>{currentPage + 2}</a>
			    			
			    		</li>)
			    		: ('')
		    		}
		    		{currentPage + 2 < lastPage ?
		    		(
		    		 <li className="pageNumber" onClick={() =>this.props.onLoad(currentPage + 3)}>
			    		<a>
				        <span aria-hidden="true">&raquo;</span>
				        </a>
				     </li>) :('')
				 }
	    		</ul>
    		</div>
    	</div>
    	)}
}




