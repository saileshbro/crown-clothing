import React from "react";
import "./form-input.styles.scss";
const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input {...otherProps} className="form-input" onChange={handleChange} />
      {label ? (
        <label
          className={`form-input-label ${
            otherProps.value.length ? "shrink" : ""
          }`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
export default FormInput;
