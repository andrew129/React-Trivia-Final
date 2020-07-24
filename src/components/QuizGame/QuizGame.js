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
        statement: '',
        color: '',
        intervalStatus: ''
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
        const correctAnswersArray = this.correctAnswers()
        if (correctAnswersArray.includes(answer)) {
            this.setState({
                correctAnswers: this.state.correctAnswers + 1,
                statement: 'Correct!!',
                color: 'green'
            })

            this.checkForEndOfQuiz(this.state.count)
        }
        else {
            this.changeQuestion('Wrong!!')
        }
    }

    changeQuestion = statement => {

        this.setState({
            incorrectAnswers: this.state.incorrectAnswers + 1,
            statement: statement,
            color: 'red'
        })

        this.checkForEndOfQuiz(this.state.count)
    }

    checkForEndOfQuiz = count => {
        if (count === this.state.questions.length - 1) {
            this.setState({
                start: false,
                quizEnd: true,
                intervalStatus: 'done'
            })
        }
        else {
            this.setState({intervalStatus: 'next'})
            setTimeout(() => {
                this.setState({
                    count: this.state.count + 1,
                    statement: '',
                    intervalStatus: ''
                })
            }, 1000)
        }
    }

    handleClickReset = () => {
        this.setState({
            start: true,
            count: 0,
            quizEnd: false,
            correctAnswers: 0,
            incorrectAnswers: 0,
            statement: ''
        })
    }

    render() {
        return (
            <div class='game-section'>
                {(!this.state.start && !this.state.quizEnd) &&
                    <div class='game-initial-container'>
                        <p style={{fontSize: 25, marginLeft: 20}}><strong>Test Your knowledge of Rocks and Minerals with this quiz, you will have ten seconds to answer each question.</strong></p>
                        <Button
                            message={this.state.message}
                            onClick={this.handleStartClick}
                        />
                    </div>
                }
                {(this.state.start && !this.state.quizEnd) &&
                    <div class='game-start-container'>
                        <p style={{marginBottom: 10, fontSize: 25, color: `${this.state.color}`, fontWeight: 'bold'}}>{this.state.statement}</p>
                        <p style={{fontWeight: 'bold', marginBottom: 18, fontSize: 20}}>{this.state.questions[this.state.count].question}</p>
                        <Timer 
                            changeQuestion={this.changeQuestion}
                            intervalStatus={this.state.intervalStatus}
                        />
                        <AnswerContainer
                            answers={this.state.questions[this.state.count].answers}
                            color={this.state.color}
                            onClick={this.handleClickedAnswer}
                        />
                    </div>
                }
                {(this.state.quizEnd && !this.state.start) &&
                    <div class='game-end-container'>
                        <h2>Results</h2>
                        <p style={{fontWeight: 'bold'}}>Correct Answers: {this.state.correctAnswers}</p>
                        <p style={{fontWeight: 'bold'}}>Incorrect Answers: {this.state.incorrectAnswers}</p>
                        <button onClick={this.handleClickReset} class='reset-btn'>Try Again?</button>
                    </div> 
                }
            </div>
        )
    }

}

export default QuizGame;