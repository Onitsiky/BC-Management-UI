import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="navbar-container bg-dark">
            <div className="navbar-item row">
            <div className="row col-9 mx-4">
            <a href="#" className="col-1 m-3"><Link to="/">Accueil</Link></a>
            <a href="#" className="col-1 m-3"><Link to="/bills">Factures</Link></a>
            <a href="#" className="col-1 m-3"><Link to="/expenditures">Dépenses</Link></a>
            <a href="#" className="col-1 m-3"><Link to="/items">Articles</Link></a>
            </div>
            <button className="col-lg-2 btn btn-light navbar-btn rounded-2 m-2">Se déconnecter</button>
            </div>
        </div>
    )
}
export default Navbar;