import React from 'react';
import Nav from './Componentes/Nav/Nav';
import Footer from './Componentes/Footer/Footer';
import Movies from './Componentes/Movies/Movies';
import CardMovies from './Componentes/CardMovies/CardMovies';
import reactDom from 'react-dom';
import Buscador from './Componentes/Buscador/Buscador'
import './App.css'


function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Nav/>
        <Movies/>
        <Footer />
      </div>
  
    </React.Fragment>
  );
}

export default App;
