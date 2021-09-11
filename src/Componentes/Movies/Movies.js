import React, {Component} from 'react';
import CardMovies from '../CardMovies/CardMovies';
import Buscador from '../Buscador/Buscador';
import './Movies.css'

class Movies extends Component {
    constructor(){ // se setean los estados 
        super();
        this.state = { // declaracion del estado inicial de esas propiedades que queremos trabajar de nuestros componentes. ES UN OBJ LITERAL.
            peliculas: [],
            peliculasIniciales: [],
        }
    }
    componentDidMount(){ // Metodo en donde puedo hacer mi fetch
        console.log("Cargado!");
        let url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=67075a4c36f7b26dbc800dacf3003a96&language=en-US&page=1';

        fetch(url)
            .then(respuesta => {
                return respuesta.json()
            })    
            .then((data) => {
                console.log(data);
                this.setState({
                    peliculas: data.results,
                    peliculasIniciales: data.results,
                })
            
            })
            .catch(error => console.log(error))
    }
    
    // // Metodo (masInfo())
    // masInfo(){
    //     let url = this.state.
    //     fetch(url)
    //     .then(respuesta =>{
    //         return respuesta.json()
    //     })
    //     .then((data) =>{
    //         this.setState({
                 
    //         })
    //     })
    // }

    //Metodo para buscar peliculas 
    buscarPelicula(tituloPelicula){
        let peliculaBuscada = this.state.peliculasIniciales.filter(pelicula =>{
            return pelicula.title.toLowerCase().includes(tituloPelicula.toLowerCase()) // el metodo toLowerCase() agarra el texto en la api y lo pasa a minuscula y el metodo includes() retorna un valor booleano para saber si el valor que ingresa el usuario existe o no
        }) 
        this.setState({
            peliculas : peliculaBuscada
        })

    }
   
    render(){
        //console.log("Rendericé");
        return(
            <React.Fragment>
                <div>
                    <Buscador buscarPelicula = { (texto) => this.buscarPelicula(texto)} />
                </div>
                <div className="opciones">
                    <button type="button">Cargar más tarjetas</button>
                    <br></br>
                    <i className="fas fa-th"></i>
                    <i className="fas fa-align-justify"></i>
                </div>
            
                  <div className="row card-container">                
                    { 
                        //Con este if ternario controlo por si tarda la carga de datos me aparezca un mensaje que dice cargando aplicación
                        this.state.peliculas.length === 0 ?
                        <p>No se encuentran resultados</p> :
                        this.state.peliculas.map(pelicula => <CardMovies key={pelicula.id} pelicula={pelicula}/>)
                        //Aqui debemos pasarle el método (borrarTarjeta) al hijo
                    }
                </div>

            </React.Fragment>
        )
    }
}

export default Movies;