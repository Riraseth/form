import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Buttons from './Buttons';
import { useFormContext } from '../formContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Upload from '../assets/upload.svg';

const Step2 = () => {
  const { setStep, formData, setFormData } = useFormContext();
  const navigate = useNavigate();

  const schema = z.object({
    name: z.string().min(1, { message: 'Required' }),
    email: z.string().email(),
    phone: z.string().min(9).max(13, {
      message: 'Incorrect number',
    }),
    gender: z
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
  } = useForm({ resolver: zodResolver(schema) });
  const handleSave = (res) => {
    setFormData((prev) => {
      return {
        ...prev,
        name: res.name,
        email: res.email,
        phone: res.phone,
        gender: res.gender,
      };
    });
    navigate('/3');
    setStep(3);
  };
  return (
    <div className="form-container step2">
      <form onSubmit={handleSubmit(handleSave)}>
        <Header
          h1="What kind of services you are quiz?"
          h3="Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas
          concludaturque usu, facete detracto patrioque an per, lucilius
          pertinacia eu vel."
        />
        <div className="step2__inputs-container">
          <input
            {...register('name', { required: true })}
            placeholder="First and last Name"
            type="text"
            defaultValue={formData.name}
          />
          {errors.name?.message && (
            <p className="error">{errors.name?.message}</p>
          )}
          <input
            {...register('email', { required: true })}
            placeholder="Email Address"
            type="text"
            defaultValue={formData.email}
          />
          {errors.email?.message && (
            <p className="error">{errors.email?.message}</p>
          )}
          <input
            {...register('phone', { required: true })}
            placeholder="Phone"
            type="text"
            defaultValue={formData.phone}
          />
          {errors.phone?.message && (
            <p className="error">{errors.phone?.message}</p>
          )}
        </div>
        <div className="step2__radio-container">
          <h4>Gender</h4>
          <label htmlFor="male" className="step2__radio">
            <input
              {...register('gender', { required: true })}
              type="radio"
              value="male"
              className="form-check-input"
              id="male"
              defaultChecked={formData.gender === 'male'}
              hidden
            />
            <span className="step2__checkmark"></span>
            Male
          </label>
          <label htmlFor="female" className="step2__radio">
            <input
              {...register('gender', { required: true })}
              type="radio"
              value="female"
              className="form-check-input"
              id="female"
              defaultChecked={formData.gender === 'female'}
              hidden
            />
            <span className="step2__checkmark"></span>
            Female
          </label>
          {errors.gender?.message && (
            <p className="error">{errors.gender?.message}</p>
          )}
        </div>
        <div className="step2__upload-container">
          <h4>Upload Documents</h4>
          <div className="step2__upload-wrapper">
            <label htmlFor="upload" className="step2__upload">
              <img src={Upload} alt="" />
              <p>
                ( File accepted: pdf. doc/ docx - Max file size : 150kb for demo
                limit )
              </p>
              <input type="file" name="upload" id="upload" hidden />
              <span>Upload The Documents</span>
            </label>
          </div>
        </div>
        <Buttons />
      </form>
    </div>
  );
};

export default Step2;
