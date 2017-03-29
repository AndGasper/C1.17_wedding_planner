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
    width: 385,
    padding: '10px',
    fontSize: '.9em',
    marginTop: '5%',
    height: '400px',
    backgroundColor: 'rgba(255,255,255 ,0.9)',
    textAlign: 'center',
    margin: 'auto',
    marginTop: '3%'
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
            <label className='col-form-label'>{ label }</label>
            <div className='col-sm-9'>
                {createInput(input, type)}
                <div className='form-control-feedback'></div>
            </div>
        </div>
    )
}




class ClientSignin extends Component {
    handleFormSubmit(values){
        this.props.ClientSignin(values);
    }

    render(){
        const {  handleSubmit } = this.props;

        return (
        <div className="home">
            <Paper zDepth={2} style={paperStyle}>
                <form>
                    <Field name='email' component={renderInput} label='Email' type='text' />
                    <br/>
                    <br/>
                    <Field name='password' component={renderInput} label='Password' type='password' />
                    <RaisedButton label="Sign In" secondary={true} style={style} onTouchTap={handleSubmit(this.handleFormSubmit.bind(this))}/>
                    <br/>
                    <Link to="/createAccount"><RaisedButton label="Create Account" secondary={true} style={style}/></Link>
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
})(ClientSignin)
export default connect(mapStateToProps, actions)(componentWithForm) ;