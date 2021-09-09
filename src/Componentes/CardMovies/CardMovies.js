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
    <main>
       
        <section class="card-container">
            <article>
                <section class="navigation">
                    <div>
                        <i class="fas fa-chevron-left"></i>
                        <i class="fas fa-chevron-right"></i>
                    </div>
                    <i class="far fa-window-close"></i>
                </section>
                <main>
                    <img alt='20' src={`https://image.tmdb.org/t/p/w500/${this.props.pelicula.backdrop_path}`} />
                    <h3>{this.props.pelicula.title}</h3>
                    <p class="description">{this.props.pelicula.overview}</p>
                    
                    <button onClick= {() => this.masInfo() } >Ver más</button> 
                    <section class="aditional-info">
                        <p>Puntaje: {this.props.pelicula.vote_average}</p>
                        <p>Lenguaje original: {this.props.pelicula.original_language}</p>
                        <p>Fecha de lanzamiento: {this.props.pelicula.release_date}</p>
                    </section>
                </main>
            </article>
           </section> 
    </main>
        )
    }
   
}

export default CardMovies;
