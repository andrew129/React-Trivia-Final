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
        clearInterval(intervalId)
        intervalId = setInterval(this.decrement, 1000)
    }

    decrement = () => {
        this.setState({seconds: this.state.seconds - 1})
        if (this.state.seconds === 0) {
            this.stop()
            setTimeout(() => {
                this.setState({
                    seconds: 10
                })
            }, 1000)
        
            this.props.changeQuestion(this.state.seconds)
            this.run()
        }
    }

    stop = () => {
        clearInterval(intervalId);
    }

    render() {
        return (
            <p style={{fontSize: 35}}>{this.state.seconds}</p>
        )
    }
}

export default Timer;