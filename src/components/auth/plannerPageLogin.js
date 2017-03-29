import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Toggle from 'material-ui/Toggle';
import { browserHistory } from 'react-router';

const styles1 = {
    block: {
        maxWidth: 250,
    },
    toggle: {
        marginBottom: 16,
    },
    thumbOff: {
        backgroundColor: 'white',
    },
    trackOff: {
        backgroundColor: 'rgb(156, 39, 176)',
    },
    thumbSwitched: {
        backgroundColor: 'white',
    },
    trackSwitched: {
        backgroundColor: 'rgb(255, 64, 129)',
    },
    labelStyle: {
        color: 'black',
        fontSize: '2.0em'
    },
};

const style = {
    margin: 12,
};

const paperStyle = {
    width: 370,
    backgroundColor: 'rgba(236,240,241 ,0.5)',
    color: 'black',
    padding: '10px',
    fontSize: '.9em',
    marginTop: '3%',
    height: 500,
    margin: 'auto',
    textAlign: 'center'
};



const createInput = function(input, type, error){
    const inputClass = `form-control ${error ? 'form-control-danger' : ''}`;
    switch (type){
        case 'textarea':
            return (
                <textarea {...input} className={inputClass}></textarea>
            );
        default:
            return (
                <input {...input} className={inputClass} type={type} />
            );
    }
}


const renderInput = function ({input, label, type, meta: {touched, error } }){
    return(
        <div className={'form-group row'}>
            <label className='col-form-label'>{ label }</label>
            <div className='col-sm-12'>
                {createInput(input, type)}
                <div className='form-control-feedback'></div>
            </div>
        </div>
    )
}




class PlannerPageLogin extends Component {
    handleFormSubmit(values){
        this.props.plannerLogin(values);
    }

    switchToClientLogin(){
        browserHistory.push('/Login');
    }

    render(){
        const {  handleSubmit } = this.props;

        return (
        <div className="loginBackground">
            <Paper zDepth={2} style={paperStyle}>
                <h1 className="boldh1">Wedding Planner Login</h1>
                <form>
                    <Field name='email' component={renderInput} label='Email' type='text' />
                    <Field name='password' component={renderInput} label='Password' type='password' />
                    <RaisedButton onTouchTap={handleSubmit(this.handleFormSubmit.bind(this))} label="Sign in" secondary={true} style={style}/>
                    <Link to="planner_signup"><RaisedButton label="Create Account" secondary={true} style={style}/></Link>
                    <br/>
                    <br/>
                    <Toggle
                        label="Wedding Planner?"
                        thumbStyle={styles1.thumbOff}
                        trackStyle={styles1.trackOff}
                        thumbSwitchedStyle={styles1.thumbSwitched}
                        trackSwitchedStyle={styles1.trackSwitched}
                        labelStyle={styles1.labelStyle}
                        onToggle={this.switchToClientLogin.bind(this)}
                        toggled
                    />
                </form>
            </Paper>
        </div>
        );
    }
}

function validate(values){
    const error = {};

    if (!values.email){
        error.email = 'Please enter an email';
    }
    if(!values.password){
        error.password = 'Please enter a password';
    }
    if(!values.passwordConfirm){
        error.passwordConfirm = 'Please confirm password';
    }

    if(values.password !== values.passwordConfirm){
        error.passwordConfirm = 'Passwords don\'t match';
    }

    return error;
}

function mapStateToProps(state){
    return { errorMsg: state.auth }
}

const componentWithForm = reduxForm({
    form: 'form',
    fields: ['email', 'password', 'passwordConfirm'],
    validate
})(PlannerPageLogin)
export default connect(mapStateToProps, actions)(componentWithForm) ;