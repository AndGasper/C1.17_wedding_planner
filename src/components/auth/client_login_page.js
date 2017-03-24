import React, { Component } from 'react';
import { connect } from 'react-redux';

class clientLogin extends Component {


    render() {
        function handleChange(){
            console.log('Props are:', this.props);
        }

       /* function faceBook(){
            if(!this.props.active_client.facebook){
                return (
                    <h4 className="client-spec">{this.props.active_client.facebook.email}</h4>
                )
            } else {
                return (
                    <h4 className="client-spec">No Facebook Linked</h4>
                )
            }
        };
*/

        return (
            <div>
                <h1 id="client-name">Welcome Back {this.props.active_client.name}</h1>
                <div>
                    <div onClick={handleChange.bind(this)} id="client-info">
                        <h2 className="client-about">About You</h2>
                        <h4 className="user-labels">Name</h4>
                        <h4 className="client-spec">{this.props.active_client.name}</h4>
                        <h4 className="user-labels">Email</h4>
                        <h4 className="client-spec">{this.props.active_client.email}</h4>
                        <h4 className="user-labels">Phone Number</h4>
                        <h4 className="client-spec">{this.props.active_client.phoneNumber}</h4>

                    </div>
                    <div id="client-pref">
                        <h2 className="client-about">Preferences</h2>
                        <h4 className="user-labels">Images</h4>
                        <h4 className="client-spec">a</h4>
                        <h4 className="user-labels client-hide">Email</h4>
                        <h4 className="client-spec client-hide">b</h4>
                        <h4 className="user-labels">Summary</h4>
                        <h4 className="client-spec">d</h4>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        active_client: state.coupleData.active_client
    }
}

export default connect(mapStateToProps)(clientLogin);