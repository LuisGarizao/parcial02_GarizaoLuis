import { NavLink } from "react-router-dom";
import logo from "../../../assets/img/film.svg"

export const Cabecera = () => {
    return (
        <>
            <nav
                className="navbar bg-dark border-bottom border-body"
                data-bs-theme="dark"
            >
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} alt="logo-sitio" />
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarColor02"
                        aria-controls="navbarColor02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarColor02"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/"
                                >
                                    Inicio
                                </NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle show"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="true"
                                >
                                    Peliculas
                                </a>
                                <ul
                                    className="dropdown-menu"
                                    data-bs-popper="static"
                                >
                                    <li>
                                        <NavLink className="dropdown-item" to="/pelcre">
                                            Crear Pelicula
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to="/pel-list">
                                            Listar Peliculas
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to="/peladm">
                                            Administrar Peliculas
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="*">
                                    Acerca de
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
