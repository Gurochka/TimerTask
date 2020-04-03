import React, { useState } from 'react'

export default function InputNumber(props){
  const [value, setValue] = useState(props.default);

  let onChangeHandler = e => {
    let newValue = e.target.value;

    if (!newValue) newValue = '0'

    if (newValue.length > 0 && /^[0-9]*$/g.test(newValue)){
      newValue = parseInt(newValue, 10);
      if ((props.min && newValue < props.min) || (props.max && newValue > props.max )) return;
      
      setValue(newValue);
      if (props.onChange) props.onChange(newValue)
    }
  }

  return(
    <input type="text" {...props} value={value} onChange={onChangeHandler} />
  )
}