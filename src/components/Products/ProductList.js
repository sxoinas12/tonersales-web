import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {code,Row,Col,Grid,ListGroupItem} from 'react-bootstrap';
import './ProductList.css';
import {ProductModal} from './productModal';
import Modal from 'react-modal';



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

export class ProductList extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen:false
    };
  }
  
  closeModal = () => {
    this.setState({modalIsOpen:false});
  }
  componentDidMount(){
    Modal.setAppElement('body');
  }

  render() {
         


    const {data} = this.props;
    const nameList = data.map((item)=>

        
        <div className="col-xs-12 col-md-3" key={item.id}>
        <a onClick={() => this.setState({modalIsOpen:true}) } className="thumbnail">
          <img src={require('./first.jpeg')} />
          Name:{item.name} <br />
          Price:{item.price}
        </a>

        <Modal 
          isOpen={this.state.modalIsOpen}
            style={customStyles}
          onRequestClose={this.closeModal}
          
              >
        <ProductModal />
        </Modal>

        </div>
  
   

      
      )
    return (

      <div className="row">
        {nameList}
      </div>


      
    );
  }
}