import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-dark">
            <p className="col-md-4 mb-0 text-muted">® 2022 Rancho, Inc</p>
            <Link to="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <img className='img-fluid' src='./images/navbar.png' id="fueguito" width="200" />
            </Link>
            <ul class="nav col-md-4 justify-content-end ">
                <li className="nav-item">
                    <Link className="nav-link text-white text-decoration-none text-muted" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white text-decoration-none text-muted" to={`category/lenia`}>Leña</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white text-decoration-none text-muted" to={`category/herramienta`}>Herramientas</Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link text-decoration-none text-muted" to="/Cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                    </Link>
                </li>
            </ul>
        </footer>
    )
}

export default Footer

