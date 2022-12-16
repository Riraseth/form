import { useFormContext } from '../formContext';
import { styled } from '@mui/material/styles';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 15,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#EDEDED',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    background: 'linear-gradient(90deg, #544CF9 0%, #814CF9 100%);',
  },
}));

const Header = ({ h1, h3 }) => {
  const { step, formData } = useFormContext();
  const barLength = (step / 5) * 100;

  const navigate = useNavigate();
  useEffect(() => {
    if (formData.service?.length === 0) {
      navigate('/');
    }
  }, []);
  return (
    <header className="header">
      <div className="header__steps">
        <h2 className="header__step">Step {step}</h2>
        <div className="header__progress-bar">
          <p>{step} of 5 Completed</p>
          <BorderLinearProgress variant="determinate" value={barLength} />
        </div>
      </div>
      {h1 && <h1>{h1}</h1>}
      {h3 && <h3>{h3}</h3>}
    </header>
  );
};

export default Header;
