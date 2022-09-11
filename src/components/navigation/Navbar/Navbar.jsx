import React from 'react';
import { Link } from 'react-router-dom';
import  CartWidget  from '../CartWidget';
import './navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark text-light bg-dark">
                <div className="container-fluid">
                <p className="text-white text-decoration-none logoNavbar">RANCHO</p>
                    <Link to='/'>
                        <img className="navbar-brand" src='./images/navbar.png' width='40' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`category/lenia`}>Leña</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`category/herramienta`}>Herramientas</Link>
                            </li>
                            <CartWidget />
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar