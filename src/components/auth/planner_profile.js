import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class plannerLogin extends Component {
    renderName(){
        const { name } = this.props.active_planner;
        if(name){
            return (
                <h4 className="client-spec">{this.props.active_planner.name}</h4>
            )
        }
        return [
            <h2 key='client_signin' className="client-spec">*Click Edit Profile Info to insert name*</h2>
        ]
    }

    renderPhone(){
        const { phoneNumber } = this.props.active_planner;
        if(phoneNumber){
            return (
                <h4 className="client-spec">{this.props.active_planner.phoneNumber}</h4>
            )
        }
        return [
            <h2 key='client_signin' className="client-spec">*Click Edit Profile Info to insert phone number*</h2>
        ]
    }

    renderHeaderName(){
        const { name } = this.props.active_planner;
        if(name){
            return (
                <span>{this.props.active_planner.name}!</span>
            )
        }
        return [
            <span key="planner_signin">!</span>
        ]
    }


    render() {
        function handleChange() {
            console.log('Props are:', this.props);
        }


        return (
            <div>
                <h1 id="client-name">Welcome Back {this.renderHeaderName()}</h1>
                <div>
                    <div onClick={handleChange.bind(this)} id="client-info">
                        <h3 className="client-about">About You</h3>
                        <h4 className="user-labels">Company Name</h4>
                        {this.renderName()}
                        <h4 className="user-labels">Email</h4>
                        <h4 className="client-spec">{this.props.active_planner.email}</h4>
                        <h4 className="user-labels">Website</h4>
                        {this.renderPhone()}
                        <h5 id="edit_client_info"><Link to="/planner_details">Edit Profile Info</Link></h5>
                    </div>
                    <div id="client-pref">
                        <h3 className="client-about">Preferences</h3>
                        <h4 className="user-labels">Images</h4>
                        <h4 className="client-spec">*Insert Images Here*</h4>
                        <h4 className="user-labels client-hide">Email</h4>
                        <h4 className="client-spec client-hide">e</h4>
                        <h4 className="user-labels">Summary</h4>
                        <h4 className="client-spec">*Insert Summary Here*</h4>
                    </div>
                </div>
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