import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link } from 'react-router';

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

class EditClientInfo extends Component {
    handleFormSubmit(values){
        event.preventDefault();
        console.log(values);
    }



    render(){
        function handleChange() {
            console.log('Props are:', this.props);
        }
        const {  handleSubmit } = this.props;

        return (
            <form onClick={handleChange.bind(this)} onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field name='name' component={renderInput} label='Name' type='text'/>
                <Field name='email' component={renderInput} label='Email' type='text'/>
                <Field name='phoneNumber' component={renderInput} label='Phone Number'/>
                <button className="btn btn-primary">Change Info</button>
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
    return {
        active_client: state.coupleData.active_client
    }
}

const componentWithForm = reduxForm({
    form: 'form',
    fields: ['email', 'password', 'passwordConfirm'],
    validate
})(EditClientInfo)

export default connect(mapStateToProps, actions)(componentWithForm) ;