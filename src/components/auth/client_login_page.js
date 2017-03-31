import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import * as actions from '../../actions';

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
    height: '387px',
    padding: '10px',
    textAlign: 'center',
    fontSize: '1em',
    float: 'right',
};

class clientLogin extends Component {

   /* showPlanners(){
        let array_length = this.props.active_client.planners.length;

        for(let i = 0; i < array_length; i++){
            let tn = document.createTextNode(this.props.active_client.planners[i].name);
            let h4 = document.createElement("h4").appendChild(tn);
            
            document.getElementById('prefs-left').append(h4);
        }

    }*/

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

    renderPlanners1(){
    const { planners } = this.props.active_client;
    if(planners.length > 0){
        return (
            <h4><a href="">{this.props.active_client.planners[0].name}</a></h4>
        )
    }

}

    renderPlanners2(){
        const { planners } = this.props.active_client;
        if(planners.length > 1){
            return (
                <h4><a href="">{this.props.active_client.planners[1].name}</a></h4>
            )
        }

    }
    renderPlanners3(){
        const { planners } = this.props.active_client;
        if(planners.length > 2){
            return (
                <h4><a href="">{this.props.active_client.planners[2].name}</a></h4>
            )
        }

    }
    renderButton(){
        if(this.props.active_client.planners < 1){
            return (
                <Link className="col-sm-12 col-md-4 profileRetake" to="/questions"><RaisedButton label="Take Questionnaire" secondary={true} style={style}/></Link>
            )
        } else {
            return (
                <Link className="col-sm-12 col-md-4 profileRetake" to="/questions"><RaisedButton label="Retake Questionnaire" secondary={true} style={style}/></Link>
            )
        }
    }


    render() {

        return (
            <div className="pink">
                <div style={paperStyleHeader}>
                    <h1>Welcome {this.renderHeaderName()}</h1>
                </div>
                <Paper className="col-sm-12 col-md-6 col-lg-6" zDepth={5} style={paperStyleAbout}>
                    <h1>About You</h1>
                    <h4 className="client-about">Name</h4>
                    {this.renderName()}
                    <h4 className="client-about">Email</h4>
                    <h4>{this.props.active_client.email}</h4>
                    <h4 className="client-about">Phone Number</h4>
                    {this.renderPhone()}
                    <h5 className="client-about"><Link to="/edit_client_info">Edit Profile Info</Link></h5>
                </Paper>
                <Paper className="col-sm-12 col-md-6 col-lg-6" zDepth={5} style={paperStylePref}>
                    <h1>Preferences</h1>
                    <div id="prefs-left">
                        <h4 className="client-about plannersGenerated">Planners</h4>
                        {this.renderPlanners1()}
                        {this.renderPlanners2()}
                        {this.renderPlanners3()}
                        {this.renderButton()}
                    </div>
                   {/* <div id="prefsRight">
                        <h4 className="client-about client-pref-summ">Summary</h4>
                        <h4 className="client-pref-summ">*Insert Summary Here*</h4>
                    </div>*/}
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