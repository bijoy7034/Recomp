import PropTypes from "prop-types";
import React from "react";
import './style.css'
const RecompButton = ({
    label,
    onClick,
    type,
    disabled = false,
    size
}) => {
    return ( 
        <button className={`recomp_button ${type} ${disabled? "disabled" : null} ${size}` } disabled={disabled} onClick={onClick}>{label}</button> 
     );
}

RecompButton.propTypes = {  
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type : PropTypes.string,
    disabled: PropTypes.bool,
    size: PropTypes.string
};

export default RecompButton;
