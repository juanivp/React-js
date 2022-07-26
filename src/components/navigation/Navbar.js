import React from 'react';
import {Link} from 'react-router-dom';



const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark text-light bg-dark">
                <div className="container-fluid">
                    <Link to='/'>
                    <img className="navbar-brand" src='navbar.png' width='70' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active"  to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Productos'>Productos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Promociones">Promociones</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar