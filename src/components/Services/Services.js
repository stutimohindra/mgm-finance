import React from 'react';
import './Services.css';
import Banner from '../Banner/Banner';
import ImageContainer from '../ImageContainer/ImageContainer';
import homeLogo from '../../images/homeLogo.svg';
import personalLoanLogo from '../../images/personalLoanLogo.svg';
import loanAgainstProperty from '../../images/loanAgainstProperty.svg'
import educationLoanLogo from '../../images/educationLoanLogo.svg'

const Services = () => {
  return (
    <div id="ServicesContainer">
      <Banner text="What are you looking for ?" name="What-are-you-looking"></Banner>
      <div className="ImageContainer">
        <ImageContainer
          text="Home Loan"
          logo={homeLogo}
          name="FirstLogo"
          bannerName="Logos-Loan">
        </ImageContainer>
        <ImageContainer
          text="Personal Loan"
          logo={personalLoanLogo}
          name="RemainingLogos"
          bannerName="Logos-Loan">
        </ImageContainer>
        <ImageContainer
          text="Loan Against Property"
          logo={loanAgainstProperty}
          name="RemainingLogos"
          bannerName="Logos-Loan">
        </ImageContainer>
        <ImageContainer
          text="Education Loan"
          logo={educationLoanLogo}
          name="RemainingLogos"
          bannerName="Logos-Loan">
        </ImageContainer>
        <Banner text="Our home is certainly the most peaceful and desired corner
         of the world customised according to your needs and tastes. 
         It is the place where celebration of the simplest joy gets doubled. 
         At LoanStreet, we understand the role of your home in your life, 
         thus we ensure active and continual assistance to you in the journey 
         of making your dream a reality. Our expert consultants strive to help you 
         make the best decision on the most lucrative financial deals at the best rate of interests."
          name="Our-home-is-certain"
        ></Banner>
      </div>
    </div>
  )
}

export default Services;