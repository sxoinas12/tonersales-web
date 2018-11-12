import React, { Component } from 'react';
import './entrance.css';
import Modal from 'react-modal';
import {Login} from '../login';
import {Register} from '../register';
import {Mini_Cart} from '../Products/mini-cart';
import { Route } from 'react-router-dom'

import UserService from '../Services/UserService';

const divstyle = {
  color: 'black', // 'ms' is the only lowercase vendor prefix
  position:'relative',
  left:'180px',
  bottom:'80px'
};


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export class Entrance extends React.Component {
  

  constructor(props){
    super(props);

    this.state = {
      isLog:false,
      modalIsOpen:false,
      subtitle:'',
      logged:false,
      user:{
      }
    };
  }

  openModal = () =>{
    this.setState({modalIsOpen:true});
  }

  onLogin = (res) => {
    this.setState({logged:true});
    let user = {...this.state.user}
    
    user["token"] = res;
    console.log("lastly here")
    this.setState({user});
    this.saveToLocal();
  }

  loggout = () =>{
    UserService.logout();
    this.setState({
      logged: false
    })
  }

  closeModal = () => {
    this.setState({modalIsOpen:false});
  }

  componentDidMount(){
    Modal.setAppElement('body');
    UserService.getMe().then((res) => {
      if(res.token) {
        this.setState({
          user: res,
          logged: true
        });
      }
      console.log(res);
    });
  }

  render() {
  const isLog = this.state.isLog;
  const logged = this.state.logged;
  const selectModal = isLog ? (<Login onLogin={this.onLogin} close={this.closeModal} open={this.openModal} />) : 
                              (<Register onRegister = {this.onLogin} open={this.openModal} close={this.closeModal}  />);
  const changeEntrance = logged ?  (

    <div className="row pos">
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-3 col-lg-offset-1 text-right">
        <Mini_Cart {...this.props} />
      </div>        
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-lg-offset-1 text-center">
        <Route render={({history}) =>(
        <img type="button" onClick={() =>history.push('/profile')}src="/images/no-user.png" className="profile"/>
        )}/>
      </div>
      <div className="col-xs-4 col-sm-4 col-md-3 col-lg-3 text-left  loggout" onClick={this.loggout} >
          Logout
      </div>
    </div>
    ):(
    <div className= "row pos">
          <ul>
            <li>
              <a onClick={() => this.setState({isLog:true, modalIsOpen:true})}>Σύνδεση</a>
            </li>
            <li className="selector"> | </li>
            <li> 
             <a onClick={() => this.setState({isLog:false, modalIsOpen:true})}>Γίνε Μέλος </a>
            </li>
            <li>
              <Mini_Cart {...this.props} />
            </li>
          </ul>

          <Modal 
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
            <div>
              <button onClick={this.closeModal} style={divstyle}>&times;</button>
              {selectModal}
            </div>    
          </Modal>
      </div>
    ); 

  
  
  


  
  return(
      <div>
        {changeEntrance}
      </div>
    
   
      );
    }
  
}