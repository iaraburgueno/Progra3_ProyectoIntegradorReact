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
                    <h1>Título/ Nombre de la app</h1>
                        
                </header>
             </React.Fragment>
         )
     }
   
}

export default Nav;