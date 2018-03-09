import React, { Component } from 'react';
import './entrance.css';
export class Entrance extends React.Component {
  

  constructor() {
    super();
  }

  render() {
  return(

      <div>
          <ul>
            <li>
              <a>Συνδεση </a>
            </li>
            <li> | </li>
            <li> 
              <a>Γίνε Μέλος</a>
            </li>
          </ul>
      </div>
    
   
      );
    }
  
}