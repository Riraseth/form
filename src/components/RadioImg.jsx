import { useFormContext } from '../formContext';
const RadioImg = ({ data, name, errors, register }) => {
  const { formData } = useFormContext();
  return (
    <>
      <div className="img-radio">
        {data.map((item) => {
          return (
            <label
              key={item.id}
              htmlFor={item.option}
              className="img-radio__item"
            >
              <img src={item.img} alt="" />
              {item.labelText}
              {item.description && (
                <span className="img-radio__description">
                  {item.description}
                </span>
              )}
              <input
                {...register(name, { required: true })}
                type="radio"
                value={item.option}
                id={item.option}
                hidden
                defaultChecked={formData[name] === item.option}
              />
              <span className="img-radio__checkmark"></span>
            </label>
          );
        })}
      </div>
      {errors && (
        <div className="error">{errors[name] && 'This field is required'}</div>
      )}
    </>
  );
};

export default RadioImg;
