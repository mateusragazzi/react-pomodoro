import React, { Component } from 'react';

export default class Buttons extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.start}>Start</button>
                <button onClick={this.props.reset}>Reset</button>
            </div>
        )
    }
}