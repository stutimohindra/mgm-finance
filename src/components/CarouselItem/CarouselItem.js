import React from 'react';
import Banner from '../Banner/Banner';
import customer from '../../images/customer.png'

const CarouselItem = () => {
  return (
    <div>
      <Banner text="LoanStreet has done Three Mortgage Loans
    for us and have been Fantastic on Deliverance and Over All Experience. 
    They Gave us an Opportunity to Choose the Best Fit Lender, 
    hassle Free documentation, Best ROI, and after disbursement Support. 
    For Us, Choice is LoanStreet and 
    then we can have best of the World, Timing & Deal."
        name="LoanStreet-has-done"
      ></Banner>
      <img
        style={{ 'paddingTop': '16px' }}
        src={customer}
        alt="1"
      ></img>
      <Banner text="Sakshi Acharya" name="customer-review-text"></Banner>
    </div>
  )
}
export default CarouselItem;