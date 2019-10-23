import React, { Fragment } from "react"

import { Parallax } from "react-scroll-parallax"

import coffeeBeanBig from '../../images/coffee-bean-big.svg'
import coffeeBeanSmall from '../../images/coffee-bean-small.svg'
import onion from '../../images/onion.svg'
import tomato from '../../images/tomato.svg'
import coffeeCup from '../../images/coffee-cup.svg'

const ParallaxObjects = () => (
  <Fragment>
    <Parallax className="main_coffee-bean-small" y={[-100, 100]} tagOuter="figure">
      <img src={coffeeBeanSmall} alt={"coffee bean"}/>
    </Parallax>
    <Parallax className="main_tomato" y={[-100, 100]} tagOuter="figure">
      <img src={tomato} alt={"tomato"}/>
    </Parallax>
    <Parallax className="main_coffee-bean-big" y={[-100, 100]} tagOuter="figure">
      <img src={coffeeBeanBig} alt={"coffee bean"}/>
    </Parallax>
    <Parallax className="main_onion" y={[-100, 100]} tagOuter="figure">
      <img src={onion} alt={"onion"}/>
    </Parallax>
    <Parallax className="main_coffee-cup" y={[-100, 100]} tagOuter="figure">
      <img src={coffeeCup} alt={"coffee cup"}/>
    </Parallax>
  </Fragment>
);

export default ParallaxObjects;