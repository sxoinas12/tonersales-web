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
              <a href="http://localhost:3000/login">Συνδεση </a>
            </li>
            <li class="selector"> | </li>
            <li> 
              <a href="http://localhost:3000/register">Γίνε Μέλος</a>
            </li>
          </ul>
      </div>
    
   
      );
    }
  
}