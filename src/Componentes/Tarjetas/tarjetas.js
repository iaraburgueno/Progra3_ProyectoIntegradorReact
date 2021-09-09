import React, {Component} from 'react';
import './tarjetas.css';

class Tarjetas extends Component {
    constructor(){ // se setean los estados 
        super();
        this.state = { // declaracion del estado inicial de esas propiedades que queremos trabajar de nuestros componentes. ES UN OBJ LITERAL.
            foto: '',
            titulo: '',
            descripcion: '',
            extra: [],
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
            
            })
            .catch(error => console.log(error))
    }
   
    render(){
        //console.log("Rendericé");
        return(
            <React.Fragment>
            
            </React.Fragment>
        )
    }
}

export default Tarjetas;