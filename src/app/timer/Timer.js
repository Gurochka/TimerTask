import React from 'react'
import TimerInitialization from 'App/timer/TimerInitialization'
import RunningTimer from 'App/timer/RunningTimer'
import TimerHistory from 'App/timer/TimerHistory'

export default class Timer extends React.Component {
  state = {
    timers: [],
    timer: {},
    mins: 0,
    secs: 0
  }

  render(){
    return (
      <div className="container">
        <h1>Countdown Timer</h1>
        <TimerInitialization />
        <RunningTimer />
        <TimerHistory />
      </div>
      )
  }
}