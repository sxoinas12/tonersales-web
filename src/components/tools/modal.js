import React,{component} from 'react';
import ReactDom from 'react-dom';
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

export class Mod extends React.Component{

	constructor(){
		super();

		this.state = {
			modalIsOpen:false
		};
	}

	openModal = () =>{
		this.setState({modalIsOpen:true});
	}

	afterOpenModal = () =>{
		this.subtitle.style.color = '#f00';
	} 

	closeModal = () => {
		this.setState({modalIsOpen:false});
	}
	componentWillMount(){
		Modal.setAppElement('body');
	}
	render(){

		return(
			<div>
				<button onClick={this.openModal}>Open Modal</button>

				<Modal 
				  isOpen={this.state.modalIsOpen}
		          onAfterOpen={this.afterOpenModal}
		          onRequestClose={this.closeModal}
		          style={customStyles}
		          contentLabel="Example Modal"
		          >


			          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
			          <button onClick={this.closeModal}>&times;</button>
			          <div>I am a modal</div>
			          <form>
		            <input />
		            <button>tab navigation</button>
		            <button>stays</button>
		            <button>inside</button>
		            <button>the modal</button>
      			    </form>
      			   </Modal>
			</div>
			);
	}
}