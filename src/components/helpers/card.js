import React, { Component } from 'react';
import './card.css';
import Modal from 'react-modal';
import cartEmitter from '../Events/events';
import {ProductModal} from '../Products/productModal';

const customStyles = {
  content : {
    overflow              : 'hidden',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    border                : 'solid 1px',
    padding               : '2px'
  }
};


export class Card extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {

      modalIsOpen:false,
      name:this.props.data.name,
      price:this.props.data.price,
      id:this.props.data.id,
      quantity:1,
      sProd:{}

    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

   

  }

   addProduct = (info) =>{
           
           
            cartEmitter.emit('addProduct',this.state)
            console.log("here");

            }
  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
   componentDidMount(){
    Modal.setAppElement('body');
  }



  render() {
    
    
    return (
         <div className="cont col-xs-12 col-md-4 col-lg-3 "  >
            <div className="card" styles="max-width: 18rem;">
              <div  onClick = { () => this.setState({modalIsOpen:true,sProd:this.props.data})} className="c_img"> </div>

              <div   onClick = { () => this.setState({modalIsOpen:true,sProd:this.props.data})} className="caption card-body">
                <h3 >Thumbnail label</h3>
                  <div>
                   Name:{this.state.name} <br />
                   Price:{this.state.price} 
             
                  </div>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="add" onClick = {() => this.addProduct(this.state.info)}>
                <div type="button" className="add_but" >
                  Προσθηκη
               
                </div>
              </div>
            </div>
            <Modal 
            isOpen={this.state.modalIsOpen}
            style={customStyles}
            onRequestClose={this.closeModal}>
            <div className="row close" onClick={this.closeModal}>
                  x &#x2715; 
            </div>
            <ProductModal product={this.state.sProd}/>
              
            </Modal>
            
            </div>





        
    );
  }
}