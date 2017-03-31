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
};

const renderInput = function ({input, label, type, meta: {touched, error } }){
    const hasError = touched && error;
    return(
        <div className={`'form-group row' ${hasError ? 'has-danger' : ''}`}>
            <label className='col-sm-12 col-form-label'>{ label }</label>
            <div className='col-sm-12'>
                {createInput(input, type, hasError)}
                <div className='form-control-feedback'>{hasError ? error : ''}</div>
            </div>
        </div>
    )
};

class ClientInfo extends Component {
    handleFormSubmit(values) {
        
        this.props.updateClient(values);
        this.props.handleProfileClick();
    }

    handleProps() {
        
    }

    render(){
        const { handleSubmit } = this.props;

        return (
            <div className="pink">
                <div className="whiteCenter">
                    <Paper zDepth={2} style={paperStyle}>
                        <h1 className="boldh1">Edit Profile Information</h1>
                        <form onClick={this.handleProps.bind(this)} onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                            <Field name='name' component={renderInput} label='Name' type='text'/>
                            <Field name='email' component={renderInput} label='Email' type='text' />
                            <Field name='phoneNumber' component={renderInput} label='Phone Number' type='text' />
                            <RaisedButton onTouchTap={handleSubmit(this.handleFormSubmit.bind(this))} label="Update Profile" secondary={true} style={style}/>
                            <Link to="/client_login_page"><RaisedButton label="Cancel" secondary={true} style={style}/></Link>
                        </form>
                    </Paper>
                </div>
            </div>
        );
    }
}

function validate(values){
    const error = {};

    var validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



    if (!values.name){
        error.name = 'Please enter a name';
    }
    if(!values.email || !validateEmail.test(values.email)){
        error.email = 'Please enter a valid email';
    }

    return error;
}

function mapStateToProps(state){
    return {
        errorMsg: state.auth,
        active_client: state.coupleData.active_client,
        initialValues: state.coupleData.active_client
    }
}

const componentWithForm = reduxForm({
    form: 'form',
    validate
})(ClientInfo)

export default connect(mapStateToProps, actions)(componentWithForm) ;