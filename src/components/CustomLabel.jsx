const CustomLabel = ({ img, text }) => {
  return (
    <div className="custom-label">
      {img && <img src={img} alt="" />}
      <h5>{text}</h5>
    </div>
  );
};

export default CustomLabel;
