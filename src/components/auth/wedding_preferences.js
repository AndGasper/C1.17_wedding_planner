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
    width: '80%',
    backgroundColor: 'white',
    color: 'gray',
    padding: '10px',
    fontSize: '.9em',
    margin: 'auto',
    height: 'auto'
};

const createInput = function(input, type, error){
    const inputClass = `form-control ${error ? 'form-control-danger' : ''}`;
    switch (type){
        default:
            return (
                <input {...input} className='radio-button' type={type} />
            );
    }
}

const renderInput = function ({input, label, type, meta: {touched, error } }){
    return(
        <div className={'planner-preferences'}>
            <label className='col-md-6 col-sm-12 text-center'>{ label }{createInput(input, type)}</label>
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
                <div>
                    <Paper zDepth={2} style={paperStyle}>
                        <h1 className="boldh1">Edit Client Preferences</h1>
                        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                            <h2 className='preference-header'>Prefered Expected Cost</h2>
                            <div className='form-group-row'>
                                <Field name='preferences.cost' component={renderInput} type='radio' value='1' label='Less than $5,000' ></Field>
                                <Field name='preferences.cost' component={renderInput} type='radio' value='2' label='$5,000 - $10,000' ></Field>
                                <Field name='preferences.cost' component={renderInput} type='radio' value='3'  label='$10,000 - $25,000' ></Field>
                                <Field name='preferences.cost' component={renderInput} type='radio' value='4' label='$25,000 - $50,000'></Field>
                                <Field name='preferences.cost' component={renderInput} type='radio' value='5' label='More than $50,000'></Field>
                            </div>
                            <h2 className='preference-header'>Catering Budget</h2>
                            <div className='form-group-row'>
                                <Field name='preferences.food' component={renderInput} type='radio' value='1' label='Appetizers' ></Field>
                                <Field name='preferences.food' component={renderInput} type='radio' value='2' label='Buffet' ></Field>
                                <Field name='preferences.food' component={renderInput} type='radio' value='3' label='Gourmet' ></Field>
                            </div>
                            <h2 className='preference-header'>Flower Budget</h2>
                            <div className='form-group-row'>
                                <Field name='preferences.flowers' component={renderInput} type='radio' value='1' label='Minimal' ></Field>
                                <Field name='preferences.flowers' label='Moderate' component={renderInput} type='radio' value='2' ></Field>
                                <Field name='preferences.flowers' component={renderInput} type='radio' value='3' label='High' ></Field>
                            </div>
                            <h2 className='preference-header'>Music Budget</h2>
                            <div className='form-group-row'>
                                <Field name='preferences.music' component={renderInput} type='radio' value='1' label='DJ' ></Field>
                                <Field name='preferences.music' component={renderInput} type='radio' value='2' label='Band' ></Field>
                                <Field name='preferences.music' component={renderInput} type='radio' value='3' label='Orchestra'></Field>
                            </div>
                            <h2 className='preference-header'>Alcohol Budget</h2>
                            <div className='form-group-row'>
                                <Field name='preferences.alcohol' component={renderInput} type='radio' value='1' label='Cash bar' ></Field>
                                <Field name='preferences.alcohol' component={renderInput} type='radio' value='2' label='Champagne'></Field>
                                <Field name='preferences.alcohol' component={renderInput} type='radio' value='3' label='Open Bar'></Field>
                            </div>
                            <h2 className='preference-header'>Attendance</h2>
                            <div className='form-group-row'>
                                <Field name='preferences.attendance' component={renderInput} type='radio' value='1' label='Less than 50'></Field>
                                <Field name='preferences.attendance' component={renderInput} type='radio' value='2' label='51-100' ></Field>
                                <Field name='preferences.attendance' component={renderInput} type='radio' value='3' label='100+' ></Field>
                            </div>
                            <h2 className='preference-header'>Photography Budget</h2>
                            <div className='form-group-row'>
                                <Field name='preferences.photography' component={renderInput} type='radio' value='1' label="Disposable" ></Field>
                                <Field name='preferences.photography' component={renderInput} type='radio' value='2' label='Photo' ></Field>
                                <Field name='preferences.photography' component={renderInput} type='radio' value='3'  label='Full Photo + Video'></Field>
                            </div>
                            <h2 className='preference-header'>Time of the Year</h2>
                            <div className='form-group-row'>
                                <Field name='preferences.time_of_year' component={renderInput} type='radio' value='1' label='Winter'></Field>
                                <Field name='preferences.time_of_year' component={renderInput} type='radio' value='2' label='Spring' ></Field>
                                <Field name='preferences.time_of_year' component={renderInput} type='radio' value='3' label='Summer' ></Field>
                                <Field name='preferences.time_of_year' component={renderInput} type='radio' value='4' label='Autumn' ></Field>
                            </div>
                            <h2 className='preference-header'>Reception Venue</h2>
                            <div className='form-group-row'>
                                <Field name='preferences.venue_reception' component={renderInput} type='radio' value='1' label='Indoor' ></Field>
                                <Field name='preferences.venue_reception' component={renderInput} type='radio' value='2' label='Outdoor' ></Field>
                            </div>
                            <h2 className='preference-header'>Ceremony Venue</h2>
                            <div className='form-group-row'>
                                <Field name='preferences.venue_ceremony' component={renderInput} type='radio' value='1' label='Indoor' ></Field>
                                <Field name='preferences.venue_ceremony' component={renderInput} type='radio' value='2' label='Outdoor' ></Field>
                            </div>
                            <h2 className='preference-header'>Reception Atmosphere</h2>
                            <div className='form-group-row'>
                                <Field name='preferences.reception_vibe' component={renderInput} type='radio' value='1' label='Relaxed/Calm' ></Field>
                                <Field name='preferences.reception_vibe' component={renderInput} type='radio' value='2' label='Dancing' ></Field>
                                <Field name='preferences.reception_vibe' component={renderInput} type='radio' value='3' label='Party of the Year' ></Field>
                            </div>
                            <RaisedButton onTouchTap={handleSubmit(this.handleFormSubmit.bind(this))} label="Update Preferences" secondary={true} style={style}/>
                        </form>
                    </Paper>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return { 
        errorMsg: state.auth,
        active_planner: state.plannerData.active_planner,
        initialValues: state.plannerData.active_planner
     }
}

const componentWithForm = reduxForm({
    form: 'planner_details'
})(WeddingPreferences)

export default connect(mapStateToProps, actions)(componentWithForm) ;
