import React, { useState, useRef, useEffect } from 'react';
import Link  from 'next/link';
import styles from '@/styles/Dropdown.module.css';
import navbarStyles from '@/styles/Navbar.module.css'
const Dropdown = ({height, width, btnText, dropdownItems}) => {
  const [dropdownHeight, setDropdownHeight]= useState(-1)
  const dropdownRef= useRef();

  function toggleDropdown(){
    if(dropdownRef.current.style.height==(0+"px")){
      dropdownRef.current.style.border= "1px solid #ccc"
      dropdownRef.current.style.overflow= "visible";
      dropdownRef.current.style.height= height? height+"rem" : "14rem";
      dropdownRef.current.style.width= width? width+"rem" : "14rem";
    } else {
      dropdownRef.current.style.border= "none"
      dropdownRef.current.style.height=0;
      dropdownRef.current.style.overflow= "hidden";
    }
  }
  
  useEffect(() => {
    if(dropdownRef.current.clientHeight != 0) {
      setDropdownHeight(dropdownRef.current.clientHeight);
    }
    dropdownRef.current.style.opacity = 1;
    dropdownRef.current.style.height = 0;
  }, []);

  return (
    <div className={styles['has-dropdown']} onClick={toggleDropdown}>
      <Link href="" className={`${styles['dropdown-btn']} ${navbarStyles['navbar-item']}`}>
        {btnText}
      </Link>
      <div className={`${styles['dropdown']}`} ref={dropdownRef}>
        {dropdownItems && dropdownItems.map((item, index) => (
          <div 
            onClick={item.clickHandler} 
            key={btnText + "dropdown-item-" + index} 
            className={styles['dropdown-item']}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
