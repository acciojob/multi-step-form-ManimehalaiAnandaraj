import React from 'react';

const Step = ({ currentStep, formData, handleChange, nextStep, prevStep }) => {
  return (
    <div>
      {/* Step 1: Personal Info */}
      {currentStep === 1 && (
        <div id='step1'>
            <h3>Personal Details</h3>
          <div>
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
            
          </div>
          <br></br>
          <div>
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
           
          </div>
        </div>
      )}

      {/* Step 2: Car Details */}
      {currentStep === 2 && (
        <div id='step2'>
            <h3>Car Details</h3>
          <div>
            <label htmlFor="model">Car Model</label>
            <input
              type="text"
              id="model"
              value={formData.model}
              onChange={handleChange}
              required
            />
          </div>
           <br></br>
          <div>
            <label htmlFor="car_price">Car Price ($)</label>
            <input
              type="number"
              id="car_price"
              value={formData.car_price}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      )}

      {/* Step 3: Payment Info */}
      {currentStep === 3 && (
        <div id='step3'>
            <h3>Payment Details</h3>
          <div>
            <label htmlFor="card_info">Card Number</label>
            <input
              type="number"
              pattern=".{12,12}"
              id="card_info"
              value={formData.card_info}
              onChange={handleChange}
              required
            />
          </div>
           <br></br>
          <div>
            <label htmlFor="expiry_date">Expiry Date (MM/YY)</label>
            <input
              type="date"
              id="expiry_date"
              value={formData.expiry_date}
              onChange={handleChange}
              placeholder="MM/YY"
              required
            />
          </div>
        </div>
      )}

      {/* Navigation Controls */}
      <div style={{ marginTop: '20px' }}>
        {currentStep > 1 && (
          <button type="button" onClick={prevStep}>
            Previous
          </button>
        )}
        {currentStep < 3 ? (
          <button type="button" onClick={nextStep}>
            Next
          </button>
        ) : (
          <button type="submit">Submit</button>
        )}
      </div>
    </div>
  );
};

export default Step;