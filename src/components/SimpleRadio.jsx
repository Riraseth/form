import { useFormContext } from '../formContext';

const SimpleRadio = ({ data, errors, register, name }) => {
  const { formData } = useFormContext();
  return (
    <>
      {data.map((item) => {
        return (
          <label key={item.id} htmlFor={item.gender} className="simple-radio">
            <input
              {...register('gender', { required: true })}
              type="radio"
              value={item.gender}
              id={item.gender}
              defaultChecked={formData[name] === item.gender}
              hidden
            />
            <span className="simple-radio__checkmark"></span>
            {item.labelText}
          </label>
        );
      })}
      {errors[name]?.message && (
        <p className="error">{errors.gender?.message}</p>
      )}
    </>
  );
};

export default SimpleRadio;
