import React, { Component } from 'react';
import './entrance.css';
import Modal from 'react-modal';
import {Login} from '../login';
import {Register} from '../register';
import {Mini_Cart} from '../Products/mini-cart';


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
      subtitle:''
    };
  }

  openModal = () =>{
    this.setState({modalIsOpen:true});
  }

  afterOpenModal = () =>{
  } 

  closeModal = () => {
    this.setState({modalIsOpen:false});
  }

  componentDidMount(){
    Modal.setAppElement('body');
  }

  render() {
  const isLog = this.state.isLog;
  const selectModal = isLog ? (<Login />) : (<Register  />);
  return(
      <div className= "pos">
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
    }
  
}