import React, {Component} from 'react';
import styles from './app.css';
import * as actions from '../action/actionCreator';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';


const style = {
    width: 300,
    height: 225,
    margin: 10,
};

class QuestionImages extends Component {
    constructor(props) {
        super(props)
    }

    renderImages() {
        const {pageIndex} = this.props;
        const {imageIndex} = this.props;

        return (

                <Paper style={style} zDepth={5}>
                    <img width="300" src={this.props.image.image} onClick={this.props.clickImage.bind(this, pageIndex, imageIndex)}/>
                </Paper>

        )
    }

    render() {
        return (
            this.renderImages()
        )
    }
}

function mapStateToProps(state) {
    return {
        imageData: state.imageData
    }
}

export default connect(mapStateToProps, actions)(QuestionImages);