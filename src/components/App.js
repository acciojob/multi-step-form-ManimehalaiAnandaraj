import React, { useState } from 'react';

function Step({ currentStep, formData, onFormDataChange, onNext, onPrev, onSubmit }) {
  return (
    <div>
      {currentStep === 1 && (
        <div>
          <input
            id="first_name"
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => onFormDataChange('firstName', e.target.value)}
          />
          <input
            id="last_name"
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => onFormDataChange('lastName', e.target.value)}
          />
        </div>
      )}
      {currentStep === 2 && (
        <div>
          <input
            id="model"
            type="text"
            placeholder="Car Model"
            value={formData.model}
            onChange={(e) => onFormDataChange('model', e.target.value)}
          />
          <input
            id="car_price"
            type="number"
            placeholder="Car Price"
            value={formData.carPrice}
            onChange={(e) => onFormDataChange('carPrice', e.target.value)}
          />
        </div>
      )}
      {currentStep === 3 && (
        <div>
          <input
            id="card_info"
            type="text"
            placeholder="Card Information"
            value={formData.cardInfo}
            onChange={(e) => onFormDataChange('cardInfo', e.target.value)}
          />
          <input
            id="expiry_date"
            type="text"
            placeholder="Expiry Date"
            value={formData.expiryDate}
            onChange={(e) => onFormDataChange('expiryDate', e.target.value)}
          />
        </div>
      )}
      <div>
        {currentStep > 1 && (
          <button onClick={onPrev}>Previous</button>
        )}
        {currentStep < 3 ? (
          <button onClick={onNext}>Next</button>
        ) : (
          <button onClick={onSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
}

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    model: '',
    carPrice: '',
    cardInfo: '',
    expiryDate: '',
  });

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFormDataChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Here you can handle form submission, e.g., send data to an API
    alert('Form submitted successfully!');
  };

  return (
    <div>
      <Step
        currentStep={currentStep}
        formData={formData}
        onFormDataChange={handleFormDataChange}
        onNext={handleNext}
        onPrev={handlePrev}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
