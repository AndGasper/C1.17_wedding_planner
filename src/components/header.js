import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './app.css';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {purple100} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';



const titleStyle = {
    marginLeft: 10,
    fontFamily: 'Clicker Script',
    fontSize: '3.5em',
    color: 'white'
};

const toolBarStyle = {
    backgroundColor: purple100,
    boxShadow: '0px 1px 9px 0px rgba(0,0,0,0.75)'
};



class Header extends Component {

    render(){
        return (
            <Toolbar style={toolBarStyle} >
                <ToolbarGroup firstChild={true}>
                    <Link to="/" ><ToolbarTitle style={titleStyle} text="Matchromonie" /></Link>
                </ToolbarGroup>
                <ToolbarGroup>
                    <FlatButton label="About Us" default={true}/>
                    <ToolbarSeparator/>
                    <Link to="/Login" ><FlatButton label="Sign In" secondary={true}/></Link>
                </ToolbarGroup>
            </Toolbar>
        )
    }
}

export default Header;






{/*<nav className="navbar navbar-toggleable-md navbar-light bg-faded sticky-top">*/}
    {/*<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">*/}
        {/*<span className="navbar-toggler-icon"></span>*/}
    {/*</button>*/}
    {/*<Link className="navbar-brand" to="/">Wedding Planner Finder</Link>*/}
    {/*<div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">*/}
        {/*<ul className="navbar-nav">*/}
            {/*<li className="nav-item active">*/}
                {/*<Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
                {/*<Link className="nav-link" to="/questions">About us</Link>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
                {/*<Link className="nav-link" to='/Login'>Sign-in</Link>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
                {/*<Link className="nav-link" to='/client_login_page'><img src='../../login_icons/GooglePlus.png' /></Link>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
                {/*<Link className="nav-link" to='/client_login_page'><img src='../../login_icons/facebook-256.png' /></Link>*/}
            {/*</li>*/}
        {/*</ul>*/}
    {/*</div>*/}
{/*</nav>*/}