import React from "react"

import { Parallax } from "react-scroll-parallax"

import tomato from '../../images/tomato.svg'

const ParallaxObject = () => (
    <Parallax className="partners_tomato" y={[-100, 100]} tagOuter="figure">
      <img src={tomato} alt={"sandwich"}/>
    </Parallax>
);

export default ParallaxObject;