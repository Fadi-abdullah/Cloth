import './FormInput.styles.scss';
const FormInput = ({ label, ...inputProps }) => {
  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...inputProps} />
    </div>
  );
};
export default FormInput;
