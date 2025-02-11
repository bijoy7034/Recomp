import PropTypes from "prop-types";
import React, { useState } from "react";
import "./accordion.css";

const RecompAccordion = ({
  data,
  style,
  icon,
}) => {
  const [openIndex, setOpenIndex] = useState(null); 

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); 
  };

  return (
    <div className="recomp-accordion" style={style}>
      {data.map((item, index) => (
        <div key={index} className="recomp-accordion-item">
          <div className="recomp-accordion-header" onClick={() => toggleAccordion(index)}>
            <span className="accordion-title">{item.summary}</span>
            {icon && <span className={`accordion-icon ${openIndex === index ? "open" : ""}`}>{icon}</span>}
          </div>
          <div className={`recomp-accordion-content ${openIndex === index ? "open" : ""}`}>
            <div className="accordion-body">
              {openIndex === index && (
                <div className="accordion-topic">
                  <p>{item.topics[0].content}</p>
                </div>
              )}
            </div>
          </div>
          {/* {index < data.length - 1 && <hr />} */}
        </div>
        
      ))}
    </div>
  );
};

RecompAccordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      summary: PropTypes.string.isRequired,
      topics: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          content: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  transitionDuration: PropTypes.number,
  style: PropTypes.object,
  icon: PropTypes.node,
};

RecompAccordion.defaultProps = {
  style: {},
  icon: null,
};

export default RecompAccordion;
