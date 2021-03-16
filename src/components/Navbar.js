import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav class="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
            <div class="container">
                <Link class="navbar-brand js-scroll" exact to="/">Divya Makwana</Link>
                <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div class="navbar-collapse collapse justify-content-end" id="navbarDefault">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link js-scroll active" exact to="/">Home </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link js-scroll" exact to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link js-scroll" exact to="/services">Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link js-scroll" exact to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
