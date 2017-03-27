import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './app.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';



const style = {
    img: {

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
    }

};


class Results extends Component {

    renderPlanners() {
        return this.props.plannerData.map((planner, index) => {
            return (
                <Card key={index} style={style.card}>
                    <CardMedia>
                        <img src={planner.image} style={style.img}/>
                    </CardMedia>
                    <CardTitle title={planner.name} titleStyle={style.cardTitle}/>
                    <CardText style={style.cardText}>
                        {planner.description}
                    </CardText>
                    <CardActions>
                        <FlatButton label="Contact" />
                        <FlatButton label="Save To Profile" />
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
                    {this.renderPlanners()}
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

export default connect(mapStateToProps)(Results);


