import React from 'react';
import './InputLabel.css';

const InputLabel = (props) => {
  return (
    <input type="text" placeholder={props.placeholder} className="input" />
  )
}
export default InputLabel;