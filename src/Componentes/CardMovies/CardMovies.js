import React, {Component} from 'react';
import './CardMovies.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class CardMovies extends Component {
    constructor(props){
        super(props)
        this.state = {
           
        }
    }

    render(){
         return (
    // <div className='contenedor'>
    //  <main>
    //     <section className="card-container">
    //         <article>
    //             <section className="navigation">
    //                 <div>
    //                     <i className="fas fa-chevron-left"></i>
    //                     <i className="fas fa-chevron-right"></i>
    //                 </div>
    //                 <i className="far fa-window-close"></i>
    //             </section>
    //             <main>
    //                 <img alt='20' src={`https://image.tmdb.org/t/p/w500/${this.props.pelicula.backdrop_path}`} />
    //                 <h3>{this.props.pelicula.title}</h3>
    //                 <p className="description">{this.props.pelicula.overview}</p>
                    
    //                 <button onClick= {() => this.masInfo() } >Ver más</button> 
    //                 <section className="aditional-info">
    //                     <p>Puntaje: {this.props.pelicula.vote_average}</p>
    //                     <p>Lenguaje original: {this.props.pelicula.original_language}</p>
    //                     <p>Fecha de lanzamiento: {this.props.pelicula.release_date}</p>
    //                 </section>
    //              </main>
    //          </article>
    //         </section> 
    //     </main>
    // </div>
    //     )
    
            // <Row md={4} className="g-4">
            //     {Array.from({ length: 1 }).map((_, idx) => (
            //         <Col md={4}>
            //         <Card>
            //             <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${this.props.pelicula.backdrop_path}`} />
            //             <Card.Body>
            //                 <Card.Title>{this.props.pelicula.title}</Card.Title>
            //                 <Card.Text>
            //                     {this.props.pelicula.overview}
            //             </Card.Text>
            //             <button onClick= {() => this.masInfo() } >Ver más</button> 
            //             <section className="aditional-info">
            //              <p>Puntaje: {this.props.pelicula.vote_average}</p>
            //              <p>Lenguaje original: {this.props.pelicula.original_language}</p>
            //              <p>Fecha de lanzamiento: {this.props.pelicula.release_date}</p>
            //             </section>
            //             </Card.Body>
            //         </Card>
            //     </Col>
            // ))}
            // </Row>
         <React.Fragment>
             
         </React.Fragment>
        )
    }
   
}

export default CardMovies;
