import React, { Component } from 'react';

const formatTime = (timeLeft) => {
    let minute = Math.floor(timeLeft / 60);
    if (minute < 10) minute = '0' + minute;

    let second = timeLeft - 60 * minute;
    if (second < 10) second = '0' + second;

    return `${minute}:${second}`;
}

export default class Clock extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.activity}</h2>
                <p>{formatTime(this.props.timeLeft)}</p>
            </div>
        )
    }
}