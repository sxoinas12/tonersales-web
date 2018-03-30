import React, { Component } from 'react';
import './footer.css';


export class Footer extends React.Component {
  

  constructor(props) {
    super(props);
  }

  render() {
    
    
    return (
    <div className="footer">

        <div className="container ">
              <div className="row">
                <div className="col-sm-2">
                  <h6>© Konstantinos Schoinas</h6>
                </div>

                <div className="col-sm-4">
                  <h6>About us </h6>
                  <p>Now principles discovered off increasing how reasonably middletons men. Add seems out man met plate court sense. His joy she worth truth given. All year feet led view went sake. You agreeable breakfast his set perceived immediate. Stimulated man are projecting favourable middletons can cultivated.</p>
                </div>

                <div className="col-sm-2">
                  <h6>Navigation</h6>
                  <ul>
                    <li><a href="" >Προσφορές</a></li>
                    <li><a href="" >Νεα Προϊόντα</a></li>
                    <li><a href="" >Κορυφαίες πωλήσεις</a></li>
                    <li><a href="" >Επικοινωνήστε μαζί μας</a></li>

                  </ul>
                </div>

                <div className="col-sm-4">
                </div>
                 <div className="col-sm-2">
                  <h6>Coded with <span className="glyphicon glyphicon-heart"></span> by Konstantinos</h6>
                </div>
              </div>
            </div>
      
    </div>

      
    );
  }
}