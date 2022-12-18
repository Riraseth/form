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
  let btnPadding;
  if (step === 1) {
    btnPadding = 'btn-81';
  }
  if (step === 2 || step === 4) {
    btnPadding = 'btn-68';
  }
  if (step === 3) {
    btnPadding = 'btn-arrow';
  }
  if (step === 5) {
    btnPadding = 'btn-57';
  }
  return (
    <>
      <hr className="horizontal-line" />
      <div className="buttons-container">
        {step === 3 && (
          <span className="btn btn--secondary" onClick={handleClick}>
            {step === 3 && <img className="btn__img--prev" src={Prev} alt="" />}
            Backward
          </span>
        )}
        <button type="submit" className={`btn btn--primary ${btnPadding}`}>
          {step === 3 ? 'Forward' : step === 5 ? 'Submit' : 'Next'}
          {step === 3 && <img className="btn__img--next" src={Next} alt="" />}
        </button>
      </div>
    </>
  );
};

export default Buttons;
