import React from 'react';
import './AnswerContainer.css';

const styles = {
    borderRadius: 20,
    padding: 15,
    cursor: 'pointer',
    fontSize: 16,
    marginBottom: 10,
    '&:hover': {
        background: 'blue',
    }
}

const AnswerContainer = props => {
    //put answer into onclick function to retrieve the answer the user clicked
    const answers = props.answers.map(answer => {
        return <button style={styles} onClick={() => props.onClick(answer)}>{answer}</button>
    })
    return (
        <div className='answer-list'>
            {answers}
        </div>
    )
}

export default AnswerContainer;
