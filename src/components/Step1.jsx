import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Buttons from './Buttons';
import Diagram from '../assets/diagram.png';
import Switch from '../assets/switch.png';
import Development from '../assets/development.png';
import { useFormContext } from '../formContext';

const Step1 = () => {
  const { setStep, formData, setFormData } = useFormContext();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSave = (res) => {
    setFormData((prev) => {
      return {
        ...prev,
        service: res.services,
      };
    });
    navigate('/2');
    setStep(2);
  };
  return (
    <div className="form-container step1">
      <form onSubmit={handleSubmit(handleSave)}>
        <Header
          h1="What kind of Services You need?"
          h3="Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas
          concludaturque usu, facete detracto patrioque an per, lucilius
          pertinacia eu vel."
        />
        <div className="step1__radio-container">
          <label htmlFor="corporate" className="step1__radio">
            <img src={Diagram} alt="" />
            Corporate Services
            <input
              {...register('services', { required: true })}
              type="radio"
              value="corporate"
              className="form-check-input"
              id="corporate"
              hidden
              defaultChecked={formData.service === 'corporate'}
            />
            <span className="step1__checkmark"></span>
          </label>
          <label htmlFor="freelancing" className="step1__radio">
            <img src={Switch} alt="" />
            Freelancing Services
            <input
              {...register('services', { required: true })}
              type="radio"
              value="freelancing"
              className="form-check-input"
              id="freelancing"
              hidden
              defaultChecked={formData.service === 'freelancing'}
            />
            <span className="step1__checkmark"></span>
          </label>
          <label htmlFor="development" className="step1__radio">
            <img src={Development} alt="" />
            Development
            <input
              {...register('services', { required: true })}
              type="radio"
              value="development"
              className="form-check-input"
              id="development"
              hidden
              defaultChecked={formData.service === 'development'}
            />
            <span className="step1__checkmark"></span>
          </label>
        </div>
        <div className="error">
          {errors.services?.type === 'required' && 'This field is required'}
        </div>
        <Buttons />
      </form>
    </div>
  );
};

export default Step1;
