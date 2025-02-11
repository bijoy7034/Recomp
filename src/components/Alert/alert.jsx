import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./alert.css";

const AlertComponent = ({ type, title, message, dismissible, autoClose, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        setVisible(false);
        if (onClose) onClose();
      }, autoClose);
      return () => clearTimeout(timer);
    }
  }, [autoClose, onClose]);

  if (!visible) return null;

  return (
    <div className={`custom-alert ${type}`}>
      {dismissible && (
        <button className="close-btn" onClick={() => setVisible(false)}>
          ✖
        </button>
      )}
      {title && <strong className="alert-title">{title}</strong>}
      <p className="alert-message">{message}</p>
    </div>
  );
};

AlertComponent.propTypes = {
  type: PropTypes.oneOf(["success", "error", "warning", "info"]).isRequired,
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  dismissible: PropTypes.bool,
  autoClose: PropTypes.number,
  onClose: PropTypes.func,
};

AlertComponent.defaultProps = {
  title: "",
  dismissible: true,
  autoClose: null,
  onClose: null,
};

export default AlertComponent;
