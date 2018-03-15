import React, { Component } from 'react';

import { withRouter } from 'react-router-dom'

import {ProductList} from '../Products/ProductList.js';
import {Entrance} from '../Home/entrance';


class SearchBar extends React.Component {
  constructor(){
    super();
    this.state={
      searchQuery:"",
      list:[],
    }
  }


 change = (e) =>{
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]:value
          });
  }

  handleSubmit = (e) =>{
    e.preventDefault();
  
    this.props.history.push({
      pathname:'/search',
      state: {searchQuery:this.state.searchQuery}
      });
    console.log(this.props);

    

  }

 
  render() {
    
    

    return (
          <div>
      
            <div className="col-xs-12 col-md-offset-1 col-md-6 col-lg-offset-3 col-lg-6">        

            <div className="input-group">
              <input 
                value={this.state.searchQuery}
                type="text"
                name={"searchQuery"}
                onChange={this.change}
                placeholder="Find your toner"
                className="form-control" id="inlineFormInputGroup"/>
                <div className="input-group-addon btn" onClick = {this.handleSubmit}>
                  <i  className="fas fa-search"></i>
                </div>
            </div>   
            
            </div> 
            <div> <Entrance /> </div>   
        </div>
   
  
    );
  }
}

export default withRouter(SearchBar);


