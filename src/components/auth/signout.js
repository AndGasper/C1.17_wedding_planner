import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const style = {
    margin: 12,
};

const paperStyle = {
    width: 370,
    backgroundColor: 'rgba(236,240,241 ,0.5)',
    color: 'black',
    padding: '10px',
    fontSize: '1em',
    marginTop: '3%',
    height: '300px',
    margin: 'auto',
    textAlign: 'center',
    border: 'deeppink'
};


class Signout extends Component {

    handleLogOut(){
        console.log('logging out:',this.props);
        this.props.signoutClient();
        this.props.signOutPlanner();
    }
    render(){
        return (
            <div className="loginBackground">
                <Paper zDepth={5} style={paperStyle}>
                    <h1 className="boldh1">Are you sure you would like to log out?</h1>
                    <RaisedButton label="Yes" onClick={this.handleLogOut.bind(this)} secondary={true} style={style}/>
                    <Link to="/client_login_page"><RaisedButton label="No" secondary={true} style={style}/></Link>
                </Paper>
            </div>
        )
    }
}

export default connect(null, actions)(Signout);