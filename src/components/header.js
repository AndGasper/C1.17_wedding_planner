import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


class Header extends Component {

    render(){
        return (
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded sticky-top">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand"><Link to="/">Wedding Planner Finder</Link></a>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><Link>Sign-in</Link></a>
                        </li>
                    </ul>
                    <span className="navbar-text mr-auto">
                    Navbar text with an inline element
                    </span>
                </div>
            </nav>
        )
    }
}

export default Header;