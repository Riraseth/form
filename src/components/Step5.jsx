import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Buttons from './Buttons';
import CustomLabel from './CustomLabel';
import { useFormContext } from '../formContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Unlimited from '../assets/unlimited.svg';
import Limited from '../assets/limited.svg';
const Step5 = () => {
  const { setStep, formData, setFormData } = useFormContext();
  const navigate = useNavigate();

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
    navigate('/5');
    setStep(5);
  };
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <div className="form-container step3">
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
            />
          )}
          rules={{
            required: `The  field is required`,
          }}
        />
        <div className="step5__radio-container">
          <label htmlFor="unlimited" className="step5__radio">
            <img src={Unlimited} alt="" />
            Unlimited Plan
            <input
              {...register('plan', { required: true })}
              type="radio"
              value="unlimited"
              className="form-check-input"
              id="unlimited"
              defaultChecked={formData.plan === 'unlimited'}
            />
            <span className="step5__checkmark"></span>
          </label>
          <label htmlFor="limited" className="step5__radio">
            <img src={Limited} alt="" />
            Freelancing Services
            <input
              {...register('plan', { required: true })}
              type="radio"
              value="limited"
              className="form-check-input"
              id="limited"
              defaultChecked={formData.plan === 'limited'}
            />
            <span className="step5__checkmark"></span>
          </label>
        </div>
        <CustomLabel text="Optimization and Accessibility" />
        <div className="step5__additional-services checkboxes-wrapper">
          <label className="step5__checkbox-container checkbox-container">
            <input
              className="checkbox-input"
              type="checkbox"
              id="semanticCoding2"
              {...register('semanticCoding2')}
              defaultChecked={formData.semanticCoding2}
              hidden
            />
            <span className="checkmark"></span>
            Semantic coding
          </label>
          <label className="step5__checkbox-container checkbox-container">
            <input
              className="checkbox-input"
              type="checkbox"
              id="mobileApp2"
              {...register('mobileApp2')}
              defaultChecked={formData.mobileApp2}
              hidden
            />
            <span className="checkmark"></span>
            Mobile APP
          </label>
          <label className="step5__checkbox-container checkbox-container">
            <input
              className="checkbox-input"
              type="checkbox"
              id="mobileDesign2"
              {...register('mobileDesign2')}
              defaultChecked={formData.mobileDesign2}
              hidden
            />
            <span className="checkmark"></span>
            Mobile Design
          </label>
        </div>
        <textarea
          name="someMessage3"
          id="someMessage3"
          cols="30"
          rows="10"
          {...register('someMessage3', { required: true })}
          defaultValue={formData.someMessage3}
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
