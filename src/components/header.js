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
                <Link className="navbar-brand"><Link to="/">Wedding Planner Finder</Link></Link>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/questions">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/client_login_page'><Link>Sign-in</Link></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/client_login_page'><img src='../../login_icons/GooglePlus.png' /></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/client_login_page'><img src='../../login_icons/facebook-256.png' /></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;