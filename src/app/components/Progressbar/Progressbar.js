import React from 'react'
import './Progressbar.css'

export default function Progressbar(props){
  const percents = Math.round(props.percent*100)/100

  return (
    <div className="progressbar mb w-100">
      <div className="progressbar-line">
        <div style={{width: `${percents}%`}}></div>
      </div>
      <label>{Math.round(percents)}%</label>
    </div>  
  )
}