import React from 'react';

let intervalId;

class Timer extends React.Component {
    state = {
        seconds: 10,
    }

    componentDidMount() {
        this.run()
    }

    run = () => {
        this.setState({ seconds: 10 })
        intervalId = setInterval(this.decrement, 1000)
    }

    decrement = () => {
        this.setState({seconds: this.state.seconds - 1})
        if (this.state.seconds === 0) {
            clearInterval(intervalId)
            this.props.changeQuestion("Time's Up")
            setTimeout(() => {
                this.run()
            }, 1000)
        }
        if (this.props.intervalStatus === 'done') {
            clearInterval(intervalId)
        }
        else if (this.props.intervalStatus === 'next') {
            console.log('next')
            clearInterval(intervalId)
            setTimeout(() => {
                this.run() 
            }, 700)
        }
    }

    render() {
        return (
            <p style={{fontSize: 35}}>{this.state.seconds}</p>
        )
    }
}

export default Timer;