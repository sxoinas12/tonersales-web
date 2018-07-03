import React, { Component } from 'react';
import './ProductList.css';
import {ProductModal} from './productModal';
import Modal from 'react-modal';
import cartEmitter from '../Events/events';
import {Card} from '../helpers/card';


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
      selectedProduct:{},
      sProd: {}
    };
   
  }
  
 addProduct = (item) =>{
          
            this.setState({ selectedProduct: item })
            cartEmitter.emit('addProduct',item)


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
       
        <Card data= {item}  key={item.id} />

        );

    return (
      <div>
     
      <div className="row">
        {nameList}
        <Modal 
          isOpen={this.state.modalIsOpen}
          style={customStyles}
          onRequestClose={this.closeModal}>
          <ProductModal product={this.state.sProd}/>
        </Modal>

      </div>
      </div>

      
    );
  }
}