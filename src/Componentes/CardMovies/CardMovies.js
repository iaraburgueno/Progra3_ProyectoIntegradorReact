import React, {Component} from 'react';
import './CardMovies.css';

class CardMovies extends Component {
    constructor(props){
        super(props)
        this.state = {
           masInfo: false,
           text: 'Ver más'
        }
    }

    viewMore(){
        if(this.state.masInfo){
            this.setState({
                masInfo: false,
                text: 'Ver más'
            })
        } else {
            this.setState({
                masInfo: true,
                text: 'Ver menos'
            })            
        }
    }

    render(){
         return (
         <React.Fragment>
                <div className= 'tarjetas'>
                    <div className='poster'>
                        <img alt='20' src={`https://image.tmdb.org/t/p/w500/${this.props.pelicula.backdrop_path}`} />
                    </div>
                    <div className='infoGeneral'> 
                        <h3 className ='titulo'>{this.props.pelicula.title}</h3>
                        <p className="descripcion">{this.props.pelicula.overview}</p>
                        <p className={`extra ${this.state.masInfo ? 'show' : 'hide'}`}>Fecha de estreno: {this.props.pelicula.release_date}
                        <br></br>Puntaje: {this.props.pelicula.vote_average}
                        <br></br>Lenguaje original: {this.props.pelicula.original_language}</p>
                        <p className="verMas" onClick={()=>this.viewMore()}>{this.state.text}</p> 
                    </div>
                    <div> 
                        <button onClick = { () => this.props.borrar(this.props.pelicula.id)}> Borrar </button>
                    </div>
                </div>
         </React.Fragment>
        )
    }
   
}

export default CardMovies;
