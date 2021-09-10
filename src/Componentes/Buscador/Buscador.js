import React, {Component} from 'react';
import './Buscador.css';

class Buscador extends Component {



render() {
    return (
        <React.Fragment>
            <section className='buscador'>
                            <i className="fas fa-th"></i>
                            <i className="fas fa-align-justify"></i>
                            <form action="">
                                <input type="text" name="search" id="" placeholder="Search"></input>
                                <button type="submit"><i class="fas fa-search"></i></button>
                            </form>
                </section>
        </React.Fragment>
    )
}

}



export default Buscador