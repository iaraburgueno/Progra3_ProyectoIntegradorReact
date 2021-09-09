import React from 'react';
import Nav from './Componentes/Nav/Nav';
import Footer from './Componentes/Footer/Footer';
import Movies from './Componentes/Movies/Movies';
import CardMovies from './Componentes/CardMovies/CardMovies';
import reactDom from 'react-dom';
import Buscador from './Componentes/Buscador/Buscador'


function App() {
  return (
    <React.Fragment>
      
      <Nav/>
      <Buscador/>
      <Movies/>
      <Footer />
  
    </React.Fragment>
  );
}

export default App;
