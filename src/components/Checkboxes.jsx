import { useFormContext } from '../formContext';
const Checkboxes = ({ checkboxes, register }) => {
  const { formData } = useFormContext();
  return (
    <div className="checkboxes-wrapper">
      {checkboxes.map((checkbox) => {
        return (
          <label key={checkbox.id} className="checkbox-container">
            <input
              className="checkbox-input"
              type="checkbox"
              id={checkbox.option}
              {...register(checkbox.option)}
              defaultChecked={formData[checkbox.option]}
              hidden
            />
            <span className="checkbox-checkmark"></span>
            {checkbox.labelText}
          </label>
        );
      })}
    </div>
  );
};

export default Checkboxes;
