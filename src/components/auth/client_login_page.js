import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import Paper from 'material-ui/Paper';

const style = {
    margin: 12,
};

const paperStyleHeader = {
    width: 380,
    backgroundColor: 'rgba(236,240,241 ,0.0)',
    padding: '10px',
    fontSize: '1.2em',
    marginTop: '3%',
    height: '188px',
    textAlign: 'center',
    display: 'inline-block'
};
const paperStyleAbout = {
    width: 380,
    backgroundColor: 'rgba(236,240,241 ,0.5)',
    color: 'gray',
    padding: '10px',
    fontSize: '1em',
    height: '370px',
    textAlign: 'center',
    float: 'right'
};
const paperStylePref= {
    width: 380,
    backgroundColor: 'rgba(236,240,241 ,0.5)',
    color: 'gray',
    padding: '10px',
    fontSize: '1em',
    height: '350px',
    textAlign: 'center',
    float: 'right'
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
            <h4 key='client_signin'>*Click Edit Profile Info to insert name*</h4>
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
            <h4 key='client_signin'>*Click Edit Profile Info to insert phone number*</h4>
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
            <div className="home">
                <div style={paperStyleHeader}>
                    <h1>Welcome {this.renderHeaderName()}</h1>
                </div>
                <Paper zDepth={2} style={paperStylePref}>
                    <h1>Preferences</h1>
                    <h4 className="client-about">Planners</h4>
                    <h4>*Insert Links Here*</h4>
                    <h4 className="client-about">Summary</h4>
                    <h4>*Insert Summary Here*</h4>
                </Paper>
                <Paper zDepth={2} style={paperStyleAbout}>
                    <h1>About You</h1>
                    <h4 className="client-about">Name</h4>
                    {this.renderName()}
                    <h4 className="client-about">Email</h4>
                    <h4>{this.props.active_client.email}</h4>
                    <h4 className="client-about">Phone Number</h4>
                    {this.renderPhone()}
                    <h5 className="client-about"><Link to="/edit_client_info">Edit Profile Info</Link></h5>
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