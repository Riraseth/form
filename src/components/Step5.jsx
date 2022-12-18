import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Header from './Header';
import Buttons from './Buttons';
import CustomLabel from './CustomLabel';
import RadioImg from './RadioImg';
import Checkboxes from './Checkboxes';
import CustomInput from './CustomInput';
import { useFormContext } from '../formContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Unlimited from '../assets/unlimited.svg';
import Limited from '../assets/limited.svg';
const Step5 = () => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;
  const { formData, setFormData } = useFormContext();

  const schema = z.object({
    someMessage3: z.string().min(1, { message: 'Please write something' }),
    semanticCoding2: z.union([z.string(), z.boolean()]).optional(),
    mobileApp2: z.union([z.string(), z.boolean()]).optional(),
    mobileDesign2: z.union([z.string(), z.boolean()]).optional(),
    plan: z
      .string()
      .or(z.null())
      .refine((val) => Boolean(val), {
        message: 'Please pick one',
      }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ resolver: zodResolver(schema) });
  const handleSave = (res) => {
    setFormData((prev) => {
      return {
        ...prev,
        someMessage3: res.someMessage3,
        semanticCoding2: res.semanticCoding2 ? true : false,
        mobileApp2: res.mobileApp2 ? true : false,
        mobileDesign2: res.mobileDesign2 ? true : false,
        plan: res.plan,
        date: dateRange,
      };
    });
  };

  const plans = [
    {
      id: '1',
      img: Unlimited,
      option: 'unlimited',
      labelText: 'Unlimited Plan',
      description:
        'Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu',
    },
    {
      id: '2',
      img: Limited,
      option: 'limited',
      labelText: 'Limited Plan',
      description:
        'Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu',
    },
  ];

  const checkboxes = [
    {
      id: '1',
      option: 'semanticCoding2',
      labelText: 'Semantic coding',
    },
    {
      id: '2',
      option: 'mobileApp2',
      labelText: 'Mobile APP',
    },
    {
      id: '3',
      option: 'mobileDesign2',
      labelText: 'Mobile Design',
    },
  ];

  return (
    <div className="form-container step5">
      <form onSubmit={handleSubmit(handleSave)}>
        <Header
          h1="Complete Final Step"
          h3="Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas
          concluda- turque usu, facete detracto patrioque an per, lucilius
          pertinacia eu vel."
        />
        <Controller
          control={control}
          name={'date'}
          render={({ field }) => (
            <DatePicker
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              dateFormat="MMM dd, yyyy"
              onChange={(e) => {
                setDateRange(e);
                field.onChange(e);
              }}
              customInput={<CustomInput />}
            />
          )}
        />
        <div className="step5__radio-container">
          <RadioImg
            data={plans}
            errors={errors}
            register={register}
            name="plan"
          />
        </div>
        <CustomLabel text="Optimization and Accessibility" />
        <Checkboxes checkboxes={checkboxes} register={register} />
        <textarea
          name="someMessage3"
          id="someMessage3"
          {...register('someMessage3', { required: true })}
          defaultValue={formData.someMessage3}
          placeholder="Some words"
        ></textarea>
        {errors.someMessage3?.message && (
          <p className="error">{errors.someMessage3?.message}</p>
        )}
        <Buttons />
      </form>
    </div>
  );
};

export default Step5;
