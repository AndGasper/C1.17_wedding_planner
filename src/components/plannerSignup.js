import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';

class PlannerSignup extends Component {
    handleFormSubmit(values){
        actions.signupPlanner(values);
    }

    render(){
        console.log(this);
        const { errorMsg, handleSubmit, fields: { name, company, email, password, passwordConfirm, websiteurl, street, city, state, zip, phoneNumber, specialty }} = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className='form-group'>
                    <label>Name</label>
                    <input className='form-control' {...name} />
                </fieldset>
                <fieldset className='form-group'>
                    <label>Company</label>
                    <input className='form-control' {...company} />
                </fieldset>
                <fieldset className='form-group'>
                    <label>Email</label>
                    <input className='form-control' {...email} />
                </fieldset>
                <fieldset className='form-group'>
                    <label>Password</label>
                    <input className='form-control' {...password} type='password' />
                </fieldset>
                <fieldset className='form-group'>
                    <label>Confirm Password</label>
                    <input className='form-control' {...passwordConfirm} type='password' />
                </fieldset>
                <fieldset className='form-group'>
                    <label>Website Url</label>
                    <input className='form-control' {...websiteurl} />
                </fieldset>
                <fieldset className='form-group'>
                    <label>Street</label>
                    <input className='form-control' {...street} />
                </fieldset>
                <fieldset className='form-group'>
                    <label>City</label>
                    <input className='form-control' {...city} />
                </fieldset>
                <fieldset className='form-group'>
                    <label>State</label>
                    <input className='form-control' {...state} />
                </fieldset>
                <fieldset className='form-group'>
                    <label>Zip</label>
                    <input className='form-control' {...email} />
                </fieldset>
                <fieldset className='form-group'>
                    <label>Phone Number</label>
                    <input className='form-control' {...email} />
                </fieldset>
                <fieldset className='form-group'>
                    <label>Specialty</label>
                    <input className='form-control' {...specialty} />
                </fieldset>
                <button className="btn btn-primary">Sign Up!</button>
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
    return { errorMsg: state.auth.error }
}

export default reduxForm({
    form: 'signup',
    fields: ['name', 'company', 'email', 'password', 'passwordConfirm', 'websiteurl', 'street', 'city', 'state', 'zip', 'phoneNumber', 'specialty'],
    validate
}, mapStateToProps, actions)(PlannerSignup);