import React, { useState } from "react"

import closeIcon from "../../images/close-icon.svg"

const PopUp = ({ isPopUpOpen, handlePopUpClick, text, className }) => {
  return (
    <div
      className={`popup popup${isPopUpOpen ? "--open" : ""}`}
      onClick={handlePopUpClick}
    >
      {/* <img
        src={closeIcon}
        className="popup_close-icon"
        onClick={handlePopUpClick}
      /> */}
      <div className={`popup_inner ${className}`}>{text}</div>
    </div>
  )
}

export default PopUp
