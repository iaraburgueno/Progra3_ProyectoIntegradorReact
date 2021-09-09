import React, {Component} from 'react';
import './nav.css';

class Nav extends Component {
     constructor(){
         super(); // es un metodo, permite que se hereden todos los metodos que voy a traer de component, metodo que pertenece a react
         this.state = {

         }
     }
     render(){
         return(
             <React.Fragment>
                 <header className='header'>
                    <i id="logo" className="fas fa-film"></i>
                    <h1 id="titulo">good movies</h1>
                    <i id="usuario" className="fas fa-user"></i>    
                </header>
             </React.Fragment>
         )
     }
   
}

export default Nav;