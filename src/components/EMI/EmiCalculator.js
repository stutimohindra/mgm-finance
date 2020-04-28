import React from 'react';
import './EmiCalculator.css';
import Banner from '../Banner/Banner';
import InputLabel from '../InputLabel/InputLabel';
import CustomButton from '../CustomButton/CustomButton';

const EmiCalculator = () => {
  return (
    <div className="Emi-calculator">
      <Banner name="Know-what-it-takes" text="Know what it takes"></Banner>
      <div className="Buttons-container">
        <CustomButton
          name="EMI-Calculator-button-text"
          buttonName="EMI-Cal"
          text="EMI Calculator">
        </CustomButton>
        <CustomButton
          name="Loan-Eligibility-Cal-button-text"
          buttonName="Loan-Eligibility-Cal"
          text="Loan Eligibility">
        </CustomButton>
      </div>
      <div className="Input-items">
        <InputLabel placeholder="Loan Amount" ></InputLabel>
        <InputLabel placeholder="Interest Rate (%)" ></InputLabel>
        <InputLabel placeholder="Tenure (in years)" ></InputLabel>
      </div>
      {/* todo: FIX padding here */}
      <div className="Output-container">
        <div >
          <div className="Emi-value Emi-value-loan">Rs.14680</div>
          <div className="Payable">EMI</div>
        </div>
        <div >
          <div className="Emi-value Emi-value-rate">Rs.14680</div>
          <div className="Payable">Total Interest Payable</div>
        </div>
        <div>
          <div className="Emi-value Emi-value-tenure">Rs.14680</div>
          <div className="Payable">Total Payment</div>
        </div>
      </div>
    </div>
  )
}
export default EmiCalculator;