import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const style = {
    margin: 12,
};

const paperStyle = {
    width: 300,
    backgroundColor: 'white',
    color: 'gray',
    padding: '10px',
    fontSize: '.9em'
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
    const hasError = touched && error;
    return(
        <div className={`form-group row' ${hasError ? 'has-danger' : ''}`}>
            <label className='col-sm-3 col-form-label'>{ label }</label>
            <div className='col-sm-9'>
                {createInput(input, type, hasError)}
                <div className='form-control-feedback'>{hasError ? error : ''}</div>
            </div>
        </div>
    )
}

class PlannerSignup extends Component {
    handleFormSubmit(values){
        this.props.signupPlanner(values);
    }

    render(){
        const {  handleSubmit } = this.props;

        return (
            <form>
                <Field name='email' component={renderInput} label='Email' type='text' />
                <Field name='password' component={renderInput} label='Password' type='password' />
                <Field name='passwordConfirm' component={renderInput} label='Confirm Password' type='password' />
                <RaisedButton onTouchTap={handleSubmit(this.handleFormSubmit.bind(this))} label="Sign Up" secondary={true} style={style}/>
            </form>
        );
    }
}

function validate(values){
    const error = {};

    var validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!values.email ||!validateEmail.test(values.email)){
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
