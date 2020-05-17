import React from 'react';
import Banner from '../Banner/Banner';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div id="Contact-us-rectangle">
      <Banner text="CONTACT US" name="Contact-us"></Banner>
      <Banner text="
      Branch 1 : Lakhni Galaxy Chs Ltd, A303,
      Plot No 83, Sector 15 CBD Belapur, Navi Mumbai - 400614
      Branch 2 : 
      Hno 2566A, Mukt Ashram Street,
      Jagat Nagar, Basti Jodelwal, Ludhiana - 141007" name="Address"></Banner>
      <Banner text="Phone: +91 97804 00243" name="Phone">
      </Banner>
      <Banner text="Email: sales.mgmfinance@gmail.com" name="Email">
      </Banner>
      <div className="Line"></div>
      <Banner text="Copyright 2016 . All Rights Reserved. Terms & Conditions" name="Copyright"></Banner>
    </div>
  )
}
export default ContactUs;