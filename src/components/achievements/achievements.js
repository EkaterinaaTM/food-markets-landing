import React from "react"
import Container from "../container/container"

import data from "../../data"

const Achievements = () => (
  <Container>
    <section className="achievements">
      <h3
        className="title_h3 title_h3--white mr-32 ml-32"
        dangerouslySetInnerHTML={{ __html: data.main.pros }}
      />

      <div className="achievements_block">
        {data.main.achievementNumbers.map((achievement, index) => (
          <div className="achievements_item ml-32 mb-32" key={index}>
            <p className="title_h3 title_h3--light title_h3--white">
              {achievement.number}
            </p>
            <p className="title_h5 title_h5--white">{achievement.object}</p>
            <p className="text-bold text--white">{achievement.desc}</p>
          </div>
        ))}
      </div>
    </section>
    <div className="line" />
  </Container>
)

export default Achievements
