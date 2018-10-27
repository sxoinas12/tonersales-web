import React from 'react';
import './homeSearch.css';
import { withRouter } from 'react-router-dom'


import SearchBar from '../helpers/searchBar';


const Net = require('../helpers/net.js');
const Methods = require('../helpers/methods.js');



class HomeSearch extends React.Component {
  constructor(props){
    super(props);
    this.input = this.checkReq();
    console.log(this.props)
    this.state={
      searchQuery:"",
      list:[]
      
    }
    
  }


  handleSubmit = (res) =>{

    //console.log(res);
    console.log(res);
    
    this.props.history.push({

      pathname:'/search',
      state: {list:res}
      });
  }

  checkReq = () => {
    if(this.props.location.state === undefined){
      
      return '';
    }
    else {
      //console.log(this.props.location);
      return this.props.location.search;
    }
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
                  <SearchBar initialValue = {this.input} handleSubmit = {this.handleSubmit} />
                </div>
              </div> 
            </div>
        </div>
    );
  }
}

export default withRouter(HomeSearch);




