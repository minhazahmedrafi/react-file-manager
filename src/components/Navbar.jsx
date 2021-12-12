import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/TheDashLogo.png'

const Navbar = () => {
return (
<>
    <section id="mainNavbar">
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container">
                <NavLink className="navbar-brand" exact to="/"><img className="img-fluid me-2 rounded-2" src={logo} alt="" /> The D_sh</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#">Why The D_sh</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#">Features</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#">Plans & Pricing</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#">Support</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#">Contact Sales</NavLink>
                        </li>
                        <div className="signInUpButtons">
                            <NavLink className="nav-link" exact to="/signin">Sign in</NavLink>
                            <NavLink className="nav-link" to="/signup">Sign up</NavLink>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    </section>
</>
)
}

export default Navbar