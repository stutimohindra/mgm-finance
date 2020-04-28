import React from 'react';
import './CustomButton.css';

const CustomButton = (props) => {
  return (
    <button className={`${props.buttonName}`}>
      <div className={`${props.name}`}>{props.text}</div>
    </button>
  )
}
export default CustomButton;