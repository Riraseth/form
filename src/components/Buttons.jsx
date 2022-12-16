import { useFormContext } from '../formContext';
import { useNavigate } from 'react-router-dom';
import Next from '../assets/next.png';
import Prev from '../assets/prev.png';

const Buttons = () => {
  const { step, setStep } = useFormContext();
  const navigate = useNavigate();
  const handleClick = () => {
    const page = step - 1 > 1 ? `/${step - 1}` : '/';
    setStep(step - 1);
    navigate(page);
  };
  return (
    <>
      <hr className="horizontal-line" />
      <div className="buttons-container">
        {step > 1 && (
          <span className="btn btn--secondary" onClick={handleClick}>
            <img className="btn__img--prev" src={Prev} alt="" /> Back
          </span>
        )}
        <button type="submit" className="btn btn--primary">
          {step === 5 ? 'Submit' : 'Next'}
          <img className="btn__img--next" src={Next} alt="" />
        </button>
      </div>
    </>
  );
};

export default Buttons;
