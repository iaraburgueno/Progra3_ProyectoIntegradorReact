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
            url : 'https://api.themoviedb.org/3/movie/top_rated?api_key=67075a4c36f7b26dbc800dacf3003a96&language=en-US&page=',
            paginaActual : 1,
            cargando: true,
            orientacion: 'moviesCol'
        }
    }
    componentDidMount(){ // Metodo en donde puedo hacer mi fetch
        this.masPeliculas()
    }
    
   

    //Metodo para buscar peliculas 
    buscarPelicula(tituloPelicula){
        let peliculaBuscada = this.state.peliculasIniciales.filter(pelicula =>{
            return pelicula.title.toLowerCase().includes(tituloPelicula.toLowerCase()) // el metodo toLowerCase() agarra el texto en la api y lo pasa a minuscula y el metodo includes() retorna un valor booleano para saber si el valor que ingresa el usuario existe o no
        }) 
        this.setState({
            peliculas : peliculaBuscada
        })

    }

    //Metodo para borrar peliculas 
    borrarPelicula(id){
        // filter metodo para poder recorrer el array de peliculas y que cumpla la condicion que buscamos
        let nuevoArrayPeliculas = this.state.peliculas.filter(pelicula =>{
            return pelicula.id != id
        })
        this.setState({ //actualizo estado de peliculas a nuevoArrayPersonajes
            peliculas : nuevoArrayPeliculas

        })
    }

    //Metodo para agregar mas peliculas
    masPeliculas(){
        fetch(this.state.url+this.state.paginaActual)
        .then (respuesta => {
            return respuesta.json()
        })
        .then((data) => {
            this.setState ({ // conformo el obj literal 
                peliculas : this.state.peliculas.concat(data.results), 
                peliculasIniciales : this.state.peliculasIniciales.concat(data.results), 
                paginaActual : this.state.paginaActual+1,
                cargando: false
            })
        })


    }

     //Metodo para cambiar orientación filas o columnas
    cambiarOrientacion(orientacion){
        this.setState({
            orientacion: orientacion
        })
    }
   
    render(){

        return(
            <React.Fragment>
                <div>
                    <Buscador buscarPelicula = { (texto) => this.buscarPelicula(texto)} />
                </div>

                <div className="opciones">
                    <i onClick={()=> this.cambiarOrientacion('moviesCol')} className="fas fa-th"></i>
                    <i onClick={()=> this.cambiarOrientacion('moviesRow')}className="fas fa-align-justify"></i>
                </div>
            
                <div className={`${this.state.orientacion}`}>    
                    {
                        // Con este if ternario muestro cargando cuando la busqueda todavia no fue realizada
                        this.state.cargando ? 
                        <p> Cargando peliculas </p> :
                        //Con este if ternario aviso si la busqueda realizada no tiene resultados
                        this.state.peliculas.length === 0 ?
                        <p>No se encuentran resultados...</p> :
                        this.state.peliculas.map((pelicula, idx) => <CardMovies key={pelicula.id+"-"+idx} pelicula={pelicula}
                        borrar = {(idEliminar) => this.borrarPelicula(idEliminar)} // le estoy pasando al componente hijo le estoy pasando un metodo para elimiar una pelicula
                        />)
                        
                    }
                </div>

                <button className="masPelis" type="button" onClick= {() => this.masPeliculas()}>Cargar más peliculas</button>


            </React.Fragment>
        )
    }
}

export default Movies;