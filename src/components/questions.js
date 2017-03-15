import React, { Component } from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';


class Questions extends Component {
    render() {
        return (
            <div>
                <h2>Questions Page</h2>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div>
                    Image Questions Will be Added here
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


export default connect(mapStateToProps)(Questions);