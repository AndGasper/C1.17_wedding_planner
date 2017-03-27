import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './app.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {history} from '../store';


const styleDetail = {
    img: {
        maxWidth: '600px',
        maxHeight: '600px',
    },
    card: {
        maxWidth: '600px',
        marginBottom: '15px',
    },
    cardTitle: {
        fontSize: '1em'
    },
    cardText: {
        fontSize: '.8em',
        color: 'gray'
    },
    saveButton: {
        color: 'green'
    }

};

class PlannerDetail extends Component {

    handleClick() {
        history.push('/results')
    }

    saveToProfile(index) {
        console.log('need to save to profile somewhere', index)
    }

    render() {

        const index = this.props.index;

        return (
            <div className={styles.plannerTitle}>
                <h3>{this.props.plannerData[index].name}</h3>
                <div className={styles.resultsPlanners}>
                    <Card key={index} style={styleDetail.card}>
                        <CardMedia style={styleDetail.img}>
                            <img src={this.props.plannerData[index].image} />
                        </CardMedia>
                        <CardText style={styleDetail.cardText}>
                            <p>{this.props.plannerData[index].address}</p>
                            <p>{this.props.plannerData[index].email}</p>
                            <p>{this.props.plannerData[index].phoneNumber}</p>
                            <p>{this.props.plannerData[index].description}</p>
                        </CardText>
                        <CardActions>
                            <FlatButton onTouchTap={this.handleClick} label="Back"/>
                            <FlatButton labelStyle={styleDetail.saveButton} onTouchTap={this.saveToProfile.bind(this, index)} label="Save To Profile"/>
                        </CardActions>
                    </Card>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        plannerData: state.plannerData.planners
    }
}

export default connect(mapStateToProps)(PlannerDetail);
