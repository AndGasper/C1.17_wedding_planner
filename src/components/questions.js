import React, { Component } from 'react';
import {connect} from 'react-redux';
import QuestionImages from './questionsImages';
import * as actions from '../action/actionCreator';
import { history } from '../store';
import styles from './app.css';

import LinearProgress from 'material-ui/LinearProgress';

const style = {
    progressBar: {
        maxWidth: '1200px'

    }
};

class Questions extends Component {

    constructor() {
        super();
        this.state = {
            pageIndex: 0,
            progress: 0
        }
    }

    clickImage(pageIndex, imageIndex) {

        this.setState({
            progress: this.state.progress += 10
        });

        let imageValue = this.props.imageData[0][pageIndex][imageIndex].value;
        let category = this.props.imageData[1][pageIndex];
        this.props.updatePrefs(category, imageValue);

        if (this.state.pageIndex === 9) {
            setTimeout(function() {
                history.push('/cost');
                return false;
            }, 1500)
        }
        else {
            this.setState({
                pageIndex: ++this.state.pageIndex,
            });
        }
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
            <div className={`${styles.imagesTitle}`}>
                <h4>Click the image that best represents your ideal wedding</h4>

                <LinearProgress style={style.progressBar} color="purple" mode="determinate" value={this.state.progress} />


                <div className={`${styles.imagesDiv}`}>
                    {this.displayImages()}
                </div>
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
