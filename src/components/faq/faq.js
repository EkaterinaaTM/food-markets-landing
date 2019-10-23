import React, { useState } from "react"
import Container from "../container/container"

import data from "../../data"

const Faq = () => {
  const [isOpen, setIsOpen] = useState(null)

  const handleAccordion = index => {
    console.log(index)
    index === isOpen ? setIsOpen(null) : setIsOpen(index)
  }

  return (
    <Container background="#11AC5F">
      <section className="faq" id="faq">
        <h2 className="title_h2 title_h2--white">{data.FAQ.title}</h2>

        <div className="faq_questions-wrapper">
          {data.FAQ.questions.map((question, index) => (
            <QuestionItem
              {...question}
              key={index}
              index={index}
              isOpen={isOpen}
              handleAccordion={handleAccordion}
            />
          ))}
        </div>
      </section>
    </Container>
  )
}

const QuestionItem = ({ question, answer, isOpen, handleAccordion, index }) => (
  <div
    className={`faq_question-wrapper${isOpen === index ? "--open" : ""}`}
    onClick={() => handleAccordion(index)}
  >
    <div className="faq_question">
      <p
        className={`subtitle subtitle${
          isOpen === index ? "--black" : "--white"
        }`}
      >
        {question}
      </p>
      {isOpen === index ? (
        <i className="fas fa-chevron-up"></i>
      ) : (
        <i className="fas fa-chevron-down"></i>
      )}
    </div>

    <div
      className={`faq_question_answer--${isOpen === index ? "open" : "hidden"}`}
    >
      <div className="faq_question_line" />
      <p className="text">{answer}</p>
    </div>
  </div>
)

export default Faq
