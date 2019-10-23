import React, { useState } from "react"
import Scrollchor from "react-scrollchor"

import logo from "../../images/logo.svg"
import burger from "../../images/menu-button.svg"
import Button from "../button/button"

const navItems = [
  { menuItem: "ВИДЫ КИОСКОВ", href: "kiosks" },
  { menuItem: "ПОЧЕМУ ЭТО УДОБНО?", href: "founderComment" },
  { menuItem: "МЕНЮ", href: "menu" },
  { menuItem: "ЧАСТЫЕ ВОПРОСЫ", href: "faq" },
  { menuItem: "КОНТАКТЫ", href: "contacts" },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleBurgerClick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  return (
    <header className="header">
      {/* logo with hidden burger on mobile */}
      <div className="header_mobile">
        <a className="header_logo">
          <img src={logo} alt="logo" />
        </a>
        {/* <div> */}
        <img
          className="header_mobile_burger"
          src={burger}
          alt="mobile menu"
          onClick={handleBurgerClick}
        />
        {/* </div> */}
      </div>

      {/* phone, nav, button */}
      <nav
        className={`header_nav_wrapper ${
          isOpen ? "header_nav_wrapper--open" : ""
        }`}
      >
        <p>+7 (495) 79 986 79</p>

        {/* menu items */}
        <ul className="header_nav">
          {navItems.map((navItem, index) => (
            <li className="header_nav_item" key={index}>
              <Scrollchor
                to={`#${navItem.href}`}
                animate={{ offset: 20, duration: 1000 }}
              >
                {navItem.menuItem}
              </Scrollchor>
            </li>
          ))}
        </ul>

        <a href="#faq">
          <Button
            className="button button--md button--green"
            text="Как установить киоск"
          />
        </a>
      </nav>
    </header>
  )
}

export default Header
