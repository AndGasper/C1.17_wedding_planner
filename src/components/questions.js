import React, { Component } from 'react';
import {connect} from 'react-redux';
import QuestionImages from './questionsImages';
import * as actions from '../action/actionCreator';


class Questions extends Component {

    constructor() {
        super();
        this.state = {
            pageIndex: 0
        }
    }

    clickImage(pageIndex, imageIndex) {
        this.props.selectImage(pageIndex, imageIndex)
    }

    increaseImageIndex() {
        this.setState({
            pageIndex: ++this.state.pageIndex
        })
    }

    decreaseImageIndex() {
        this.setState({
            pageIndex: --this.state.pageIndex
        })
    }

    submitProfile() {
        console.log('this is the end')
    }


    renderBackButton() {
        if (this.state.pageIndex > 0) {
            return (
                <button onClick={this.decreaseImageIndex.bind(this)} className='btn btn-outline-danger'>Back</button>
            )
        }
    }

    renderNextButton() {
        if (this.state.pageIndex !== 2) {
            return (
                <button onClick={this.increaseImageIndex.bind(this)} className='btn btn-outline-primary'>Next</button>
            )
        }
        else {
            return (
                <button onClick={this.submitProfile.bind(this)} className='btn btn-outline-primary'>Submit</button>
            )
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
            <div className="container">
                <h3>{this.props.imageData[1][this.state.pageIndex]}</h3>
                <div className="row">
                    {this.displayImages()}
                </div>
                {this.renderBackButton()}
                {this.renderNextButton()}
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