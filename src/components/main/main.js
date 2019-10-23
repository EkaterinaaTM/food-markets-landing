import React from "react"

import Button from "../button/button"
import ParallaxObjects from "./parallaxObjects"

import vendingMachine from "../../images/vending-machine.svg"
import data from "../../data"
import bg from "../../images/bg2.svg"

const Main = () => (
  <section className="main">
    <ParallaxObjects />
    <div className="main_img">
      <img src={vendingMachine} alt="Вединговый автомат" />
    </div>

    <div className="main_content">
      <h1
        className="title_h1"
        dangerouslySetInnerHTML={{ __html: data.main.title }}
      />
      <p className="main_subtitle subtitle">{data.main.desc}</p>

      <div>
        <a href="#installKiosk">
          <Button
            text="УСТАНОВИТЬ КИОСК"
            className="button--sm button--green mb-32 mr-32"
          />
        </a>
        <a href="#menu">
          <Button
            text="ИЗУЧИТЬ МЕНЮ"
            className="button--sm button--white mb-32 mr-32"
          />
        </a>
      </div>
    </div>
  </section>
)

export default Main
