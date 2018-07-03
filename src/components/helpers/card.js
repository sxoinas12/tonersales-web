import React, { Component } from 'react';
import './card.css';


export class Card extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
      name:this.props.data.name,
      price:this.props.data.price
    }
  }

  render() {
    
    
    return (
         <div className="cont col-xs-12 col-md-4 col-lg-3 "  >
            <div className="card" styles="max-width: 18rem;">
              <div className="c_img"> </div>

              <div className="caption card-body">
                <h3 >Thumbnail label</h3>
                  <div>
                   Name:{this.state.name} <br />
                   Price:{this.state.price} 
             
                  </div>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button type="button" className="btn btn-dark" >Προσθηκη</button>
              </div>
            </div>
                
            </div>





        
    );
  }
}