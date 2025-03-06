import { Button } from "react-aria-components";
import PropTypes from "prop-types";
import "./Button.css";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader"; 

function RecompButton({type, label, isDisabled, onPress, variant, icon, isPending }) {
  return (
    <Button type={type} className={`recomp-button ${variant}`} isDisabled={isDisabled} onPress={onPress}>
      {isPending ? (
        <ClipLoader size={12} color={variant === 'primary' ? "white" : "black"} className="loader" />
      ) : (
        <>
          {icon && <span className="icon">{icon}</span>}
          {label}
        </>
      )}
    </Button>
  );
}

RecompButton.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
  variant: PropTypes.string,
  icon: PropTypes.node,
  isPending: PropTypes.bool,
};

RecompButton.defaultProps = {
  isDisabled: false,
  variant: "primary",
  icon: null,
  isPending: false,
};

export default RecompButton;
