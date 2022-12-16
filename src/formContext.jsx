import { useState, createContext, useContext } from 'react';

const formContext = createContext();

export const FormProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
  });
  console.log(formData);
  return (
    <formContext.Provider
      value={{
        step,
        setStep,
        formData,
        setFormData,
      }}
    >
      {children}
    </formContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(formContext);
};
