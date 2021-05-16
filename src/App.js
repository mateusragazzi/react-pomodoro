import React, { Component } from 'react'
import Clock from './components/Clock/Clock'
import Buttons from './components/Buttons/Buttons'
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isWorking: true,
      activity: "Work",
      timeLeft: Number.parseInt(5, 10) * 60,
      interval: null
    }

    this.decreaseTime = this.decreaseTime.bind(this);
    this.start = this.start.bind(this);
    this.reset = this.reset.bind(this);
    this.checkState = this.checkState.bind(this);
  }

  checkState() {
    if (this.state.timeLeft == 0) {
      this.setState({
        activity: this.state.isWorking ? "Fun!" : "Work",
        isWorking: !this.state.isWorking,
        timeLeft: Number.parseInt(1, 10) * 60,
      })
    }
  }

  decreaseTime() {
    this.setState({
      timeLeft: this.state.timeLeft - 1
    })
  }

  start() {
    this.setState({
      interval: setInterval(() => {
        this.checkState()
        this.decreaseTime()
      }, 1000)
    })
  }

  reset() {
    this.setState({
      isWorking: true,
      activity: "Work",
      timeLeft: Number.parseInt(5, 10) * 60,
      interval: null
    })

    clearInterval(this.state.interval)
  }

  render() {
    return (
      <div>
        <main>
          <Clock timeLeft={this.state.timeLeft} activity={this.state.activity} />
          <Buttons start={this.start} reset={this.reset} />
        </main>
      </div>
    );
  }
}