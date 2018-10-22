import React, { Component } from 'react';
import './card.css';
import Modal from 'react-modal';
import cartEmitter from '../Events/events';
import {ProductModal} from '../Products/productModal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    border                : 'solid 1px',
    padding               : '2px',
    width                 : '40%'
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
      description:this.props.data.description,
      shortdescription:this.props.data.shortdescription,
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

   stripHtml = (html) =>{
    
   var max_len = 15; 
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   let s = tmp.innerText 
  // s = s.replace(/(^\s*)|(\s*$)/gi,"");
   s = s.replace(/[ ]{2,}/gi," ");
   s = s.replace(/[, ]+/g, " ").trim();
   s = s.replace(/\n /,"\n");
   let len= s.split(' ').length;
   let temp;
   if(len>max_len){
    let temp = s.split(' ',max_len);
    temp[max_len] = "...";
    return temp.join(' ');
  }
    else{

   return s;
}
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
         <div className="cont col-xs-12 col-sm-6  col-md-4 col-lg-3 "  >
            <div className="card" styles="max-width: 18rem;">
              <div className="c_img" onClick = { () => this.setState({modalIsOpen:true,sProd:this.props.data})} > </div>

              <div  className=" card-body" onClick = { () => this.setState({modalIsOpen:true,sProd:this.props.data})} >
               
                <div className="ProdName">
                  Name:{this.state.name}
                </div> 
                <div className="ProdPrice">
                  Price:{this.state.price}
                </div>
                
                <div className="ProdTd"  >
                  <b>Description:</b>
                  <br />
                  {this.stripHtml(this.state.shortdescription)}
                </div>
                  
                
              </div>
                <div className="add_but" type="button" onClick = {() => this.addProduct(this.state.info)}>
                  Προσθηκη 
              </div>
            </div>


            <Modal 
            isOpen={this.state.modalIsOpen}
            style={customStyles}
            onRequestClose={this.closeModal}>
            
            <ProductModal product={this.state.sProd} onClose={this.closeModal} />
              
            </Modal>
            
            </div>





        
    );
  }
}