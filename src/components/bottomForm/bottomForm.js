import React, { useState } from "react"

import Container from "../container/container"
import Input from "../input/input"
import Button from "../button/button"

const BottomForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    setIsSubmitted(true)
  }

  return (
    <Container background="#11AC5F">
      <section className="bottom-form" id="installKiosk">
        <h4 className="title_h4">Оставить заявку на установку киоска</h4>

        <p className="text">
          Мы свяжемся с вами в течение дня и расскажем о дальнейших шагах.
        </p>

        <div
          className={`form_success-msg title_h5 ${
            isSubmitted ? "form_success-msg--visible" : ""
          }`}
        >
          Ваша заявка успешно отправлена :)
        </div>

        <div
          className={`bottom-form_inputs_wrapper ${
            isSubmitted ? "bottom-form_inputs_wrapper--submitted" : ""
          }`}
        >
          <div className="bottom-form_inputs">
            <Input placeholder="Ваше имя" />
            <Input placeholder="Ваш телефон" />
            <Input placeholder="Ваша почта" />
          </div>

          <div className="bottom-form_submit">
            <p className="bottom-form_agreement text">
              Нажимая на кнопку, вы даете <span>согласие</span> на обработку
              персональных данных и соглашаетесь с политикой конфиденциальности.
            </p>
            <Button
              text="ОТПРАВИТЬ"
              className="button--green button--lg"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </section>
    </Container>
  )
}

export default BottomForm
