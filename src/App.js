import React from 'react';
import Nav from './Componentes/Nav/Nav';
import Footer from './Componentes/Footer/footer';
import Movies from './Componentes/Movies/Movies';
import CardMovies from './Componentes/CardMovies/CardMovies';


import './App.css';

function App() {
  return (
    <div className="App">

      <header>
        <h1>Título/ Nombre de la app</h1>
        <section>
            <p>Ordenar ASC/ DESC</p>
            <i class="fas fa-th"></i>
            <i class="fas fa-align-justify"></i>
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

    </div>
  );
}

export default App;
