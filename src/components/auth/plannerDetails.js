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
        this.props.updatePlanner(values);
        this.props.updatePlannerDetails();
    }

    render(){
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field name='name' component={renderInput} label='Company Name' type='text' />
                <Field name='website' placeholder='website' component={renderInput} label='Website' type='text' />
                <Field name='address.street' component={renderInput} label='Street' type='text' />
                <Field name='address.suite' component={renderInput} label='Apt/Suite' type='text' />
                <Field name='address.city' component={renderInput} label='City' type='text'/>
                <Field name='address.zip' component={renderInput} label='Zip' type='text' />
                <Field name='address.state' component={renderInput} label='State' type='text' />
                <Field name='description' component={renderInput} label='Description' type='textarea' />
                <RaisedButton onTouchTap={handleSubmit(this.handleFormSubmit.bind(this))} label="Update Profile" secondary={true} style={style}/>
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
        errorMsg: state.auth,
        active_planner: state.plannerData.active_planner
     }
}

const componentWithForm = reduxForm({
    form: 'planner_details',
    validate
})(PlannerDetails)

export default connect(mapStateToProps, actions)(componentWithForm) ;