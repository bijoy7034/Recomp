import React from "react";
import { Input, Label, TextField } from "react-aria-components";
import "./Input.css";
import PropTypes from "prop-types";

function RecompInput({
  label,
  icon,
  placeholder,
  description,
  alert,
  type,
  validationBehavior = "native",
  ...rest
}) {
  return (
    <TextField validationBehavior={validationBehavior}>
      <Label className="label-recomp">{label}</Label>
      <Input icon={icon} className={alert? "react-aria-TextArea input-alert" : "react-aria-TextArea"} type={type} placeholder={placeholder} {...rest} />
      {alert ? (
        <small className="description alert">{alert}</small> 
      ) : (
        <small className="description">{description}</small>
      )}
    </TextField>
  );
}

export default RecompInput;

RecompInput.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.node,
  placeholder: PropTypes.string,
  description: PropTypes.string,
  alert: PropTypes.string, 
  type: PropTypes.string,
  validationBehavior: PropTypes.oneOf(["native", "aria"]),
};
