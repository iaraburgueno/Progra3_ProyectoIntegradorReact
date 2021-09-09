import React from 'react';
import './footer.css';

//sin estado
function Footer () {
    return (
        <React.Fragment>
           <footer>
                <ul className="team">
                    <li>Iara Burgueño</li>
                    <li>Tiziana Maddalena</li>
                    <li>Rosario Rodriguez Montenegro</li>
                </ul>
            </footer> 
        </React.Fragment>

    );
}

export default Footer;