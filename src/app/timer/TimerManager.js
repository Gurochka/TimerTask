import React, { useState } from 'react'
import InputNumber from 'App/components/InputNumber'

const TimerManager = React.memo(function TimerManager(props){
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(2);

  return (
  <div className="mb">
    <InputNumber placeholder="mins" default={mins} min={0} onChange={setMins}  readOnly={props.isStarted}/> <span className="mr">mins</span>
    
    <InputNumber placeholder="secs" default={secs} min={0} max={60} onChange={setSecs} readOnly={props.isStarted}/> <span className="mr">secs</span>

    { !props.isStarted && 
      <button disabled={!mins && !secs} onClick={() => props.onStart(mins, secs)}> Start </button>
    }
    {
      props.isStarted &&
      <button onClick={props.onToggle}> { props.isPaused ? 'Resume' : 'Pause' } </button>
    }
  </div>
  )
})
export default TimerManager