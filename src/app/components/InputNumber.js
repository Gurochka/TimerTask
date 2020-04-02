import React from 'react'

export default class InputNumber extends React.Component {
  state = {
    value: this.props.val
  }

  onChangeHandler = e => {
    let value = e.target.value;

    if (value === '') value = '0'

    if (value.length > 0 && /^[0-9]*$/g.test(value)){
      value = parseInt(value, 10);
      if ((this.props.min && value < this.props.min) || (this.props.max && value > this.props.max )) return;
      this.setState({ value }, () => { if (this.props.onChange) this.props.onChange(value) })
    }
  }

  render(){
    return(
      <input type="text" placeholder={this.props.placeholder} value={this.state.value} onChange={this.onChangeHandler} readOnly={this.props.readOnly}/>
      )
  }
}