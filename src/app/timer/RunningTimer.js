import React from 'react'
import Progressbar from 'App/components/Progressbar'

export default function RunningTimer(props){
  const { timer } = props
  const mins = Math.floor(timer.remaining_time/60),
    secs = timer.remaining_time % 60;

  const finished_at = new Date((new Date()).getTime() + timer.remaining_time*1000);
  const percent = timer.remaining_time*100/timer.initial_time

  return (
    <div>
      <span>Started at: {timer.started_at.toLocaleString()}</span>
      <input readOnly value={mins}/>
      <input readOnly value={secs} />
      <span>Finished at: {timer.finished_at.toLocaleString()}</span>
      <Progressbar percent={percent}/>
    </div>
    )
}