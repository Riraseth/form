import { useForm, useController } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Buttons from './Buttons';
import { useFormContext } from '../formContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import MySelect from './MySelect';
import CustomLabel from './CustomLabel';
import Checkboxes from './Checkboxes';
import { useState } from 'react';
import Budget from '../assets/budget.svg';
import Chat from '../assets/chat.svg';
import Chat2 from '../assets/chat2.svg';

const Step4 = () => {
  const { setStep, formData, setFormData } = useFormContext();
  const navigate = useNavigate();
  const [budget, setBudget] = useState('$390-600');
  const [support, setSupport] = useState('No support');

  const schema = z.object({
    someMessage2: z.string().min(1, { message: 'Please write something' }),
    semanticCoding: z.union([z.string(), z.boolean()]).optional(),
    mobileApp: z.union([z.string(), z.boolean()]).optional(),
    mobileDesign: z.union([z.string(), z.boolean()]).optional(),
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
        someMessage2: res.someMessage2,
        budget: budget,
        support: support,
        semanticCoding: res.semanticCoding ? true : false,
        mobileApp: res.mobileApp ? true : false,
        mobileDesign: res.mobileDesign ? true : false,
      };
    });
    navigate('/5');
    setStep(5);
  };

  const { field } = useController({ name: 'country', control });

  const budgetOptions = [
    { value: '$390-600', label: '$390-600' },
    { value: '$600-900', label: '$600-900' },
  ];
  const supportOptions = [
    { value: 'No support', label: 'No support' },
    { value: '2 to 6 months', label: '2 to 6 months' },
    { value: '6 to 12 months', label: '6 to 12 months' },
  ];

  const handleBudgetChange = (e) => {
    field.onChange(e.value);
    setBudget(e.value);
  };
  const handleSupportChange = (e) => {
    field.onChange(e.value);
    setSupport(e.value);
  };

  const checkboxes = [
    {
      id: '1',
      option: 'semanticCoding',
      labelText: 'Semantic coding',
    },
    {
      id: '2',
      option: 'mobileApp',
      labelText: 'Mobile APP',
    },
    {
      id: '3',
      option: 'mobileDesign',
      labelText: 'Mobile Design',
    },
  ];

  return (
    <div className="form-container step4">
      <form onSubmit={handleSubmit(handleSave)}>
        <Header
          h1="What kind of services you are quiz?"
          h3="Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas
          concludaturque usu, facete detracto patrioque an per, lucilius
          pertinacia eu vel."
        />
        <div className="step4__select">
          <CustomLabel img={Budget} text="Budget" />
          <MySelect
            defaultVal="budget"
            options={budgetOptions}
            handleSelectChange={handleBudgetChange}
            formData={formData}
            field={field}
          />
        </div>
        <div className="step4__select">
          <CustomLabel img={Chat} text="Required Support" />
          <MySelect
            defaultVal="support"
            options={supportOptions}
            handleSelectChange={handleSupportChange}
            formData={formData}
            field={field}
          />
        </div>

        <CustomLabel text="Optimization and Accessibility" />
        <Checkboxes checkboxes={checkboxes} register={register} />
        <CustomLabel img={Chat2} text="Write Somthing note" />
        <textarea
          name="someMessage2"
          id="someMessage2"
          {...register('someMessage2', { required: true })}
          defaultValue={formData.someMessage2}
          placeholder="Hi ciestosolution, I noticed your profile and would like to offer you my project. We can discuss any details over chat."
        ></textarea>
        {errors.someMessage2?.message && (
          <p className="error">{errors.someMessage2?.message}</p>
        )}
        <Buttons />
      </form>
    </div>
  );
};

export default Step4;
