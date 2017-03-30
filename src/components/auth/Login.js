import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Toggle from 'material-ui/Toggle';
import { browserHistory } from 'react-router';

const styles1 = {
    block: {
        maxWidth: 250,
    },
    toggle: {
        marginBottom: 16,
    },
    thumbOff: {
        backgroundColor: 'white',
    },
    trackOff: {
        backgroundColor: 'rgb(156, 39, 176)',
    },
    thumbSwitched: {
        backgroundColor: 'rgb(255, 64, 129)',
    },
    trackSwitched: {
        backgroundColor: 'rgb(156, 39, 176)',
    },
    labelStyle: {
        color: 'black',
        fontSize: '2.0em'
    },
};

const style = {
    margin: 12,
};

const paperStyle = {
    width: 370,
    backgroundColor: 'rgba(236,240,241 ,0.5)',
    color: 'black',
    padding: '10px',
    fontSize: '.9em',
    margin: 'auto',
    textAlign: 'center',
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

const renderInput = function ({input, label, type, meta: { error } }){
    const hasError = error;
    return(
        <div className={`'form-group row' ${hasError ? 'has-danger' : ''}`}>
            <label className='col-form-label'>{ label }</label>
            <div className='col-sm-12'>
                {createInput(input, type, hasError)}
                <div className='form-control-feedback'></div>
            </div>
        </div>
    )
}

class ClientSignin extends Component {
    handleFormSubmit(values){
        this.props.ClientSignin(values);
    }

    switchToPlannerLogin(){
        browserHistory.push('/planner_login');
    }

    render(){
        const {  handleSubmit } = this.props;
        return (
        <div className="pink">
            <div className="whiteCenter">
                <Paper zDepth={5} style={paperStyle}>
                    <h1 className="boldh1">Sign in</h1>
                    <form>
                        <Field name='email' component={renderInput} label='Email' type='text' />
                        <Field name='password' component={renderInput} label='Password' type='password' />
                        <RaisedButton label="Sign In" secondary={true} style={style} onTouchTap={handleSubmit(this.handleFormSubmit.bind(this))}/>
                        <Link to="/createAccount"><RaisedButton label="Create Account" secondary={true} style={style}/></Link>
                        <br/>
                        <br/>
                        <Toggle
                            label="Wedding Planner?"
                            thumbStyle={styles1.thumbOff}
                            trackStyle={styles1.trackOff}
                            thumbSwitchedStyle={styles1.thumbSwitched}
                            trackSwitchedStyle={styles1.trackSwitched}
                            labelStyle={styles1.labelStyle}
                            onToggle={this.switchToPlannerLogin.bind(this)}
                        />
                    </form>
                </Paper>
            </div>
        </div>
        );
    }
}

function mapStateToProps(state){
    return { errorMsg: state.auth }
}

const componentWithForm = reduxForm({
    form: 'form',
})(ClientSignin)
export default connect(mapStateToProps, actions)(componentWithForm) ;