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
import * as actions from '../actions';




const toolbarStyle = {
    toolbar: {
        backgroundColor: purple500,
        boxShadow: '0px 1px 9px 0px rgba(0,0,0,0.75)',
        height: '60px'
    },
    homeButton: {
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

    componentWillMount(){
        if(this.props.authenticated){
            return;
        } else if(this.props.active_client === undefined){
            this.props.handleProfileClick();
        }
    }

    renderAuthLinks1(){
        const { authenticated, active_client } = this.props;
        if (active_client !== undefined){
            var profile = '/client_login_page';
        } else {
            var profile = '/planner_profile';
        }
        if(authenticated){
            return (
                <div key='signin3' className={styles.headerToolbarWide}>
                    <Toolbar style={toolbarStyle.toolbar} >
                        <ToolbarGroup firstChild={true}>
                            <Link to="/" ><ToolbarTitle style={toolbarStyle.titleWide} text="Planning The Date" /></Link>
                        </ToolbarGroup>
                        <ToolbarGroup>
                            <Link to="/"><FlatButton label="Home" default={true} style={toolbarStyle.homeButton}/></Link>
                            <ToolbarSeparator/>
                            <Link to={profile}><FlatButton label="Profile" default={true} style={toolbarStyle.signinButton}/></Link>
                            <ToolbarSeparator/>
                            <Link to='/signout'><FlatButton label="Sign Out" secondary={true} style={toolbarStyle.signinButton}/></Link>
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
                            <Link to="/"><FlatButton label="Home" default={true} style={toolbarStyle.homeButton}/></Link>
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
                                <Link to="/"><MenuItem primaryText="Home"/></Link>
                                <Link to="/client_login_page"><MenuItem primaryText="Profile"/></Link>
                                <Link to="/signout"><MenuItem primaryText="Sign Out"/></Link>
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
                                    <Link to="/"><MenuItem primaryText="Home"/></Link>
                                    <Link to="/Login"><MenuItem primaryText="Sign In"/></Link>
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
            authenticated: state.authReducer.authenticated,
            active_client: state.coupleData.active_client,
            active_planner: state.plannerData
        }
    }


export default connect(mapStateToProps, actions)(Header);