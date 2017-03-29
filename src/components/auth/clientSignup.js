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
    width: 370,
    backgroundColor: 'rgba(236,240,241 ,0.5)',
    color: 'black',
    padding: '10px',
    fontSize: '.9em',
    marginTop: '3%',
    height: '500px',
    margin: 'auto',
    textAlign: 'center'
};


const createInput = function(input, type, error){
    const inputClass = `form-control ${error ? 'form-control-danger' : ''}`;
    switch (type){
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

class ClientSignup extends Component {
    handleFormSubmit(values){
        console.log(values);
        this.props.signupClient(values);
    }

    render(){
        const {  handleSubmit } = this.props;

        return (
            <div className="home">
                <Paper zDepth={2} style={paperStyle}>
                    <form>
                        <Field name='email' component={renderInput} label='Email' type='text' />
                        <Field name='password' component={renderInput} label='Password' type='password' />
                        <Field name='confirmPassword' component={renderInput} label='Confirm Password' type='password' />
                        <RaisedButton onTouchTap={handleSubmit(this.handleFormSubmit.bind(this))} label="Sign Up" secondary={true} style={style}/>
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
    return { errorMsg: state.auth}
}

const componentWithForm = reduxForm({
    form: 'form',
    fields: ['email', 'password', 'passwordConfirm'],
    validate
})(ClientSignup)

export default connect(mapStateToProps, actions)(componentWithForm) ;
