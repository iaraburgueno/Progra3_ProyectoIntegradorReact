import React, {Component} from 'react';
import './Buscador.css';

class Buscador extends Component {
    constructor(){
        super()
        this.state={
            buscar : ''
        }
    }

    evitarBuscar(buscar){
        buscar.preventDefault()
    }

render() {
    return (
        <React.Fragment>
            <section className='buscador'>
                
                <div> 
                    <form onSubmit = {(buscar) => this.evitarBuscar(buscar)}>
                        <input type="text" name="nombre" id="" placeholder="Search"></input>
                        <button type="submit"><i class="fas fa-search"></i></button>
                    </form>
                </div>
                <i id="usuario" className="fas fa-user"></i>
            </section>
        </React.Fragment>
    )
}

}



export default Buscador