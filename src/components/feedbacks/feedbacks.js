import React, { Fragment, useState } from "react"

import Container from "../container/container"
import PopUp from "../popUp/popUp"
import ParallaxObjects from "./parallaxObjects"

import data from "../../data"
import Feedback1 from "../../images/feedback1.png"
import Feedback2 from "../../images/feedback2.png"
import arrowLeft from "../../images/arrow-left.svg"
import arrowRight from "../../images/arrow-right.svg"

import Slider from "react-slick"

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerPadding: "100px",
  // centerMode: true,
  nextArrow: (
    <img src={arrowRight} className="next" id="next" alt="Следующий" />
  ),
  prevArrow: <img src={arrowLeft} className="prev" alt="Предыдущий" />,
  responsive: [
    {
      breakpoint: 968,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
}

const feedbacks = [
  {
    photo: Feedback1,
    author: "Дарья Островская",
    text:
      "Сотрудничаем с Hello Foody больше года. Впечатления только положительные! Любой вопрос решается по звонку, часто online. Специалисты тех.поддержки находятся на связи ежедневно, часто проводятся проверки контроля качества продукции. Мы выбрали Hello Foody, так как прежде всего хотелось получить не только вкусную, но и качественную, здоровую еду, ну и, конечно, вкусный кофе) О своём выборе ни разу не пожалели! Всем очень рекомендую для сотрудничества этих замечательных ребят!)",
  },
  {
    photo: Feedback2,
    author: "Каденса Шприттен",
    text:
      "У нас в офисе на кухне установлен продуктовый киоск “Hello, Foody!”. Очень многие сотрудники увлекаются ПП и фитнесом, и команда “Hello, Foody!” прислушивается к нашим потребностям и обеспечивает нас фитнес-рационом: сэндвичи с зерновым хлебом, протеиновые коктейли и батончики, вторые блюда с разными гарнирами (в том числе и овощами). Есть и сладкие блюда, а также различные здоровые снэки. Свежие продукты загружают каждое утро. Служба поддержки работает выше всяких похвал!",
  },
  {
    photo: Feedback1,
    author: "Дарья Островская",
    text:
      "Сотрудничаем с Hello Foody больше года. Впечатления только положительные! Любой вопрос решается по звонку, часто онлайн",
  },
  {
    photo: Feedback2,
    author: "Каденса Шприттен",
    text:
      "У нас в офисе на кухне установлен продуктовый киоск Hello, Foody!. Очень многие сотрудники увлекаются ПП и фитнесом, и команда Hello, Foody",
  },
]

const Feedbacks = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false)
  const [fullFeedback, setFullFeedback] = useState(null)

  const handlePopUpClick = text => {
    isPopUpOpen ? setFullFeedback(null) : setFullFeedback(text)
    isPopUpOpen ? setIsPopUpOpen(false) : setIsPopUpOpen(true)
  }
  return (
    <Fragment>
      <PopUp
        isPopUpOpen={isPopUpOpen}
        handlePopUpClick={handlePopUpClick}
        text={fullFeedback}
        className="feedbacks_popUp"
      />
      <Container>
        <section className="feedbacks">
          <ParallaxObjects />
          <h2
            className="title_h2"
            dangerouslySetInnerHTML={{ __html: data.feedbacks.title }}
          />

          <div className="feedbacks_wrapper">
            <Slider {...settings}>
              {data.feedbacks.feedbacks.map((feedback, index) => (
                <FeedbackItem
                  {...feedback}
                  key={index}
                  handlePopUpClick={handlePopUpClick}
                />
              ))}
            </Slider>
          </div>
        </section>
      </Container>
    </Fragment>
  )
}

const FeedbackItem = ({ photo, author, text, handlePopUpClick }) => (
  <div className="feedbacks_item">
    <div className="feedbacks_item_img">
      <img src={photo} alt="ava" />
    </div>
    <h5 className="title_h5">{author}</h5>
    <p className=" feedbacks_item_text text">
      {text.length > 116 ? `${text.slice(0, 116)}...` : text}
    </p>
    <p
      className="feedbacks_item_read-more text text--green"
      onClick={() => handlePopUpClick(text)}
    >
      Читать полностью
    </p>
  </div>
)
export default Feedbacks
