import React from 'react';
import './Banner.css';

const Banner = (props) => {
  return (
    <div className={`${props.name}`}>{props.text}</div>
  )
}
export default Banner;