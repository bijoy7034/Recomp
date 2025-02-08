import PropTypes from "prop-types";
import React from "react";
import "./style.css";
import { Info } from "@mui/icons-material";

const RecompInput = ({ 
    placeholder,
    type, 
    className, 
    style, 
    disabled,
    error,
    icon 
}) => {
  return (
    <div className="recomp-input-wrapper">
      <div className="input-container">
        {icon && <span className="input-icon">{icon}</span>}
        <input
          type={type}
          placeholder={placeholder}
          className={`recomp-input ${className} ${disabled ? "disabled" : ""} ${error ? "error" : ""}`}
          style={style}
          disabled={disabled}
        />
        {error && <span className="input-icon-error"><Info/></span>}
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

RecompInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  icon: PropTypes.node, 
};

RecompInput.defaultProps = {
  placeholder: "Enter text...",
  type: "text",
  className: "",
  style: {},
  disabled: false,
  error: "",
  icon: null,
};

export default RecompInput;
