import PropTypes from "prop-types";
import React from "react";
import "./style.css";

const RecompSwitch = ({ checked, onChange, disabled, size }) => {
  return (
    <label className={`recomp-switch ${size} ${disabled ? "disabled" : ""}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={!disabled ? onChange : undefined}
        disabled={disabled}
      />
      <span className="slider">
        <span className="slider-label"></span>
      </span>
    </label>
  );
};

RecompSwitch.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onLabel: PropTypes.string,
  offLabel: PropTypes.string,
};

RecompSwitch.defaultProps = {
  checked: false,
  disabled: false,
  size: "medium",
};

export default RecompSwitch;
