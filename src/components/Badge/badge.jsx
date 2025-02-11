import PropTypes from "prop-types";
import React from "react";
import './badge.css'

const RecompBadge = ({
    text,
    variant,
    style
}) => {
    return ( 
        <div style={style} className={`recomp-badge ${variant}`}>
           <span>{text}</span>
        </div>
     );
}
 
export default RecompBadge;

RecompBadge.PropTypes ={
    text: PropTypes.string,
    variant: PropTypes.string,
    style: PropTypes.object
}
