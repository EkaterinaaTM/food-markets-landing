import React, { Fragment } from "react"

import { Parallax } from "react-scroll-parallax"

import sandwichRight from '../../images/sandwich-right.svg'
import coffeeGrinder from '../../images/coffee-grinder.svg'

const ParallaxObject = () => (
  <Fragment>
    <Parallax className="feedbacks_sandwich" y={[-100, 100]} tagOuter="figure">
      <img src={sandwichRight} alt={"sandwich"}/>
    </Parallax>
    <Parallax className="feedbacks_coffee-grinder" y={[-100, 100]} tagOuter="figure">
      <img src={coffeeGrinder} alt={"coffee grinder"}/>
    </Parallax>
  </Fragment>
);

export default ParallaxObject;