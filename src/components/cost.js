import React, {Component} from 'react';
import { history } from '../store';
import {connect} from 'react-redux';
import * as actions from '../action/actionCreator';
import styles from './app.css';

class Cost extends Component {

    handleClick() {
        let value = document.forms.budgetForm.options.value;
        this.props.updatePrefs('cost', Number(value));
        if (value) {
            console.log('sending to server: ', {preferences: this.props.coupleData});
            this.props.sendPrefsToServer({preferences: this.props.coupleData});
            history.push('/results')
        }
    }

    render() {
        return (
            <div className={`${styles.budgetTitle}`}>
                <h3>Wedding Budget</h3>
                <div className={`${styles.budgetDiv}`}>
                    <div className="btn-group">
                        <form name="budgetForm" onClick={this.handleClick.bind(this)}>
                            <label className="btn btn-link label-form">
                                <input type="radio" name="options" id="option1" value="1"/> $0 - $5000
                            </label>
                            <label className="btn btn-link label-form">
                                <input type="radio" name="options" id="option2" value="2"/> $5000 - $10,000
                            </label>
                            <label className="btn btn-link label-form">
                                <input type="radio" name="options" id="option3" value="3"/> $10,000 - $25,000
                            </label>
                            <label className="btn btn-link label-form">
                                <input type="radio" name="options" id="option4" value="4"/> $25,000 - $50,000
                            </label>
                            <label className="btn btn-link label-form">
                                <input type="radio" name="options" id="option5" value="5"/> $50,000++
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        coupleData: state.coupleData
    }
}

export default connect(mapStateToProps, actions)(Cost);