import { useFormContext } from '../formContext';
import Select from 'react-select';
import Down from '../assets/down.svg';
const MySelect = ({ defaultVal, options, handleSelectChange, field }) => {
  const { formData } = useFormContext();
  return (
    <Select
      defaultValue={
        formData[defaultVal]
          ? { value: formData[defaultVal], label: formData[defaultVal] }
          : {
              value: options[0].value,
              label: options[0].label,
            }
      }
      value={options.find(({ value }) => value === field.value)}
      onChange={handleSelectChange}
      options={options}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          height: '69px',
          paddingLeft: '30px',
          outline: state.isFocused ? '1px solid #6b59d3' : '2px solid #ededed',
          transition: 'all .15s ease-in-out',
          borderColor: state.isFocused ? 'transparent' : 'transparent',
          boxShadow: state.isFocused
            ? '2.5px 4.33px 35px rgba(107, 89, 211, 0.169)'
            : '',
          '&:hover': {
            outline: '1px solid #6b59d3',
            boxShadow: '2.5px 4.33px 35px rgba(107, 89, 211, 0.169)',
          },
          '&::after': {
            content: `''`,
            backgroundImage: `url(${Down})`,
            height: '6px',
            width: '10px',
            position: 'absolute',
            right: '34px',
            top: '36px',
          },
        }),
        singleValue: (baseStyles) => ({
          ...baseStyles,
          color: '#959595',
        }),
        indicatorSeparator: (baseStyles) => ({
          ...baseStyles,
          display: 'none',
        }),
        indicatorsContainer: (baseStyles) => ({
          ...baseStyles,
          display: 'none',
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: state.isFocused ? '#6b59d3' : '',
          color: state.isFocused ? 'white' : 'black',
          '&:active': {
            backgroundColor: '#6b59d3',
          },
        }),
      }}
    />
  );
};

export default MySelect;
