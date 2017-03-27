import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './app.css';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {purple500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';



const titleStyle = {
    marginLeft: 10,
    fontFamily: 'Clicker Script',
    fontSize: '3.5em',
    color: 'white'
};

const toolbarStyle = {
    toolbar: {
        backgroundColor: purple500,
        boxShadow: '0px 1px 9px 0px rgba(0,0,0,0.75)',
        height: '60px'
    },
    aboutButton: {
        color: 'white'
    },
    signinButton: {
        color: 'black'
    }
};

class Header extends Component {

    render(){
        return (
            <div className={styles.header}>
                <Toolbar style={toolbarStyle.toolbar} >
                    <ToolbarGroup firstChild={true}>
                        <Link to="/" ><ToolbarTitle style={titleStyle} text="Matchromonie" /></Link>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <FlatButton label="About Us" default={true} style={toolbarStyle.aboutButton}/>
                        <ToolbarSeparator/>
                        <Link to="/Login" ><FlatButton label="Sign In" secondary={true} style={toolbarStyle.signinButton}/></Link>
                    </ToolbarGroup>
                </Toolbar>
            </div>
        )
    }
}

export default Header;
