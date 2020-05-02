import React from 'react';
import './InfoBanner.css';
import bankLogo from '../../images/bankLogo.svg';
import Banner from '../Banner/Banner';
import CustomButton from '../CustomButton/CustomButton';

const InfoBanner = () => {
  return (
    <div className="Rectangle">
      <div className="InfoContainer">
        <div className="BannerContainer">
          <Banner text="Getting loans made easy" name="Getting-loans-made-e"></Banner>
          <Banner text="We will help you make your dreams come true." name="We-will-help-you-mak"></Banner>
          <CustomButton text="Get a Loan" name="Get-a-Loan" buttonName="Get-a-Loan-Button"></CustomButton>
        </div>
        <div className="BankLogoContainer">
          <img
            src={bankLogo}
            alt="1"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default InfoBanner;