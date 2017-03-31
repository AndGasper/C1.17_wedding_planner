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

let firstPlanner = false;
let secondPlanner = false;
let thirdPlanner = false;


class clientLogin extends Component {


   componentWillMount(){
       const { planners } = this.props.active_client;
       if(planners[0]){
           let id1 = this.props.active_client.planners[0];
           this.props.fetchPlanner1(id1);
       }
       if(planners[1]){
           let id2 = this.props.active_client.planners[1];
           this.props.fetchPlanner2(id2);
       }
       if(planners[2]){
           let id3 = this.props.active_client.planners[2];
           this.props.fetchPlanner3(id3);
       }
       if(planners[3]){
           let id4 = this.props.active_client.planners[3];
           this.props.fetchPlanner4(id4);
       }
       if(planners[4]){
           let id5 = this.props.active_client.planners[4];
           this.props.fetchPlanner5(id5);
       }
       if(planners[5]){
           let id6 = this.props.active_client.planners[5];
           this.props.fetchPlanner6(id6);
       }
   }

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
    const { planner1 } = this.props;
    if(planner1){
        firstPlanner = true;
        return (
            <h4><a href="">{planner1.name}</a></h4>
        )
    } else {
        return (
            <h4>*Add planners from questionnaire*</h4>
        )
    }

}

    renderPlanners2(){
        const { planner2 } = this.props;
        if(firstPlanner === true){
            if(planner2){
                secondPlanner = true;
                return (
                    <h4><a href="">{planner2.name}</a></h4>
                )
            } else {
                return (
                    <h4>*Add more planners from questionnaire*</h4>
                )
            }
        }


    }
    renderPlanners3(){
        const { planner3 } = this.props;
        if(secondPlanner === true){
            if(planner3){
                thirdPlanner = true;
                return (
                    <h4><a href="">{planner3.name}</a></h4>
                )
            } else {
                return (
                    <h4>*Add more planners from questionnaire*</h4>
                )
            }
        }

    }
    renderPlanners4(){
        const { planner4 } = this.props;
        if(thirdPlanner === true){
            if(planner4){
                return (
                    <h4><a href="">{planner4.name}</a></h4>
                )
            } else {
                return (
                    <h4>*Add more planners from questionnaire*</h4>
                )
            }
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
                        {this.renderPlanners4()}
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
        authenticated: state.coupleData.authenticated,
        planner1: state.coupleData.planner1,
        planner2: state.coupleData.planner2,
        planner3: state.coupleData.planner3,
        planner4: state.coupleData.planner4,
        planner5: state.coupleData.planner5,
        planner6: state.coupleData.planner6,
    }
}

export default connect(mapStateToProps, actions)(clientLogin);