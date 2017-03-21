import React from 'react';

const QuestionImages = (props) => {
    console.log('props from questionImages', props.image);
    return (
        <div className='col-lg-4 col-md-6 col-xs-12'>
            <img height="200" src={props.image} onClick={props.increaseIndex}/>
        </div>
    )
};

export default QuestionImages;
