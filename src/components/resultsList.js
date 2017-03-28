import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import styles from './app.css';


const style = {
    img: {
        maxWidth: '300px',
        maxHeight: '300px',
        padding: '10px'
    },
    card: {
        maxWidth: '300px',
        marginBottom: '15px'
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


class ResultsList extends Component {

    saveToProfile(index) {
        console.log('need to save to profile somewhere', index)
    }

    renderPlannerList() {
        return this.props.plannerData.map((planner, index) => {
            return (
                <Card key={index} style={style.card}>
                    <CardTitle title={planner.name} titleStyle={style.cardTitle}/>

                    <CardMedia style={style.img}>
                        <img src={planner.image} />
                    </CardMedia>

                    <CardText style={style.cardText}>
                        {planner.description}
                    </CardText>
                    <CardActions>
                        <FlatButton onTouchTap={this.props.handleClick.bind(this, index)} label="Details"/>
                        <FlatButton labelStyle={style.saveButton} onTouchTap={this.saveToProfile.bind(this, index)} label="Save To Profile"/>
                    </CardActions>
                </Card>
            )
        })

    }

    render() {
        return (
            <div className={styles.resultsTitle}>
                <h3>Planner Results</h3>
                <div className={styles.resultsPlanners}>
                    {this.renderPlannerList()}
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

export default connect(mapStateToProps)(ResultsList);