/*
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class MainLogin extends Component {

    renderError() {
        const {errorMsg} = this.props;

        if (errorMsg) {
            return (
                <div className="alert alert-danger">
                    <strong>Oooops!</strong> {errorMsg}
                </div>
            )
        }
    }

    handleChange(username){
        console.log('input changed: ', username);
    }

    handleSignin(values){
        console.log('clicked sign in: ', values);
        this.props.signinClient(values);
        //ajax call here to retrieve info
    }

  /!*  removeHash() {
        var scrollV, scrollH, loc = window.location;
        if ('replaceState' in history) {
            history.replaceState('', document.title, loc.pathname + loc.search);
        } else {
            // Prevent scrolling by storing the page's current scroll offset
            scrollV = document.body.scrollTop;
            scrollH = document.body.scrollLeft;

            loc.hash = '';

            // Restore the scroll offset, should be flicker free
            document.body.scrollTop = scrollV;
            document.body.scrollLeft = scrollH;
        }
    }*!/

    render(){
        const { handleSubmit } = this.props;
        return (
            <div>
                <h2>Login</h2>
                <div>
                    <form onSubmit={handleSubmit(this.handleSignin.bind(this))}>
                        <br/>
                        <label htmlFor="email">Email:</label>
                        <Field name="email"
                               id="email"
                               type="text"/>
                        <br/>
                        <br/>
                        <label htmlFor="password"> Password: </label>
                        <Field name="password" id="password" type="text" />
                        <br/>
                        <br/>
                        {this.renderError()}
                        <button type='submit' className="btn btn-info">Log in</button>
                    </form>
                    <button type='submit' className="btn btn-info">Create an Account</button>
                    <br/>
                    <button className="btn btn-info"><Link to='/profile'>Override to Client Page</Link></button>
                    <br/>
                    <button className="btn btn-danger"><Link to="/api/user/login/facebook" onClick={this.removeHash}>Log in With Facebook</Link></button>
                    <br/>
                    <br/>
                    <Link to="/" >Back to Home</Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        errorMsg: state.error
    }
}

function validate(values) {
    const errors = {};

    if(!values.title){
        errors.title = "Enter a title";
    }
    if(!values.details){
        errors.details = "Enter some details about you todo item";
    }
    if(!values.completeBy){
        errors.completeBy = "Enter a date to complete by!";
    }
    return errors;
}

export default connect(mapStateToProps, actions)(reduxForm({
    form: 'MainLogin',
    validate
})(MainLogin));*/

import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import * as actions from '../../actions';
import {connect} from 'react-redux';



const renderInput = function({input, label, type, meta: {touched, error}}) {
    const hasError = touched && error;
    return (
        <div className={`form-group row ${hasError ? 'has-danger' : ''}`}>
            <label className="col-sm-3 col-form-label">{label}</label>
            <div className="col-sm-9">
                {createInput(input, type, hasError)}
                <div className="form-control-feedback">{hasError ? error : ''}</div>
            </div>
        </div>
    )
};

const createInput = function (input, type, error) {
    const inputClass = `form-control ${error ? 'form-control-danger' : ''}`;

    switch(type) {
        case 'textarea':
            return (
                <textarea{...input} className={inputClass}></textarea>
            );
        case 'radio':
            return (
                <input {...input} className={inputClass} type={type}/>
            );
        default:
            return (
                <input {...input} className={inputClass} type={type}/>
            )
    }
};


class MainLogin extends Component {

    renderError() {
        const {errorMsg} = this.props;

        if (errorMsg) {
            return (
                <div className="alert alert-danger">
                    <strong>Oooops!</strong> {errorMsg}
                </div>
            )
        }
    }

    handleSignin(values) {
        console.log('clicked sign in:', values)
        this.props.signinClient(values);
    }

    render() {

        const  {handleSubmit} = this.props;


        return (
            <form onSubmit={handleSubmit(this.handleSignin.bind(this))}>
                <Field name="email" component={renderInput} type="text" label="Email Address"/>
                <Field name="password" component={renderInput} type="text" label="Password"/>
                {this.renderError()}
                <button className="btn btn-primary">Sign In</button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        errorMsg: state.error
    }
}


export default connect(mapStateToProps, actions)(reduxForm({
    form: 'MainLogin'
}) (MainLogin))
