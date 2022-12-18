import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Buttons from './Buttons';
import Diagram from '../assets/diagram.png';
import Switch from '../assets/switch.png';
import Development from '../assets/development.png';
import { useFormContext } from '../formContext';
import RadioImg from './RadioImg';

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
        service: res.service,
      };
    });
    navigate('/2');
    setStep(2);
  };

  const services = [
    {
      id: '1',
      img: Diagram,
      option: 'corporate',
      labelText: 'Corporate Services',
    },
    {
      id: '2',
      img: Switch,
      option: 'freelancing',
      labelText: 'Freelancing Services',
    },
    {
      id: '3',
      img: Development,
      option: 'development',
      labelText: 'Development',
    },
  ];

  return (
    <div className="form-container step1">
      <form onSubmit={handleSubmit(handleSave)}>
        <Header
          h1="What kind of Services You need?"
          h3="Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas
          concludaturque usu, facete detracto patrioque an per, lucilius
          pertinacia eu vel."
        />
        <div className="step1__radio-wrapper">
          <RadioImg
            data={services}
            errors={errors}
            register={register}
            name="service"
          />
        </div>
        <Buttons />
      </form>
    </div>
  );
};

export default Step1;
