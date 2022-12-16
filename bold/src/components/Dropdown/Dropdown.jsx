import React, { useState } from 'react';
import s from './Dropdown.module.css'
import { Icon } from '@iconify/react';

//This Table component uses the RenderProps design pattern, 
//receives the children component that will be used as the content when displaying the dropdown
const Dropdown = ({children, title}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={s.dropdown}>
      <button className={s.dropdown_button} onClick={toggleDropdown}>{title} <Icon width="30px" color="#111e6c" icon="mi:filter" style={{paddingRight: '5px'}} /></button>
      {isOpen && (
        <div className={s.dropdown_content}>
            <div className={s.dropdown_content_header}>
                <p>{title}</p>
                <span onClick={toggleDropdown}>&#215;</span>
            </div>
            {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown