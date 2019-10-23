import React from 'react'

const Tab = ({ text, className, onClick }) => (
  <button 
    className={`tab subtitle subtitle--white ${className}`}
    onClick={onClick}>
      {text}
  </button>
);

export default Tab;