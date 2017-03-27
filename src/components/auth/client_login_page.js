import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class clientLogin extends Component {
    renderName(){
        console.log('cvcvcv', this.props.active_client);
        const { name } = this.props.active_client;
        if(name){
            return (
                <h4 className="client-spec">{this.props.active_client.name}</h4>
            )
        }
        return [
            <h4 className="client-spec">*Click Edit Profile Info to insert name*</h4>
        ]
    }

    renderPhone(){
        const { phone } = this.props.active_client;
        if(phone){
            return (
                <h4 className="client-spec">{this.props.active_client.phoneNumber}</h4>
            )
        }
        return [
            <h4 className="client-spec">*Click Edit Profile Info to insert phone number*</h4>
        ]
    }




    render() {
        function handleChange() {
            console.log('Props are:', this.props);
        }


        return (
            <div>
                <h1 id="client-name">Welcome Back {this.renderName()}</h1>
                <div>
                    <div onClick={handleChange.bind(this)} id="client-info">
                        <h3 className="client-about">About You</h3>
                        <h4 className="user-labels">Name</h4>
                        {this.renderName()}
                        <h4 className="user-labels">Email</h4>
                        <h4 className="client-spec">{this.props.active_client.email}</h4>
                        <h4 className="user-labels">Phone Number</h4>
                        {this.renderPhone()}
                        <h5 id="edit_client_info"><Link to="/edit_client_info">Edit Profile Info</Link></h5>
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
        active_client: state.coupleData.active_client,
        authenticated: state.coupleData.authenticated
    }
}

export default connect(mapStateToProps)(clientLogin);