import React from 'react'

export default (props) => {
  return (
  <p>ProgressBar, {Math.round(props.percent*100)/100}%</p>
  )
}