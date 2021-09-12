import React, {Component} from 'react';
import './CardMovies.css';

class CardMovies extends Component {
    constructor(props){
        super(props)
        this.state = {
           
        }
    }

    render(){
         return (
         <React.Fragment>
                <div className= 'tarjetas'>
                        <img alt='20' src={`https://image.tmdb.org/t/p/w500/${this.props.pelicula.backdrop_path}`} />
                        <h3 className ='titulo'>{this.props.pelicula.title}</h3>
                        <p className="descripcion">{this.props.pelicula.overview}</p>
                        <button onClick= {() => this.masInfo() } className='mas' >Ver más</button>
                        <button onClick = { () => this.props.borrar(this.props.pelicula.id)}> Borrar </button>
                </div>
         </React.Fragment>
        )
    }
   
}

export default CardMovies;
