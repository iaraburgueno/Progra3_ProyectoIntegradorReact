import React, {Component} from 'react';
import './Buscador.css';

class Buscador extends Component {



render() {
    return (
        <React.Fragment>
            <section className='buscador'>
                
                <div> 
                    <form action="">
                        <input type="text" name="search" id="" placeholder="Search"></input>
                        <button type="submit"><i class="fas fa-search"></i></button>
                    </form>
                </div>
                </section>
        </React.Fragment>
    )
}

}



export default Buscador