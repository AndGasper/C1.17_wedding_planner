import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
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
    return(
        <div className={'form-group row'}>
            <label className='col-sm-3 col-form-label'>{ label }</label>
            <div className='col-sm-9'>
                {createInput(input, type)}
                <div className='form-control-feedback'></div>
            </div>
        </div>
    )
}

class ClientInfo extends Component {
    handleFormSubmit(values){
        console.log('client info being changed: ', values);
        this.props.updateClient(values);
    }

    render(){
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field name='name' component={renderInput} label='Name' type='text' />
                <Field name='email' component={renderInput} label='Email' type='text' />
                <Field name='phoneNumber' component={renderInput} label='Phone Number' type='text' />
                <RaisedButton onTouchTap={handleSubmit(this.handleFormSubmit.bind(this))} label="Update Profile" secondary={true} style={style}/>
                <RaisedButton label="Change Password" secondary={true} style={style}/>
            </form>
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
    fields: ['name', 'email', 'phoneNumber'],
    validate
})(ClientInfo)

export default connect(mapStateToProps, actions)(componentWithForm) ;