import React, {Component} from 'react';
import LinearProgress from 'material-ui/LinearProgress';

class QuestionsProgressBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            completed: this.props.questionProgress,
        };
    }

    render() {
        return (
            <LinearProgress mode="determinate" value={this.state.completed} />
        );
    }
}

export default QuestionsProgressBar;