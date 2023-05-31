import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
return (
<nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
<div className="container">
    <a href="/" className="navbar-brand">Helsinki City Bike App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
        <ul className="navbar-nav flex-grow-1">
            <li className="nav-item">
                    <NavLink to="stations" className="nav-link text-dark">Stations</NavLink>
            </li>
            <li className="nav-item">
                    <NavLink to="journeys" className="nav-link text-dark">Journeys</NavLink>
            </li>
        </ul>
    </div>
    <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
    </div>
</div>
</nav>
)
}

export default NavBar