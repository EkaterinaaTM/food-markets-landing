import React, { useState } from "react"

const MenuItem = ({ img, alt, title, calories, bzhu, index }) => {
  const [activeMenuItem, setActiveMenuItem] = useState(null)

  const handleMouseOver = index => {
    setActiveMenuItem(index)
  }

  const handleMouseOut = () => {
    setActiveMenuItem(null)
  }

  return (
    <div className="menu_item">
      <div
        className="menu_item_img"
        onMouseOver={() => handleMouseOver(index)}
        onMouseOut={handleMouseOut}
      >
        <div className="fade">
          <h4 className="title_h4">{calories}</h4>
          <div className="fade_bzy">
            {bzhu.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>

        <img src={img} alt={alt} />
      </div>

        <p className="subtitle subtitle--white">{title}</p>

        <div
          className={`menu_item_line ${
            activeMenuItem === index ? "menu_item_line--active" : ""
          }`}
        />
    </div>
  )
};

export default MenuItem
