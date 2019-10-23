import React, { useState } from "react"

import Tab from "../tab/tab"
import Container from "../container/container"
import MenuItem from "./menuItem.js"

import data from "../../data"

const Menu = () => {
  const [activeTab, setActiveTab] = useState(0)

  const togglActiveTab = index => {
    setActiveTab(index)
  }

  return (
    <Container background="#11AC5F">
      <section className="menu" id="menu">
        <h2
          className="menu_title title_h2 title_h2--white"
          dangerouslySetInnerHTML={{ __html: data.menu.title }}
        />

        <div className="menu_tabs">
          {data.menu.tabs.map((tab, index) => (
            <Tab
              text={tab}
              className={index === activeTab ? "tab--active" : ""}
              onClick={() => togglActiveTab(index)}
              key={index}
            />
          ))}
        </div>

        <div className="menu_cards">
          {data.menu.menuItems[activeTab].map((menuItem, index) => (
            <MenuItem {...menuItem} key={index} index={index} />
          ))}
        </div>
      </section>
    </Container>
  )
}

export default Menu
