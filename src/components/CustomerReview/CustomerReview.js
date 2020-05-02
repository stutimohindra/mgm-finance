import React from 'react';
import './CustomerReview.css';
import comma from '../../images/comma.svg'
import Carousel from 'react-elastic-carousel'
import CarouselItem from '../CarouselItem/CarouselItem';


const CustomerReview = () => {
  return (
    <div id="customer-review">
      <img
        src={comma}
        alt="1"
      ></img>
      <Carousel itemsToShow={1}>
        <CarouselItem></CarouselItem>
        <CarouselItem></CarouselItem>
        <CarouselItem></CarouselItem>
      </Carousel>
    </div>
  )
}

export default CustomerReview;