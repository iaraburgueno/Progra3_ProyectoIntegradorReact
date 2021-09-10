import React from 'react';
import './footer.css';

//sin estado
function Footer () {
    return (
        <React.Fragment>
           <footer className='footer'>
               <img className="logoDB" src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg'/> 
                <ul className="team">
                    <li className='nombre'> <a href='https://www.linkedin.com/in/iarab/'>Iara Burgueño</a></li>
                    <li className='nombre'> <a href='https://www.linkedin.com/in/tizianamaddalena/'>Tiziana Maddalena</a></li>
                    <li className='nombre'> <a href='https://www.linkedin.com/in/rrodriguezmontenegro/'>Rosario Rodriguez Montenegro</a></li>
                </ul>
            </footer> 
        </React.Fragment>

    );
}

export default Footer;
