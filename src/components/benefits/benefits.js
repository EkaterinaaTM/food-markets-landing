import React from "react"
import Container from "../container/container"
import ParallaxObjects from "./parallaxObjects"
import data from "../../data"

const Benefits = () => (
  <Container background="#E5E5E5">
    <section className="benefits">
      <ParallaxObjects />
      <h2
        className="title_h2"
        dangerouslySetInnerHTML={{ __html: data.benefits.title }}
      />

      <div className="benefits_items">
        {data.benefits.items.map((benefitItem, index) => (
          <BenefitItem {...benefitItem} key={index} />
        ))}
      </div>

      <div className="line line--black" />
    </section>
  </Container>
)

const BenefitItem = ({ icon, title, desc }) => (
  <div className="benefits_items_item">
    <img src={icon} alt="icon" />
    <h2 className="title_h5 ">{title}</h2>
    <p className="text">{desc}</p>
  </div>
)
export default Benefits
