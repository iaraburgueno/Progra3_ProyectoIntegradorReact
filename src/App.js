import React from 'react';
import Nav from './Componentes/Nav/Nav';
import Footer from './Componentes/Footer/Footer';
import Movies from './Componentes/Movies/Movies';
import CardMovies from './Componentes/CardMovies/CardMovies';
import reactDom from 'react-dom';


function App() {
  return (
    <React.Fragment>

      <header>
        <h1>Título/ Nombre de la app</h1>
        <section>
            <p>Ordenar ASC/ DESC</p>
            <i className="fas fa-th"></i>
            <i className="fas fa-align-justify"></i>
            <form action="">
                <input type="text" name="search" id="" placeholder="Search"></input>
                <button type="submit"><i class="fas fa-search"></i></button>
            </form>
        </section>
      </header>

      <div>
        <Movies/>
      </div>
      
      <footer>
        <Footer />
      </footer>

    </React.Fragment>
  );
}

export default App;
