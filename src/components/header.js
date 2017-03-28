import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './app.css';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {purple500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Menu from 'material-ui/svg-icons/navigation/menu';




const toolbarStyle = {
    toolbar: {
        backgroundColor: purple500,
        boxShadow: '0px 1px 9px 0px rgba(0,0,0,0.75)',
        height: '60px'
    },
    aboutButton: {
        color: 'black'
    },
    signinButton: {
        color: 'white'
    },
    titleWide : {
        marginLeft: 10,
        fontFamily: 'Lobster',
        fontSize: '2.5em',
        color: 'white'
    },
    titleShort : {
        marginLeft: 10,
        fontFamily: 'Lobster',
        fontSize: '2.5em',
        color: 'white'
    }
};

class Header extends Component {

    handleSignOut(){
        let resp = window.confirm('You sure you would like to log out?');
        if(resp == true){
            browserHistory.push('/signout');
        }
    }

    renderAuthLinks1(){
        const { authenticated } = this.props;
        if(authenticated){
            return (
                <div key='signin3' className={styles.headerToolbarWide}>
                    <Toolbar style={toolbarStyle.toolbar} >
                        <ToolbarGroup firstChild={true}>
                            <Link to="/" ><ToolbarTitle style={toolbarStyle.titleWide} text="Planning The Date" /></Link>
                        </ToolbarGroup>
                        <ToolbarGroup>
                            <FlatButton label="About Us" default={true} style={toolbarStyle.aboutButton}/>
                            <ToolbarSeparator/>
                            <FlatButton onClick={this.handleSignOut.bind(this)} label="Sign Out" secondary={true} style={toolbarStyle.signinButton}/>
                        </ToolbarGroup>
                    </Toolbar>
                </div>
            )
        } else {
            return [
                <div key='signin4' className={styles.headerToolbarWide}>
                    <Toolbar style={toolbarStyle.toolbar} >
                        <ToolbarGroup firstChild={true}>
                            <Link to="/" ><ToolbarTitle style={toolbarStyle.titleWide} text="Planning The Date" /></Link>
                        </ToolbarGroup>
                        <ToolbarGroup>
                            <FlatButton label="About Us" default={true} style={toolbarStyle.aboutButton}/>
                            <ToolbarSeparator/>
                            <Link to="/Login" ><FlatButton label="Sign In" secondary={true} style={toolbarStyle.signinButton}/></Link>
                        </ToolbarGroup>
                    </Toolbar>
                </div>
            ]
        }
    }

    renderAuthLinks2() {
        const {authenticated} = this.props;
        if (authenticated) {
            return (
                <div key='signin1' className={styles.headerToolbarShort}>
                    <Toolbar style={toolbarStyle.toolbar}>
                        <ToolbarGroup firstChild={true}>
                            <Link to="/"><ToolbarTitle style={toolbarStyle.titleShort} text="Planning The Date"/></Link>
                        </ToolbarGroup>
                        <ToolbarGroup>
                            <IconMenu
                                iconButtonElement={<IconButton><Menu /></IconButton>}
                                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            >
                                <MenuItem primaryText="About"/>
                                <MenuItem primaryText="Sign Out"/>
                            </IconMenu>
                        </ToolbarGroup>
                    </Toolbar>
                </div>
            )
        } else {
            return [
                <div key='signin2' className={styles.header}>
                    <div className={styles.headerToolbarShort}>
                        <Toolbar style={toolbarStyle.toolbar}>
                            <ToolbarGroup firstChild={true}>
                                <Link to="/"><ToolbarTitle style={toolbarStyle.titleShort}
                                                           text="Planning The Date"/></Link>
                            </ToolbarGroup>
                            <ToolbarGroup>
                                <IconMenu
                                    iconButtonElement={<IconButton><Menu /></IconButton>}
                                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                >
                                    <MenuItem primaryText="About"/>
                                    <MenuItem primaryText="Sign In"/>
                                </IconMenu>
                            </ToolbarGroup>
                        </Toolbar>
                    </div>
                </div>
            ]
        }
    }


    render(){
        return (
            <div className={styles.header}>
                {this.renderAuthLinks1()}
                {this.renderAuthLinks2()}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
            authenticated: state.coupleData.authenticated
    }
}

export default connect(mapStateToProps)(Header);
