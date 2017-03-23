import React, {Component} from 'react';
import { history } from '../store';
import {connect} from 'react-redux';
import * as actions from '../action/actionCreator';

class Cost extends Component {

    handleClick() {
        let value = document.forms.budgetForm.options.value;
        this.props.updateCoupleProfile('cost', Number(value));
        if (value) {
            history.push('/')
        }
    }

    render() {
        return (
            <div>
                <h3>Wedding Budget</h3>
                <div className="btn-group">
                    <form name="budgetForm" onClick={this.handleClick.bind(this)}>
                        <label className="btn btn-primary">
                            <input type="radio" name="options" id="option1" value="1"/> $0 - $5000
                        </label>
                        <label className="btn btn-primary">
                            <input type="radio" name="options" id="option2" value="2"/> $5000 - $10,000
                        </label>
                        <label className="btn btn-primary">
                            <input type="radio" name="options" id="option3" value="3"/> $10,000 - $25,000
                        </label>
                        <label className="btn btn-primary">
                            <input type="radio" name="options" id="option4" value="4"/> $25,000 - $50,000
                        </label>
                        <label className="btn btn-primary">
                            <input type="radio" name="options" id="option5" value="5"/> $50,000++
                        </label>
                    </form>
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


