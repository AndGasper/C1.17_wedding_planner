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

class PlannerDetails extends Component {
    handleFormSubmit(values){
        debugger;
        this.props.updatePlanner(values);
    }

    render(){
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field name='name' component={renderInput} label='Company Name' type='text' />
                <Field name='website' component={renderInput} label='Website' type='text' />
                <Field name='description' component={renderInput} label='Description' type='textarea' />
                <RaisedButton onTouchTap={handleSubmit(this.handleFormSubmit.bind(this))} label="Sign Up" secondary={true} style={style}/>
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
    fields: ['name', 'website', 'description'],
    validate
})(PlannerDetails)

export default connect(mapStateToProps, actions)(componentWithForm) ;