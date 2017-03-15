import React from 'react';
import styles from './app.css';

const QuestionImages = (props) => {
    console.log('props from questionImages', props.image);
    return (
        <div className={`col-lg-4 col-md-6 col-xs-12 + ${styles.questionImages}`}>
            <img height="200" src={props.image} onClick={props.increaseIndex}/>
        </div>
    )
};

export default QuestionImages;
