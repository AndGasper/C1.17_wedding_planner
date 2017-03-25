import React, {Component} from 'react';
import { history } from '../store';
import {connect} from 'react-redux';
import * as actions from '../action/actionCreator';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import styles2 from './app.css';



const styles = {
    radioButton: {
        marginBottom: 16
    },
    label: {
        color: 'white',
        float: 'left'
    },
    group: {
        width: '75%'
    },
    outsideDiv: {
        width: '75%'
    }

};


class Cost extends Component {

    handleClick() {

    }

    render() {
        return (
            <div style={styles.outsideDiv}>
                <h3>Wedding Budget</h3>
                <div className={`${styles2.imagesDiv}`}>
                    <RadioButtonGroup onChange={this.handleClick()} name="budgetForm" defaultSelected="not_light" style={styles.group}>
                        <RadioButton
                            value="1"
                            label="$0 - $5000"
                            labelStyle={styles.label}
                            checkedIcon={<ActionFavorite />}
                            uncheckedIcon={<ActionFavoriteBorder />}
                            style={styles.radioButton}

                        />
                        <RadioButton
                            value="2"
                            label="$5000 - $10,000"
                            labelStyle={styles.label}
                            checkedIcon={<ActionFavorite />}
                            uncheckedIcon={<ActionFavoriteBorder />}
                            style={styles.radioButton}
                        />
                        <RadioButton
                            value="3"
                            label="$10,000 - $25,000"
                            labelStyle={styles.label}
                            checkedIcon={<ActionFavorite />}
                            uncheckedIcon={<ActionFavoriteBorder />}
                            style={styles.radioButton}
                        />
                        <RadioButton
                            value="4"
                            label="$25,000 - $50,000"
                            labelStyle={styles.label}
                            checkedIcon={<ActionFavorite />}
                            uncheckedIcon={<ActionFavoriteBorder />}
                            style={styles.radioButton}
                        />
                        <RadioButton
                            value="5"
                            label="$50,000"
                            labelStyle={styles.label}
                            checkedIcon={<ActionFavorite />}
                            uncheckedIcon={<ActionFavoriteBorder />}
                            style={styles.radioButton}
                        />
                    </RadioButtonGroup>
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




{/*<h3>Wedding Budget</h3>*/}
{/*<div className="btn-group">*/}
    {/*<form name="budgetForm" onClick={this.handleClick.bind(this)}>*/}
{/*<label className="btn btn-primary">*/}
    {/*<input type="radio" name="options" id="option1" value="1"/> $0 - $5000*/}
    {/*</label>*/}
    {/*<label className="btn btn-primary">*/}
    {/*<input type="radio" name="options" id="option2" value="2"/> $5000 - $10,000*/}
{/*</label>*/}
{/*<label className="btn btn-primary">*/}
    {/*<input type="radio" name="options" id="option3" value="3"/> $10,000 - $25,000*/}
{/*</label>*/}
{/*<label className="btn btn-primary">*/}
    {/*<input type="radio" name="options" id="option4" value="4"/> $25,000 - $50,000*/}
{/*</label>*/}
{/*<label className="btn btn-primary">*/}
    {/*<input type="radio" name="options" id="option5" value="5"/> $50,000++*/}
{/*</label>*/}
{/*</form>*/}
{/*</div>*/}

