import React, { Fragment } from "react"

import { Parallax } from "react-scroll-parallax"

import sandwichLeft from '../../images/sandwich-left.svg'
import coffeeCup from '../../images/coffee-cup-with-beans.svg'

const ParallaxObjects = () => (
  <Fragment>
    <Parallax className="benefits_sandwich-left" y={[-100, 100]} tagOuter="figure">
      <img src={sandwichLeft} alt={"sandwich"}/>
    </Parallax>
    <Parallax className="benefits_coffe-cup" y={[-100, 100]} tagOuter="figure">
      <img src={coffeeCup} alt={"coffeeCup"}/>
    </Parallax>
  </Fragment>
);

export default ParallaxObjects;