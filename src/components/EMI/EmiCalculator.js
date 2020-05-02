import React, { useState } from 'react';
import './EmiCalculator.css';
import Banner from '../Banner/Banner';
import CustomButton from '../CustomButton/CustomButton';


const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [tenure, setTenure] = useState("");
  const [totalPayment, setTotalPayment] = useState("");

  const calculateEMI = () => {
    setTotalPayment(loanAmount * (1 + (interest / 100) * tenure))
  }

  const getEmiButtonStyle = () => {
    if (loanAmount.length > 0 && interest.length > 0 && tenure.length > 0) {
      return 'pointer'
    }
    return 'not-allowed';
  }

  return (
    <div id="Emi-calculator">
      <Banner name="Know-what-it-takes" text="Know what it takes"></Banner>
      <div className="Buttons-container">
        <button className="EMI-Cal" onClick={calculateEMI} style={{ 'cursor': getEmiButtonStyle() }}>
          <div className="EMI-Calculator-button-text">EMI Calculator</div>
        </button>
        <CustomButton
          name="Loan-Eligibility-Cal-button-text"
          buttonName="Loan-Eligibility-Cal"
          text="Loan Eligibility">
        </CustomButton>
      </div>
      <div className="Input-items">
        <input
          type="number"
          placeholder="Loan Amount"
          className="input"
          value={loanAmount}
          onChange={e => setLoanAmount(e.target.value)}
          maxLength="7" />
        <input
          type="number"
          placeholder="Interest Rate (%)"
          className="input"
          value={interest}
          onChange={e => setInterest(e.target.value)}
          maxLength="2" />
        <input
          type="number"
          placeholder="Tenure (in years)"
          className="input"
          value={tenure}
          onChange={e => setTenure(e.target.value)}
          maxLength="2" />
      </div>
      <div className="Output-container">
        <div>
          <div className="Emi-value Emi-value-loan">Rs.{loanAmount ? loanAmount : 0}</div>
          <div className="Payable">EMI</div>
        </div>
        <div>
          <div className="Emi-value Emi-value-rate">Rs.{totalPayment - loanAmount > 0 ? totalPayment - loanAmount : 0}</div>
          <div className="Payable">Total Interest Payable</div>
        </div>
        <div>
          <div className="Emi-value Emi-value-tenure">Rs.{totalPayment ? totalPayment : 0}</div>
          <div className="Payable">Total Payment</div>
        </div>
      </div>
    </div >
  )
}
export default EmiCalculator;