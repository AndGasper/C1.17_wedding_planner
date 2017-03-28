import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const style = {
    margin: 12,
};

const paperStyleHeader = {
    width: 380,
    backgroundColor: 'white',
    color: 'gray',
    padding: '10px',
    fontSize: '1em',
    marginTop: '3%',
    height: '170px',
    textAlign: 'center'
};
const paperStyleAbout = {
    width: 380,
    backgroundColor: 'white',
    color: 'gray',
    padding: '10px',
    fontSize: '1em',
    marginTop: '3%',
    height: '300px',
    textAlign: 'center'
};
const paperStylePref= {
    width: 500,
    backgroundColor: 'white',
    color: 'gray',
    padding: '10px',
    fontSize: '.9em',
};

class clientLogin extends Component {

    renderName(){
        const { name } = this.props.active_client;
        if(name){
            return (
                <h4>{this.props.active_client.name}</h4>
            )
        }
        return [
            <h2 key='client_signin'>*Click Edit Profile Info to insert name*</h2>
        ]
    }

    renderPhone(){
        const { phoneNumber } = this.props.active_client;
        if(phoneNumber){
            return (
                <h4 >{this.props.active_client.phoneNumber}</h4>
            )
        }
        return [
            <h2 key='client_signin'>*Click Edit Profile Info to insert phone number*</h2>
        ]
    }

    renderHeaderName(){
        const { name } = this.props.active_client;
        if(name){
            return (
                <span>Back {this.props.active_client.name}!</span>
            )
        }
        return [
            <span key="client_signin">!</span>
        ]
    }


    render() {
        function handleChange() {
            console.log('Props are:', this.props);
        }


        return (
            <div>
                <Paper zDepth={4} style={paperStyleHeader}>
                    <h1>Welcome {this.renderHeaderName()}</h1>
                </Paper>
                <Paper zDepth={2} style={paperStyleAbout}>
                    <h2>About You</h2>
                    <h4>Name</h4>
                    {this.renderName()}
                    <h4>Email</h4>
                    <h4>{this.props.active_client.email}</h4>
                    <h4>Phone Number</h4>
                    {this.renderPhone()}
                    <h5 id="edit_client_info"><Link to="/edit_client_info">Edit Profile Info</Link></h5>
                </Paper>
                <Paper zDepth={2} style={paperStyleAbout}>
                    <h2>Preferences</h2>
                    <h4>Images</h4>
                    <h4>*Insert Images Here*</h4>
                    <h4>Summary</h4>
                    <h4>*Insert Summary Here*</h4>
                </Paper>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        active_client: state.coupleData.active_client,
        authenticated: state.coupleData.authenticated
    }
}

export default connect(mapStateToProps)(clientLogin);