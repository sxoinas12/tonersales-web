import React, { Component } from 'react';
import './entrance.css';




export class Entrance extends React.Component {
  

  constructor() {
    super();
  }

  render() {
  return(

      <div className= "pos">
          <ul>
            <li>
              <a href="/login">Σύνδεση</a>
            </li>
            <li className="selector"> | </li>
            <li> 
             <a href="/register">Γίνε Μέλος </a>
            </li>
          </ul>
      </div>
    
   
      );
    }
  
}