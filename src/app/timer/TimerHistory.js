import React from 'react'
import Table from 'App/components/Table/Table'

const TimerHistory = React.memo(function TimerHistory(props){

  let getActualTime = timer => (timer.finished_at.getTime() - timer.started_at.getTime())/1000

  let getFormattedTime = time => `${Math.floor(time / 60)} mins ${time % 60} secs`
  let headers = ['Started at', 'Finished at', 'Initial time', 'Actualt time'];
  return (
    <>
      <h3>Timer history</h3>
      <Table headers={headers}>
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
      </Table>
    </>
  )
})
export default TimerHistory