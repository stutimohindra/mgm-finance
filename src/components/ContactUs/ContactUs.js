import React from 'react';
import Banner from '../Banner/Banner';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="Contact-us-rectangle">
      <Banner text="CONTACT US" name="Contact-us"></Banner>
      <Banner text="186, Powai Plaza A Premises,
      Hiranandani Gardens, Powai, Mumbai - 400076" name="Address"></Banner>
      <Banner text="Phone: 022 6090 9996" name="Phone">
      </Banner>
      <Banner text="Email: contact@loanstreet.in" name="Email">
      </Banner>
      <div className="Line"></div>
      <Banner text="Copyright 2016 . All Rights Reserved. Terms & Conditions" name="Copyright"></Banner>
    </div>
  )
}
export default ContactUs;