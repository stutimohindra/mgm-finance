import React from 'react';
import './App.css';
import InfoBanner from './components/InfoBanner/InfoBanner';
import Services from './components/Services/Services';
import EmiCalculator from './components/EMI/EmiCalculator';
import CustomerReview from './components/CustomerReview/CustomerReview';
import ContactUs from './components/ContactUs/ContactUs';
import HeaderMenuItems from './components/HeaderMenuItems/HeaderMenuItems';


function App() {
  return (
    <div className="App">
      <HeaderMenuItems></HeaderMenuItems>
      <InfoBanner></InfoBanner>
      <Services></Services>
      <EmiCalculator></EmiCalculator>
      <CustomerReview></CustomerReview>
      <ContactUs></ContactUs>
    </div>
  );
}

export default App;
