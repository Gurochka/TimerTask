import React from 'react'

export default (props) => (
  <p>ProgressBar, {Math.round(props.percent*100)/100}%</p>
  )