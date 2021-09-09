import React, {Component} from 'react';

class Buscador extends Component {



render() {
    return (
        <React.Fragment>
            <section className='buscador'>
                            <p>Ordenar ASC/ DESC</p>
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