import React, { Component } from 'react';
import {connect} from 'react-redux';
import QuestionImages from './questionsImages';



class Questions extends Component {

    constructor() {
        super();
        this.state = {
            imagesIndex: 0
        }
    }

    increaseImageIndex() {
        this.setState({
            imagesIndex: ++this.state.imagesIndex
        })
    }

    renderImages() {
        console.log("yay, i'm rendering images...");
        return this.props.imageData[0][this.state.imagesIndex].map((image, index) => {
            return <QuestionImages key={index}
                                   image={image}
                                   increaseIndex={() => this.increaseImageIndex()}
            />
        })
    }

    render() {
        return (
            <div className="container">
                <h3>{this.props.imageData[1][this.state.imagesIndex]}</h3>
                <div className="row">
                    {this.renderImages()}
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


export default connect(mapStateToProps)(Questions);