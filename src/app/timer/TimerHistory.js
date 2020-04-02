import React from 'react'
import Table from 'App/components/Table'

const TimerHistory = React.memo(function TimerHistory(props){

  let getActualTime = timer => (timer.finished_at.getTime() - timer.started_at.getTime())/1000

  let getFormattedTime = time => `${Math.floor(time / 60)} mins ${time % 60} secs`

  return (
    <table>
      <thead>
        <tr>
          <th>Started at</th>
          <th>Finished at</th>
          <th>Initial time</th>
          <th>Actual time</th>
        </tr>
      </thead>
      <tbody>
        {
          props.timers.map((timer, index) => (
            <tr key={index}>
              <td>{ timer.started_at.toLocaleString() }</td>
              <td>{ timer.finished_at.toLocaleString() }</td>
              <td>{ getFormattedTime(timer.initial_time) } </td>
              <td>{ getFormattedTime(getActualTime(timer)) }</td>
            </tr>
            ))
        }
      </tbody>
    </table>
  )
})
export default TimerHistory