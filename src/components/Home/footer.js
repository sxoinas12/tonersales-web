import React, { Component } from 'react';



export class Footer extends React.Component {
  

  constructor(props) {
    super(props);
  }

  render() {
    
    
    return (
    <div>
        <div class="container">
              <div class="row">
                <div class="col-sm-2">
                  <h6>© Konstantinos Schoinas</h6>
                </div>

                <div class="col-sm-4">
                  <h6>About us </h6>
                  <p>Now principles discovered off increasing how reasonably middletons men. Add seems out man met plate court sense. His joy she worth truth given. All year feet led view went sake. You agreeable breakfast his set perceived immediate. Stimulated man are projecting favourable middletons can cultivated.</p>
                </div>

                <div class="col-sm-2">
                  <h6>Navigation</h6>
                  <ul class="unstyled">
                    <li><a href="" >Home</a></li>
                    <li><a href="" >Home</a></li>
                    <li><a href="" >Home</a></li>
                    <li><a href="" >Home</a></li>

                  </ul>
                </div>

                <div class="col-sm-4">
                </div>
                 <div class="col-sm-2">
                  <h6>Coded with <span class="glyphicon glyphicon-heart"></span> by Konstantinos</h6>
                </div>
              </div>
            </div>
      
    </div>

      
    );
  }
}