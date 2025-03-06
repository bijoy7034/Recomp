import React from "react";
import { Button, Menu, MenuItem, MenuTrigger, Popover } from "react-aria-components";
import PropTypes from "prop-types";
import "./Menu.css";

function RecompMenu({ items,  variant = "primary" }) {
  return (
    <MenuTrigger>
      <Button aria-label="Menu" className={`menu-button ${ variant}`}>☰</Button>
      <Popover className={`menu-popover ${ variant}`}>
        <Menu className="menu-list">
          {items.map((item, index) => (
            <MenuItem key={index} onAction={item.onClick} className={`menu-item ${ variant}`}>
              {item.icon && <span className="menu-icon">{item.icon}</span>}
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}

RecompMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      icon: PropTypes.node, 
    })
  ).isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};

export default RecompMenu;
