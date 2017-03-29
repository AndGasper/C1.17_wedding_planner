import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const style = {
    margin: 12,
};

const paperStyle = {
    width: 300,
    backgroundColor: 'white',
    color: 'gray',
    padding: '10px',
    fontSize: '.9em'
};


class Signout extends Component {
    componentWillMount(){
        console.log('logging out:',this.props);
            this.props.signoutClient();
            this.props.signOutPlanner();
    }
    render(){
        return (
            <div>
                <h2>You have signed out, come back soon!</h2>
                <Link to="/"><RaisedButton label="Home" secondary={true} style={style}/></Link>
            </div>
        )
    }
}

export default connect(null, actions)(Signout);