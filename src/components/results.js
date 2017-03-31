import React, {Component} from 'react';
import {connect} from 'react-redux';
import {history} from '../store';



class Results extends Component {
    componentWillMount(){
        console.log('Props on results page: ', this.props);
    }

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

        if (!this.props.plannerData) {
            return (
                <div>
                    Loading....
                </div>
                )
        }

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
        plannerData: state.plannerData.planners,
        active_client: state.coupleData.active_client
    }
}

export default connect(mapStateToProps)(Results);


