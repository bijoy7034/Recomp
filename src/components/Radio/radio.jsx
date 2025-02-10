import PropTypes from "prop-types";
import React from "react";
import "./style.css";

const RecompRadio = ({ label, checked, onChange, disabled, name, value }) => {
  return (
    <label className={`recomp-radio ${disabled ? "disabled" : ""}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className="radio-checkmark"></span>
      {label && <span className="radio-label">{label}</span>}
    </label>
  );
};

RecompRadio.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default RecompRadio;
