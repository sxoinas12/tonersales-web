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
      modalIsOpen:false,
      selectedProduct:null
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
          <a onClick={() => this.setState({selectedProduct: item, modalIsOpen:true}) } className="thumbnail">
            <img src={require('./first.jpeg')} />
            Name:{item.name} <br />
            Price:{item.price}
          </a>
        </div>);

    return (
      <div className="row">
        {nameList}
        <Modal 
          isOpen={this.state.modalIsOpen}
          style={customStyles}
          onRequestClose={this.closeModal}>
          <ProductModal product={this.state.selectedProduct}/>
        </Modal>
      </div>


      
    );
  }
}