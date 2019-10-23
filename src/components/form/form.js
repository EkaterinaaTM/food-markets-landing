import React, { useState } from 'react'

import Container from '../container/container'
import Input from '../input/input';
import Button from '../button/button';

const Form = () => {
  const [ isSubmitted, setIsSubmitted ] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };
  
  return (
    <Container>
      <section className='form'>

        <h4 className='title_h4'><span>Оставить заявку </span>на дегустацию</h4>
        <div className={`form_success-msg title_h5 ${isSubmitted ? 'form_success-msg--visible' : ''}`}>Ваша заявка успешно отправлена :)</div>

        <div className='form_inputs_wrapper'>
          <div className={`form_inputs ${isSubmitted ? 'form_inputs--sumbitted' : ''}`}>
            <Input placeholder='Ваше имя' />
            <Input placeholder='Ваша почта' />
            <Button text='ОТПРАВИТЬ' className='button--green button--lg' onClick={handleSubmit}/>
          </div>  
          <p className='form_agreement text'>Нажимая на кнопку, вы даете <span>согласие</span> на обработку персональных данных и соглашаетесь с политикой конфиденциальности.</p>
        </div>
      </section>
    </Container>
    )
};

export default Form;