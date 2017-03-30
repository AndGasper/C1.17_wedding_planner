import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';
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

class WeddingPreferences extends Component {
    handleFormSubmit(values){
        this.props.updatePlanner(values);
        this.props.updatePlannerDetails();
    }

    render(){
        const { handleSubmit } = this.props;
        return(
            <div>
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <label>Prefered Expected Cost</label>
                    <div>
                        <label><Field name='preferences.cost' component={renderInput} type='radio' value='1' ></Field>Less than $5,000</label>
                        <br/>
                        <label><Field name='preferences.cost' component={renderInput} type='radio' value='2' ></Field>$5,000 - $10,000</label>
                        <br/>
                        <label><Field name='preferences.cost' component={renderInput} type='radio' value='3' ></Field>$10,000 - $25,000</label>
                        <br/>
                        <label><Field name='preferences.cost' component={renderInput} type='radio' value='4' ></Field>$25,000 - $50,000</label>
                        <br/>
                        <label><Field name='preferences.cost' component={renderInput} type='radio' value='5' ></Field>More than $50,000</label>
                    </div>
                    <label>Prefered Food</label>
                    <div>
                        <label><Field name='preferences.food' component={renderInput} type='radio' value='1' ></Field>Finger Foods</label>
                        <br/>
                        <label><Field name='preferences.food' component={renderInput} type='radio' value='2' ></Field>Buffet Style</label>
                        <br/>
                        <label><Field name='preferences.food' component={renderInput} type='radio' value='3' ></Field>Fancy</label>
                    </div>
                    <label>Flower</label>
                    <div>
                        <label><Field name='preferences.flowers' component={renderInput} type='radio' value='1' ></Field>Minimal</label>
                        <br/>
                        <label><Field name='preferences.flowers' component={renderInput} type='radio' value='2' ></Field>Average</label>
                        <br/>
                        <label><Field name='preferences.flowers' component={renderInput} type='radio' value='3' ></Field>Overpowering</label>
                    </div>
                    <label>Music</label>
                    <div>
                        <label><Field name='preferences.music' component={renderInput} type='radio' value='1' ></Field>DJ</label>
                        <br/>
                        <label><Field name='preferences.music' component={renderInput} type='radio' value='2' ></Field>Band</label>
                        <br/>
                        <label><Field name='preferences.music' component={renderInput} type='radio' value='3' ></Field>Orchestra</label>
                    </div>
                    <label>Alcohol</label>
                    <div>
                        <label><Field name='preferences.alcohol' component={renderInput} type='radio' value='1' ></Field>Dry</label>
                        <br/>
                        <label><Field name='preferences.alcohol' component={renderInput} type='radio' value='2' ></Field>Serve toasting alcohol</label>
                        <br/>
                        <label><Field name='preferences.alcohol' component={renderInput} type='radio' value='3' ></Field>Bar</label>
                    </div>
                    <label>Attendance</label>
                    <div>
                        <label><Field name='preferences.attendance' component={renderInput} type='radio' value='1' ></Field>Less than 50</label>
                        <br/>
                        <label><Field name='preferences.attendance' component={renderInput} type='radio' value='2' ></Field>51-100</label>
                        <br/>
                        <label><Field name='preferences.attendance' component={renderInput} type='radio' value='3' ></Field>100+</label>
                    </div>
                    <label>Photography</label>
                    <div>
                        <label><Field name='preferences.photography' component={renderInput} type='radio' value='1' ></Field>Disposable</label>
                        <br/>
                        <label><Field name='preferences.photography' component={renderInput} type='radio' value='2' ></Field>Photo</label>
                        <br/>
                        <label><Field name='preferences.photography' component={renderInput} type='radio' value='3' ></Field>Full Photo + Video</label>
                    </div>
                    <label>Time of the Year</label>
                    <div>
                        <label><Field name='preferences.time_of_year' component={renderInput} type='radio' value='1' ></Field>Winter</label>
                        <br/>
                        <label><Field name='preferences.time_of_year' component={renderInput} type='radio' value='2' ></Field>Spring</label>
                        <br/>
                        <label><Field name='preferences.time_of_year' component={renderInput} type='radio' value='3' ></Field>Summer</label>
                        <br/>
                        <label><Field name='preferences.time_of_year' component={renderInput} type='radio' value='4' ></Field>Autumn</label>
                    </div>
                    <label>Reception Venue</label>
                    <div>
                        <label><Field name='preferences.venue_reception' component={renderInput} type='radio' value='1' ></Field>Indoor</label>
                        <br/>
                        <label><Field name='preferences.venue_reception' component={renderInput} type='radio' value='2' ></Field>Outdoor</label>
                    </div>
                    <label>Ceremony Venue</label>
                    <div>
                        <label><Field name='preferences.venue_ceremony' component={renderInput} type='radio' value='1' ></Field>Indoor</label>
                        <br/>
                        <label><Field name='preferences.venue_ceremony' component={renderInput} type='radio' value='2' ></Field>Outdoor</label>
                    </div>
                    <label>Reception Vibe</label>
                    <div>
                        <label><Field name='preferences.reception_vibe' component={renderInput} type='radio' value='1' ></Field>Slow</label>
                        <br/>
                        <label><Field name='preferences.reception_vibe' component={renderInput} type='radio' value='2' ></Field>OK</label>
                        <br/>
                        <label><Field name='preferences.reception_vibe' component={renderInput} type='radio' value='3' ></Field>Hype</label>
                    </div>
                    <RaisedButton onTouchTap={handleSubmit(this.handleFormSubmit.bind(this))} label="Update Preferences" secondary={true} style={style}/>
                </form>
            </div>
        )
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
})(WeddingPreferences)

export default connect(mapStateToProps, actions)(componentWithForm) ;
