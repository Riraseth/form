import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Buttons from './Buttons';
import SimpleRadio from './SimpleRadio';
import { useFormContext } from '../formContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Upload from '../assets/upload.svg';

const Step2 = () => {
  const { setStep, formData, setFormData } = useFormContext();
  const navigate = useNavigate();

  const schema = z.object({
    name: z
      .string()
      .min(1, { message: 'Required' })
      .regex(new RegExp('^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,]{1,20}$')),
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

  const genders = [
    {
      id: '1',
      gender: 'male',
      labelText: 'Male',
    },
    {
      id: '2',
      gender: 'female',
      labelText: 'Female',
    },
  ];

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

  const inputs = [
    {
      id: '1',
      placeholder: 'First and last Name',
      value: 'name',
    },
    {
      id: '2',
      placeholder: 'Email Address',
      value: 'email',
    },
    {
      id: '3',
      placeholder: 'Phone',
      value: 'phone',
    },
  ];

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
          {inputs.map((item) => {
            return (
              <span key={item.id}>
                <input
                  {...register(item.value, { required: true })}
                  placeholder={item.placeholder}
                  type="text"
                  defaultValue={formData[item.value]}
                />
                {errors[item.value]?.message && (
                  <p className="error">{errors[item.value]?.message}</p>
                )}
              </span>
            );
          })}
          {}
        </div>
        <div className="step2__radio-container">
          <h4>Gender</h4>
          <SimpleRadio
            data={genders}
            errors={errors}
            register={register}
            name="gender"
          />
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
