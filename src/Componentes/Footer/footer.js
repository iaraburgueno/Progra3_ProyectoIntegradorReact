import React from 'react';
import './footer.css';

//sin estado
function Footer () {
    return (
        <React.Fragment>
           <footer className='footer'>
               <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg'/> 
                <ul className="team">
                    <li className='nombre'>Iara Burgueño</li>
                    <li className='nombre'>Tiziana Maddalena</li>
                    <li className='nombre'>Rosario Rodriguez Montenegro</li>
                </ul>
            </footer> 
        </React.Fragment>

    );
}

export default Footer;