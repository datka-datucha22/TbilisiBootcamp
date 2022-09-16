import React, { Component } from 'react'

export default class Countdown extends Component {
    constructor(props) {
        super();
        this.state = {
            time: props.time,
            minutes: props.time / 60 - 1,
            seconds: 59
        }
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            if (this.state.seconds === 0) {
                this.setState({
                    seconds: 59
                })
                
            } else {
                this.setState({
                    seconds: this.state.seconds-1
                })
            }
        }, 1000)
        this.timerMin = setInterval(() => {
            if (this.state.minutes === 0) {
                this.setState({
                    minutes: 59
                })
            } else {
                this.setState({
                    minutes: this.state.minutes - 1
                })
            }
        }, 60000)
    }
    render() {
        return (
            <div className='countdown'>
                <p>{this.state.minutes.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}:{this.state.seconds.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })} </p>
            </div>
        )
    }
}
