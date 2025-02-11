import PropTypes from "prop-types";
import React from "react";
import './button.css'
const RecompButton = ({
    label,
    onClick,
    variant,
    disabled = false,
    size,
    style
}) => {
    return ( 
        <button className={`recomp_button ${variant} ${disabled? "disabled" : null} ${size}` } style={style} disabled={disabled} onClick={onClick}>{label}</button> 
     );
}

RecompButton.propTypes = {  
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    variant : PropTypes.string,
    disabled: PropTypes.bool,
    size: PropTypes.string,
    style: PropTypes.object
};

export default RecompButton;
