import React, {Component} from 'react';
import {connect} from 'react-redux';
import {history} from '../store';



class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }

    handleClick(index) {
        this.setState({
            index
        });
        const route = '/results/detail';
        history.push(route);

    }

    render() {
        return (
            <div>
                { React.Children.map(this.props.children, child => React.cloneElement(child, {
                    index: this.state.index,
                    handleClick: (index) => this.handleClick(index)
                }))}

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        plannerData: state.plannerData.planners
    }
}

export default connect(mapStateToProps)(Results);


