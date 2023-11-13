import React from 'react'
import 'bulma/css/bulma.min.css';
import logo from '../static/img/intrepd_logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item">
                <Link to='/'>
                    <img src={logo} />
                    </Link>
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                <Link to='/' class="navbar-item">
                    home
                    </Link>
                    <Link to='/about' class="navbar-item">
                    about
                    </Link>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            services
                        </a>

                        <div class="navbar-dropdown">
                            <a class="navbar-item">
                                web development
                            </a>
                            <a class="navbar-item">
                                analytics
                            </a>
                            <a class="navbar-item">
                                dataviz
                            </a>
                            {/* <a class="navbar-item">
                                Contact
                            </a> */}
                            {/* <hr class="navbar-divider" />
                            <a class="navbar-item">
                                Report an issue
                            </a> */}
                        </div>
                    </div>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                        <Link to='/contact' class="button is-primary">
                            
                                <strong>contact</strong>
                            
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar