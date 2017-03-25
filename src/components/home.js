import React, { Component } from 'react';
import styles from './app.css';
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

class Home extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <div className={`${styles.homePage}`} >
                    <div>
                        <div className={`${styles.homeText}`}>
                            <Paper zDepth={2} style={paperStyle}>
                                <p>
                                    Here at Matchromonie we aim to simplify planning your ideal wedding.
                                    All it takes is five minutes of your time and we will find your wedding planner.
                                </p>
                                <p>
                                    Don't want a wedding planner? No problem.
                                    You can still use our site to help plan your needs.
                                </p>
                                <p>
                                    How does it work? Instead of answering a bunch of forms we will show you an arrangement of pictures
                                    and you decided which picture best represents how you imagine your wedding. No longer do you need to
                                    browse multiple sites, searching for multiple wedding planners, and answering multiple boring forms,
                                    trying to put dreams into words.
                                </p>
                            </Paper>
                            <div>
                                <Link to="/questions"><RaisedButton label="Get Started" secondary={true} style={style}/></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Home;