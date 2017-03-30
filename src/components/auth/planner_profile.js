import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    textDecoration: 'none'
};

const paperStyleHeader = {
    width: '100%',
    backgroundColor: 'rgba(236,240,241 ,0.0)',
    padding: '10px',
    fontSize: '1.2em',
    marginTop: '2%',
    textAlign: 'center',
};
const paperStyleAbout = {
    backgroundColor: 'rgba(236,240,241 ,0.5)',
    color: 'gray',
    padding: '10px',
    fontSize: '1em',
    textAlign: 'center',
    display: 'inline-block'
};
const paperStylePref= {
    backgroundColor: 'rgba(236,240,241 ,0.5)',
    color: 'gray',
    height: '417px',
    padding: '10px',
    textAlign: 'center',
    fontSize: '1em',
    float: 'right',
};

class plannerLogin extends Component {

    renderName(){
        const { name } = this.props.active_planner;
        if(name){
            return (
                <h4>{this.props.active_planner.name}</h4>
            )
        }
        return [
            <h4 key='client_signin'>*Click Edit Profile Info to insert name*</h4>
        ]
    }

    renderWebsite(){
        const { website } = this.props.active_planner;
        if(website){
            return (
                <h4><a href={`http://${this.props.active_planner.website}`} target='_blank'>{this.props.active_planner.website}</a></h4>
            )
        }
        return [
            <h4 key='planner_signin'>*Click Edit Profile Info to insert email*</h4>
        ]
    }

    renderHeaderName(){
        const { name } = this.props.active_planner;
        if(name){
            return (
                <span>Back {this.props.active_planner.name}!</span>
            )
        }
        return [
            <span key="planner_signin">!</span>
        ]
    }


    render() {

        return (
            <div className="pink">
                <div style={paperStyleHeader}>
                    <h1>Welcome {this.renderHeaderName()}</h1>
                </div>
                <Paper className="col-sm-12 col-md-6 col-lg-6" zDepth={5} style={paperStyleAbout}>
                    <h1>About You</h1>
                    <h4 className="client-about">Company Name</h4>
                    {this.renderName()}
                    <h4 className="client-about">Email</h4>
                    <h4>{this.props.active_planner.email}</h4>
                    <h4 className="client-about">Website</h4>
                    {this.renderWebsite()}
                    <h5 className="client-about"><Link to="/planner_details">Edit Profile Info</Link></h5>
                    <h5 className="client-about"><Link to='/wedding_preferences'>Edit Client Preferences</Link></h5>
                </Paper>
                <Paper className="col-sm-12 col-md-6 col-lg-6" zDepth={5} style={paperStylePref}>
                    <h1>Potential Clients and Preferences</h1>
                    <div id="prefsLeft">
                        <h4 className="client-about">Clients Matched</h4>
                        <h4 className="plannerLinks client-pref-links"><a className='pinkLink' href="#">John Yosas</a></h4>
                        <h4 className="plannerLinks client-pref-links"><a className='pinkLink' href="#">Derrick Sebesta</a></h4>
                        <h4 className="plannerLinks client-pref-links"><a className='pinkLink' href="#">Dan and Darin</a></h4>
                    </div>
                    <div id="prefsRight">
                        <h4 className="client-about">Preferences</h4>
                        <h4 className="plannerLinks client-pref-links">*Insert Preferences Here*</h4>
                    </div>
                </Paper>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        active_planner: state.plannerData.active_planner,
        authenticated: state.plannerData.authenticated
    }
}

export default connect(mapStateToProps)(plannerLogin);