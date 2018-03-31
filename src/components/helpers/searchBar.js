import React, { Component } from 'react';

import { withRouter } from 'react-router-dom'

import './searchBar.css';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
  
    this.state={
      searchQuery:this.props.initialValue,
      list:[]
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

  render() {
    return (
          <div className="searchBar">
      
            <div className="input-group" >
              <input 
                value={this.state.searchQuery}
                type="text"
                name={"searchQuery"}
                onChange={this.change}
                placeholder={this.state.searchQuery}
                className="" id="search-bar-input"/>
                <div className="input-group-addon btn" 
                 onClick =  {() => this.props.onSubmit(this.state.searchQuery)}>
                  <i  className="fas fa-search"></i>
                </div>
            </div>   
            
             
             
        </div>
   
  
    );

  }
  
}

export default withRouter(SearchBar);