import React from 'react'
import Progressbar from 'App/components/Progressbar/Progressbar'
import './RunningTimer.css'

export default function RunningTimer(props){
  const { timer } = props
  const mins = Math.floor(timer.remaining_time/60),
    secs = timer.remaining_time % 60;

  const percent = 100 - timer.remaining_time*100/timer.initial_time

  return (
    <div className="w-50">
      <div className="running-timer">
        <div className="text-muted text-small">
          <div>Started at: </div>
          {timer.started_at.toLocaleString()}
        </div>

        <div className="running-timer-block">
          <div className="mb">{mins}</div>
          <small>mins</small>
        </div>
        
        <div className="running-timer-block">
          <div className="mb">{secs}</div>
          <small>secs</small>
        </div>
        
        <div className="text-muted text-small">
          <div>Would be finished at: </div>
          {timer.finished_at.toLocaleString()}
        </div>
      </div>
      <Progressbar percent={percent}/>
    </div>
    )
}