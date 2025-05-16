import React, { useState } from 'react';
import Step from './Step';

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
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    alert('Form submitted successfully!\n' + JSON.stringify(formData, null, 2));
  };

  return (
    <div>
      <Step
        currentStep={currentStep}
        formData={formData}
        onFormChange={handleFormChange}
        onNext={handleNext}
        onPrev={handlePrev}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
