import PropTypes from "prop-types";
import React from "react";
import "./style.css";

const RecompCard = ({ title, description, footer, actions }) => {
  return (
    <div className="recomp-card">
      <div className="recomp-card__header"> 
        <span className="recomp-card__title">{title}</span>
        <span className="recomp-card__actions">{actions}</span>
      </div>
      <hr />
      <div className="recomp-card__body">
        <span className="recomp-card__description">{description}</span>
      </div>
      {footer? (
        <>
        <hr />
        <div className="recomp-card__footer">
          <span className="recomp-card__text">{footer}</span>
        </div></>
      ):(<></>)}
      
    </div>
  );
};

export default RecompCard;

RecompCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  footer: PropTypes.node,
  actions: PropTypes.node,
};
