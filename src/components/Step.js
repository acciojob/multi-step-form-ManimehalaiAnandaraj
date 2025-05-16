import React from 'react';

const Step = ({ currentStep, formData, onFormChange, onNext, onPrev, onSubmit }) => {
  return (
    <div>
      {/* Step 1: First Name and Last Name */}
      {currentStep === 1 && (
        <div>
          <input
            id="first_name"
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => onFormChange('firstName', e.target.value)}
          />
          <input
            id="last_name"
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => onFormChange('lastName', e.target.value)}
          />
        </div>
      )}

      {/* Step 2: Cat Model and Price */}
      {currentStep === 2 && (
        <div>
          <input
            id="model"
            type="text"
            placeholder="Cat Model"
            value={formData.model}
            onChange={(e) => onFormChange('model', e.target.value)}
          />
          <input
            id="car_price"
            type="number"
            placeholder="Cat Price"
            value={formData.carPrice}
            onChange={(e) => onFormChange('carPrice', e.target.value)}
          />
        </div>
      )}

      {/* Step 3: Card Information and Expiry Date */}
      {currentStep === 3 && (
        <div>
          <input
            id="card_info"
            type="text"
            placeholder="Card Information"
            value={formData.cardInfo}
            onChange={(e) => onFormChange('cardInfo', e.target.value)}
          />
          <input
            id="expiry_date"
            type="text"
            placeholder="Expiry Date (MM/YY)"
            value={formData.expiryDate}
            onChange={(e) => onFormChange('expiryDate', e.target.value)}
          />
        </div>
      )}

      {/* Navigation Buttons */}
      <div>
        {currentStep > 1 && <button onClick={onPrev}>Previous</button>}
        {currentStep < 3 ? (
          <button onClick={onNext}>Next</button>
        ) : (
          <button onClick={onSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default Step;

