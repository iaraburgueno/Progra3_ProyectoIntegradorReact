import React, {Component} from 'react';
import './tarjetas.css';

class Tarjetas extends Component {
    constructor(){
        super();
        this.state = {
            foto: '',
            titulo: '',
            descripcion: '',
            extra: [],
        }
    }
    componentDidMount(){
        console.log("Cargado!");
       // let url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=67075a4c36f7b26dbc800dacf3003a96&language=en-US&page=1';

        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=67075a4c36f7b26dbc800dacf3003a96&language=en-US&page=1')
            .then(respuesta => {
                return respuesta.json()
            })    
            .then((data) => {
                console.log(data);
                this.setState({
                   
                })
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