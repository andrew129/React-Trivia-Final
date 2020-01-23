import React from 'react';
import questions from '../../Questions.json';
import Button from '../Button/Button';
import AnswerContainer from '../AnswerContainer/AnswerContainer';
import Timer from '../Timer/Timer';
import './QuizGame.css';

class QuizGame extends React.Component {

    state = {
        questions,
        message: 'Start Quiz',
        start: false,
        count: 0,
        quizEnd: false,
        correctAnswers: 0,
        incorrectAnswers: 0,
        statement: ''
    }

    handleStartClick = () => {
        this.setState({
           start: true 
        })
    }

    correctAnswers = () => {
        const arr = []
        this.state.questions.forEach(question => {
            arr.push(question.correctAnswer)
        })
        return arr
    }

    handleClickedAnswer = answer => {
        console.log(answer)
        const correctAnswersArray = this.correctAnswers()
        console.log(correctAnswersArray)
        this.setState({count: this.state.count + 1})
        if (correctAnswersArray.includes(answer)) {
            this.setState({
                correctAnswers: this.state.correctAnswers + 1,
                statement: 'Correct!!'
            })
        }
        if (!correctAnswersArray.includes(answer)) {
            this.setState({
                incorrectAnswers: this.state.incorrectAnswers + 1,
                statement: 'Wrong!!'
            })
        }
        if (this.state.count === this.state.questions.length - 1) {
            this.setState({
                start: false,
                quizEnd: true
            })
        }
    }

    changeQuestion = () => {
        this.setState({
            count: this.state.count + 1
        })
        if (this.state.count === this.state.questions.length) {
            this.setState({
                start: false,
                quizEnd: true
            })
        }
    }

    handleClickReset = () => {
        this.setState({
            start: true,
            count: 0,
            quizEnd: false,
            correctAnswers: 0,
            incorrectAnswers: 0
        })
    }

    render() {
        return (
            <div class='game-section'>
                {(!this.state.start && !this.state.quizEnd) &&
                    <div class='game-initial-container'>
                        <p style={{fontSize: 18, marginLeft: 20}}><strong>Test Your knowledge of Rocks and Minerals with this quiz, you will have ten seconds to answer each question.</strong></p>
                        <Button
                            message={this.state.message}
                            onClick={this.handleStartClick}
                        />
                    </div>
                }
                {(this.state.start && !this.state.quizEnd) &&
                    <div class='game-start-container'>
                        <p>{this.state.statement}</p>
                        <p style={{fontWeight: 'bold', marginBottom: 18, fontSize: 20}}>{this.state.questions[this.state.count].question}</p>
                        <Timer 
                            changeQuestion={this.changeQuestion}
                        />
                        <AnswerContainer
                            answers={this.state.questions[this.state.count].answers}
                            onClick={this.handleClickedAnswer}
                        />
                    </div>
                }
                {(this.state.quizEnd && !this.state.start) &&
                    <div class='game-end-container'>
                        <h2>Results</h2>
                        <p>Correct Answers: {this.state.correctAnswers}</p>
                        <p>Incorrect Answers: {this.state.incorrectAnswers}</p>
                        <button onClick={this.handleClickReset} class='reset-btn'>Try Again?</button>
                    </div> 
                }
            </div>
        )
    }

}

export default QuizGame;