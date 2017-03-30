import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { browserHistory } from 'react-router';

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
            <label className='col-sm-12 col-form-label'>{ label }</label>
            <div className='col-sm-12'>
                {createInput(input, type)}
                <div className='form-control-feedback'></div>
            </div>
        </div>
    )
}

class PlannerSignup extends Component {
    handleFormSubmit(values){
        this.props.signupPlanner(values);
    }

    backToLogin(){
        browserHistory.push('/planner_login');
    }

    render(){
        const {  handleSubmit } = this.props;

        return (
            <div className="pink">
                <div className="whiteCenter">
                    <Paper zDepth={2} style={paperStyle}>
                        <h1 className="boldh1">Create Wedding Planner Account</h1>
                        <form>
                            <Field name='email' component={renderInput} label='Email' type='text' />
                            <Field name='password' component={renderInput} label='Password' type='password' />
                            <Field name='confirmPassword' component={renderInput} label='Confirm Password' type='password' />
                            <RaisedButton onTouchTap={handleSubmit(this.handleFormSubmit.bind(this))} label="Sign Up" secondary={true} style={style}/>
                            <RaisedButton onTouchTap={this.backToLogin.bind(this)} label="Cancel" style={style}/>
                        </form>
                    </Paper>
                </div>
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
    return { errorMsg: state.auth}
}

const componentWithForm = reduxForm({
    form: 'form',
    fields: ['email', 'password', 'passwordConfirm'],
    validate
})(PlannerSignup)

export default connect(mapStateToProps, actions)(componentWithForm) ;


