import React, { useState, useEffect } from 'react'
import InputNumber from 'App/components/InputNumber'

const TimerManager = React.memo(function TimerManager(props){
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(4);

  return (
  <div>
    <InputNumber placeholder="mins" val={mins} min={0} onChange={setMins} />
    
    <InputNumber placeholder="secs" val={secs} min={0} max={60} onChange={setSecs}/>

    { !props.isStarted && 
      <button disabled={mins == 0 && secs == 0} onClick={() => props.onStart(mins, secs)}> Start </button>
    }
    {
      props.isStarted &&
      <button onClick={props.onToggle}> { props.isPaused ? 'Resume' : 'Pause' } </button>
    }
  </div>
  )
})
export default TimerManager