import React, { Component } from 'react';
import './ProductList.css';
import {ProductModal} from './productModal';
import Modal from 'react-modal';
import cartEmitter from '../Events/events';

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
      selectedProduct:{}
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

    
        <div className="col-xs-12 col-md-4 col-lg-3" key={item.id}>
          <div  className="thumbnail back">
            <div className='card_img'>
            </div>
            <div className="caption card_body">
              <h3 >Thumbnail label</h3>
              <div>
                Name:{item.name} <br />
                Price:{item.price}
              </div>
              <p>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
              </p>
            </div>
            <div className="add" onClick = {() => this.addProduct(item)}>
                <div className="add_but" >
                  Προσθηκη
                </div>
              </div>

          </div>
        </div>);

    return (
      <div>
     
      <div className="row">
        {nameList}
        <Modal 
          isOpen={this.state.modalIsOpen}
          style={customStyles}
          onRequestClose={this.closeModal}>
          <ProductModal product={this.state.selectedProduct}/>
        </Modal>

      </div>
      </  div>

      
    );
  }
}