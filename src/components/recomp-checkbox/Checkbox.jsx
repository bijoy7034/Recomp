import React from "react";
import "./Checkbox.css";
import PropTypes from "prop-types";

function RecompCheckbox({ label, style, checked, disabled, description, onChange }) {
  return (
    <div className={`recomp-input-wrapper ${disabled ? "disabled" : ""}`} style={style}>
      <input 
        type="checkbox" 
        checked={checked? checked : null} 
        disabled={disabled} 
        onChange={onChange} 
      />
      <div className="label-container">
        <span className="label-text">{label}</span>
        {description && <small className="description-text">{description}</small>}
      </div>
    </div>
  );
}

RecompCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.object,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  description: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default RecompCheckbox;
