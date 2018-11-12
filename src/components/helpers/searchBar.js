import React from 'react';
import { withRouter } from 'react-router-dom'
import './searchBar.css';
const Net = require('../helpers/net.js');

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      searchQuery:this.props.initialValue,
    }
  }
 change = (e) =>{
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      searchQuery:value
    });
  }
  Search = (reqBody) =>{
    this.props.handleSubmit(reqBody);
  }
  _handleKeyPress = (e) =>{
    if(e.key == 'Enter'){
      this.Search(this.state.searchQuery)
    }
  }
  

  render() {
    return (
          <div className="searchBar">
      
            <div className="input-group" >
              <input 
                onKeyPress = {this._handleKeyPress}
                value={this.state.searchQuery}
                type="text"
                name={"searchQuery"}
                onChange={this.change}
                placeholder={this.state.searchQuery}
                className="" id="search-bar-input"/>
                <div className="input-group-addon btn" 
                 onClick =  {() => this.Search(this.state.searchQuery)}>
                  <i  className="fas fa-search"></i>
                </div>
            </div>   
            
             
             
        </div>
   
  
    );

  }
  
}

export default withRouter(SearchBar);