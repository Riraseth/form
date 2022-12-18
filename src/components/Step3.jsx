import { useForm, useController } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Buttons from './Buttons';
import { useFormContext } from '../formContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import MySelect from './MySelect';
import CustomLabel from './CustomLabel';
import { useState } from 'react';
import Chat2 from '../assets/chat2.svg';

const Step3 = () => {
  const { setStep, formData, setFormData } = useFormContext();
  const navigate = useNavigate();
  const [language, setLanguage] = useState('English');
  const schema = z.object({
    someMessage: z.string().min(1, { message: 'Please write something' }),
    serviceType: z
      .string()
      .or(z.null())
      .refine((val) => Boolean(val), {
        message: 'Please pick one',
      }),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const handleSave = (res) => {
    setFormData((prev) => {
      return {
        ...prev,
        serviceType: res.serviceType,
        language: language,
        someMessage: res.someMessage,
      };
    });
    navigate('/4');
    setStep(4);
  };
  const { field } = useController({ name: 'country', control });

  const selectOptions = [
    { value: 'English', label: 'English' },
    { value: 'Polish', label: 'Polish' },
  ];
  const handleSelectChange = (option) => {
    field.onChange(option.value);
    setLanguage(option.value);
  };

  const services = [
    {
      id: '1',
      option: 'webDesign1',
      labelText: 'Web Design ',
    },
    {
      id: '2',
      option: 'webDesign2',
      labelText: 'Web Design ',
    },
    {
      id: '3',
      option: 'webDesign3',
      labelText: 'Web Design ',
    },
    {
      id: '4',
      option: 'webDesign4',
      labelText: 'Web Design ',
    },
  ];

  return (
    <div className="form-container step3">
      <form onSubmit={handleSubmit(handleSave)}>
        <Header
          h1="What kind of services You Need"
          h3="Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas
          concluda- turque usu, facete detracto patrioque an per, lucilius
          pertinacia eu vel."
        />
        <div className="step3__radio-container">
          {services.map((service) => {
            return (
              <label
                key={service.id}
                htmlFor={service.option}
                className="radio"
              >
                <input
                  {...register('serviceType', { required: true })}
                  type="radio"
                  value={service.option}
                  id={service.option}
                  defaultChecked={formData.serviceType === service.option}
                  hidden
                />
                <span className="checkmark"></span>
                {service.labelText}
              </label>
            );
          })}

          {errors.serviceType?.message && (
            <p className="error">{errors.serviceType?.message}</p>
          )}
        </div>
        <div className="step3__select">
          <p>I want to browse projects in the following languages: </p>
          <MySelect
            defaultVal="language"
            options={selectOptions}
            handleSelectChange={handleSelectChange}
            formData={formData}
            field={field}
          />
        </div>
        <CustomLabel img={Chat2} text="Write something" />
        <textarea
          name="someMessage"
          id="someMessage"
          {...register('someMessage', { required: true })}
          defaultValue={formData.someMessage}
          placeholder="Hi ciestosolution, I noticed your profile and would like to offer you my project. We can discuss any details over chat."
        />
        {errors.someMessage?.message && (
          <p className="error">{errors.someMessage?.message}</p>
        )}
        <Buttons />
      </form>
    </div>
  );
};

export default Step3;
