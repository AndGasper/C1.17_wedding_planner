import React, { Component } from 'react';
import {connect} from 'react-redux';
import QuestionImages from './questionsImages';


class Questions extends Component {

    renderImages() {
        console.log("yay, i'm rendering images...");
        return this.props.imageData[0].map((image, index) => {
            return <QuestionImages key={index}
                                   image={image}
            />
        })
    }

    render() {
        return (
            <div className="container">
                <h3>Music</h3>
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