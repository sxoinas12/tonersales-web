import React from 'react';
import './homeSearch.css';
import { withRouter } from 'react-router-dom'


import SearchBar from '../helpers/searchBar';


const Net = require('../helpers/net.js');
const Methods = require('../helpers/methods.js');



class HomeSearch extends React.Component {
  constructor(props){
    super(props);
    this.state={
      searchQuery:""
    }
  }


  handleSubmit = (res) =>{

    //console.log(res);
    console.log(res);
    
    this.props.history.push({
      pathname:'/search/' + res
    });
  }
 
  render() {
    return (
          <div className="row">
            <div className="col-xs-12">
              <div className="row text-center">
                <div className="col-xs-12">
                  <a className="" href="http://localhost:3000/">
                    <img src="./images/logo4.png" className="home_logo"/>
                  </a>
                </div>
              </div>
              <div className="row">  
                <div className="col-xs-6 col-xs-offset-3">      
                  <SearchBar handleSubmit = {this.handleSubmit} />
                </div>
              </div> 
            </div>
        </div>
    );
  }
}

export default withRouter(HomeSearch);




