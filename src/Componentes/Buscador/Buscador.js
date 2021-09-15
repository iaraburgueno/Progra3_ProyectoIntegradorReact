import React, {Component} from 'react';
import './Buscador.css';

class Buscador extends Component {
    constructor(props){
        super(props)
        this.state={
            buscarTitulo : ''
        }
    }

    evitarBuscar(evento){ //metodo que evita que el buscador se submitee
        evento.preventDefault()
    }

    controlarBuscador(evento) { //metodo que me captura lo que es ingresado en el form
        this.setState({
            buscarTitulo: evento.target.value
        }, () => this.props.buscarPelicula(this.state.buscarTitulo))

    }

render() {
    return (
        <React.Fragment>
            <section className='buscador'>
                
                <div> 
                    <form onSubmit = {(e) => this.evitarBuscar(e)}>
                        <input type="text" name="titulo" id="busqueda" placeholder="Search" onChange={(e) => this.controlarBuscador(e)} 
                        value={this.state.buscarTitulo}></input>
                        <i className="fas fa-search"></i>
                    </form>
                </div>
                
            </section>
        </React.Fragment>
    )
}

}



export default Buscador