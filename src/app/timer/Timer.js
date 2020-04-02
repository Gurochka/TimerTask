import React from 'react'
import TimerManager from 'App/timer/TimerManager'
import RunningTimer from 'App/timer/RunningTimer'
import TimerHistory from 'App/timer/TimerHistory'

export default class Timer extends React.Component {
  state = {
    timers: [],
    timer: {},
    isTimerPaused: false
  }
  timerId

  terminateTimer = () => {
    clearInterval(this.timerId);
    this.timerId = null;

    this.setState({
      timers: [...this.state.timers, this.state.timer],
      timer: {}
    })
  }

  updateTimer = () => {
    if (this.state.timer.remaining_time <= 0){
      this.terminateTimer();
      return;
    }
    if (this.state.isTimerPaused){
      this.setState({timer: {...this.state.timer, finished_at: new Date(this.state.timer.finished_at.getTime() + this.state.timer.initial_time*1000) }})
    } else {
      this.setState({ timer: {...this.state.timer, remaining_time: this.state.timer.remaining_time - 1} })
    }
  }

  onStartTimer = (mins, secs) => {
    this.timerId = setInterval(this.updateTimer, 1000)
    let initial_time = mins*60 + secs;

    this.setState({
      timer: {
        initial_time,
        remaining_time: initial_time,
        started_at: new Date(),
        finished_at: new Date((new Date()).getTime() + initial_time*1000)
      }
    })
  }

  onToggleTimer = () => {
    this.setState({ isTimerPaused: !this.state.isTimerPaused })
  }

  componentWillUnmount(){
    this.terminateTimer()
  }

  render(){
    const { timer, timers } = this.state

    return (
      <div className="container">
        <h1>Countdown Timer</h1>
        
        <TimerManager isStarted={!!this.timerId} isPaused={this.state.isTimerPaused} onStart={this.onStartTimer} onToggle={this.onToggleTimer} />
        
        { !!this.timerId && 
          <RunningTimer timer={ timer }/>
        }
        
        { timers.length > 0 && 
          <TimerHistory timers={ timers }/>
        }
      </div>
      )
  }
}