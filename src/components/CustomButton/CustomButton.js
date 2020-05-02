import React from 'react';
import './CustomButton.css';

const CustomButton = (props) => {
  const calculateEMI = () => {
    console.log("sjhdjkshjkh")
  }
  return (
    <button className={`${props.buttonName}`} onClick={props.calculateEMI}>
      <div className={`${props.name}`}>{props.text}</div>
    </button>
  )
}
export default CustomButton;