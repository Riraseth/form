import { forwardRef } from 'react';
import Calendar from '../assets/calendar.svg';
const CustomInput = forwardRef(
  ({ onChange, placeholder, value, id, onClick }, ref) => {
    return (
      <div className="react-datepicker__custom-input">
        <img src={Calendar} alt="" className="react-datepicker__icon" />
        <span className="react-datepicker__line"></span>
        <input
          onChange={onChange}
          value={value}
          id={id}
          onClick={onClick}
          ref={ref}
        />
        <button className="react-datepicker__custom-btn">ADD TIME</button>
      </div>
    );
  }
);

export default CustomInput;
