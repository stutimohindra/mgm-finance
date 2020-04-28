import React from 'react';
import Banner from '../Banner/Banner';
import './ImageContainer.css';

const ImageContainer = (props) => {
  return (
    <div className={`${props.name}`}> 
      <img
        src={props.logo}
        alt=""
      ></img>
      <Banner text={props.text} name="Logos-Loan"></Banner>
    </div>
  )

}
export default ImageContainer;