import React, { Component } from 'react';
import {connect} from 'react-redux';
import QuestionImages from './questionsImages';
import * as actions from '../action/actionCreator';
import { history } from '../store';
import styles from './app.css';


class Questions extends Component {

    constructor() {
        super();
        this.state = {
            pageIndex: 0
        }
    }


    clickImage(pageIndex, imageIndex) {
        let imageValue = this.props.imageData[0][pageIndex][imageIndex].value;
        let category = this.props.imageData[1][pageIndex];
        this.props.updatePrefs(category, imageValue);
        this.increaseImageIndex();
        if (pageIndex === 9) {
            history.push('/cost')
        }

    }

    increaseImageIndex() {
        this.setState({
            pageIndex: ++this.state.pageIndex
        })
    }

    displayImages() {
        return this.props.imageData[0][this.state.pageIndex].map((image, index) => {
            return <QuestionImages key={index}
                                   pageIndex={this.state.pageIndex}
                                   imageIndex={index}
                                   image={image}
                                   clickImage={(pageIndex, imageIndex) => this.clickImage(pageIndex, imageIndex)}
            />
        })
    }

    render() {
        return (
            <div className={`${styles.imagesDiv}`}>
                    {this.displayImages()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        coupleData: state.coupleData,
        imageData: state.imageData
    }
}


export default connect(mapStateToProps, actions)(Questions);

