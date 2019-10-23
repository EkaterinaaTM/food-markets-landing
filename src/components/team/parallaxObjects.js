import React, { Fragment } from "react"

import { Parallax } from "react-scroll-parallax"

import tomato from '../../images/tomato.svg'
import coffeCup from '../../images/coffee-cup-with-beans.svg'
import onion from '../../images/onion.svg'

const ParallaxObject = () => (
  <Fragment>
    <Parallax className="team_tomato" y={[-100, 100]} tagOuter="figure">
      <img src={tomato} alt={"tomato"}/>
    </Parallax>
    <Parallax className="team_coffee-cup" y={[-100, 100]} tagOuter="figure">
      <img src={coffeCup} alt={"coffee cup"}/>
    </Parallax>
    <Parallax className="team_onion" y={[-100, 100]} tagOuter="figure">
      <img src={onion} alt={"onion"}/>
    </Parallax>
  </Fragment>
);

export default ParallaxObject;