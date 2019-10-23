import freshFoodIcon from "./images/fresh-food.svg"
import assortmentIcon from "./images/customer-focus.svg"
import sertificateIcon from "./images/sertificate.svg"
import creditCardIcon from "./images/credit-card.svg"
import foodKiosk from "./images/kiosk-with-food.png"
import coffeeKiosk from "./images/coffee-kiosk.png"
import selfCatering from "./images/self-catering.png"
import automatic from "./images/automatic.png"
// benefits section
import safelyIcon from "./images/safely-icon.svg"
import cheapIcon from "./images/cheap.svg"
import quicklyIcon from "./images/quickly-icon.svg"
import yummyIcon from "./images/yummy-icon.svg"
import easyIcon from "./images/easy-icon.svg"
import profitableIcon from "./images/profitable-icon.svg"
// parthers section
import Avon from "./images/parthers/avon.svg"
import Adidas from "./images/parthers/addidas.svg"
import Deloitte from "./images/parthers/deloitte.svg"
import SuperJob from "./images/parthers/super-job.svg"
import Sibur from "./images/parthers/sibur.svg"
import Kaspersky from "./images/parthers/kaspersky.svg"
import Accenture from "./images/parthers/accenture.svg"
import Ing from "./images/parthers/ing.svg"
import Ingostrah from "./images/parthers/ingostrah.svg"
import PhilipMorris from "./images/parthers/phillip-morris.svg"
import Lamoda from "./images/parthers/lamoda.svg"
import Gett from "./images/parthers/gett.svg"
// menu section
import Profitroles from "./images/menu/profitroles.png"
import Syrniki from "./images/menu/syrniki.png"
import CroissantWithNutella from "./images/menu/croissant-with-nutella.png"
import CroissantWithCaramel from "./images/menu/croissant-with-caramel.png"
import CroissantWithCheese from "./images/menu/croissant-wth-cheese.png"
import CroissantWithHam from "./images/menu/croissant-with-ham.png"
import Dessert from "./images/menu/dessert.png"
import Sandwich1 from "./images/menu/sandwich1.png"
import Sandwich2 from "./images/menu/sandwich2.png"
import Sandwich3 from "./images/menu/sandwich3.png"
import Sandwich4 from "./images/menu/sandwich4.png"
import Sandwich5 from "./images/menu/sandwich5.png"
import Salat1 from "./images/menu/salat1.png"
import Salat2 from "./images/menu/salat2.png"
import Salat3 from "./images/menu/salat3.png"
import Salat4 from "./images/menu/salat4.png"
import Salat5 from "./images/menu/salat5.png"
import Dessert1 from "./images/menu/dessert1.png"
import Dessert2 from "./images/menu/dessert2.png"
import Dessert3 from "./images/menu/dessert3.png"
import Dessert4 from "./images/menu/dessert4.png"
import Dessert5 from "./images/menu/dessert5.png"
// feedbacks section
import Feedback1 from "./images/feedback1.png"
import Feedback2 from "./images/feedback2.png"
// team section
import member1 from "./images/team/member1.png"
import member2 from "./images/team/member2.png"
import member3 from "./images/team/member3.png"
import member4 from "./images/team/member4.png"
import member5 from "./images/team/member5.png"
import member6 from "./images/team/member6.png"

const data = {
  main: {
    title: "<span>Гастрономические киоски</span> со свежей и вкусной едой",
    desc:
      "Инновационная сеть автоматических киосков и микромаркетов с большим выбором вкусной, здоровой еды и свежеобжаренным зерновым кофе",
    pros: "Вкусно. <br /> Полезно. <br /> Всегда рядом.",
    achievementNumbers: [
      {
        number: "4",
        object: "года",
        desc: "Hello, Foody! кормит людей вкусной едой",
      },
      {
        number: "40 000",
        object: "человек",
        desc: "Покупают еду в киосках Hello, Foody! ежемесячно",
      },
      {
        number: "80",
        object: "киосков",
        desc: "Установлено и работает в Москве",
      },
    ],
  },

  kiosks: {
    title: "Виды киосков",
    tabs: [
      "Киоск с едой",
      "Кофейный автомат",
      "Микромаркеты обслуживания",
      "Автоматические витрины",
    ],
    kiosksTypes: [
      {
        img: coffeeKiosk,
        title: "<span>Киоск</span> с едой",
        desc:
          "Наши инновационные кофейные киоски позволяют варить качественный кофе, как в кофейне, но по доступным ценам. Мы используем зерна свежей обжарки класса Specialty от нашего партнера – компании Camera Obscura и всегда только натуральное молоко.",
        features: [
          {
            img: freshFoodIcon,
            text: "Каждое утро наполняем киоски свежей едой",
          },
          {
            img: assortmentIcon,
            text: "Прислушиваемся к пожеланиями по ассортименту",
          },
          {
            img: sertificateIcon,
            text: "Вся продукция имеет сертификаты качества",
          },
          {
            img: creditCardIcon,
            text: "Можно оплатить наличными, картой, а также телефоном",
          },
        ],
      },
      {
        img: foodKiosk,
        title: "Кофейный <span>автомат</span>",
        desc:
          "В наших киосках огромный выбор свежей, вкусной и здоровой еды, которую  мы  с  любовью  готовим  каждый  день.  Мы  тщательно контролируем все этапы производства и доставки продукции, чтобы вы всегда могли наслаждаться здоровым и качественным продуктом.",
        features: [
          {
            img: freshFoodIcon,
            text: "Готовим вкусный кофе из 100% бразильской арабики",
          },
          {
            img: assortmentIcon,
            text: "Варим 9 напитков, разработанных профессиональным бариста",
          },
          {
            img: sertificateIcon,
            text: "Проводим контроль качества кофе рефрактометром",
          },
          {
            img: creditCardIcon,
            text: "Цены от 60 до 100 р. за большой стакан с крышечкой",
          },
        ],
      },
      {
        img: automatic,
        title: "Микромаркеты <span>самообслуживания</span>",
        desc:
          "В наших микромаркетах с системой самообслуживания еще больше ассортимент завтраков, обедов и ужинов. Перед покупкой можно детально изучить продукт и только при желании его оплатить. Маркеты удачно впишутся в любой интерьер офисного пространства.",
        features: [
          {
            img: freshFoodIcon,
            text: "Каждое утро наполняем киоски свежей едой",
          },
          {
            img: assortmentIcon,
            text: "Возможность детально изучить продукт перед покупкой",
          },
          {
            img: sertificateIcon,
            text: "Большой ассортимент еды на любой прием пищи",
          },
          {
            img: creditCardIcon,
            text: "Можно оплатить наличными, картой, а также телефоном",
          },
        ],
      },
      {
        img: selfCatering,
        title: "<span>Автоматические </span>витрины",
        desc:
          "В наших киосках огромный выбор свежей, вкусной и здоровой еды, которую  мы  с  любовью  готовим  каждый  день.  Мы  тщательно контролируем все этапы производства и доставки продукции.",
        features: [
          {
            img: freshFoodIcon,
            text: "Каждое утро наполняем киоски свежей едой",
          },
          {
            img: assortmentIcon,
            text: "Прислушиваемся к пожеланиями по ассортименту",
          },
          {
            img: sertificateIcon,
            text: "Вся продукция имеет сертификаты качества",
          },
          {
            img: creditCardIcon,
            text: "Можно оплатить наличными, картой, а также телефоном",
          },
        ],
      },
    ],
  },

  founderComment: {
    text:
      "«Мы нужны людям, которые дорожат не только своим временем, но и здоровьем, любят вкусно поесть, но при этом не хотят переплачивать. Наша миссия – полноценно кормить людей свежей, вкусной и здоровой едой и при этом экономить их время и деньги.»",
    author: "Марина Пешнева-Подольская",
    position: "Основатель компании “Hello, Foody!”",
  },

  benefits: {
    title: "Почему это <span>удобно</span>?",
    items: [
      {
        icon: safelyIcon,
        title: "Безопасно",
        desc:
          "Мы ежедневно контролируем качество еды на этапе производства и при транспортировке ",
      },
      {
        icon: cheapIcon,
        title: "Экономно",
        desc:
          "Наш средний чек в 200 рублей в два раза ниже, чем стоимость бизнес-ланча",
      },
      {
        icon: quicklyIcon,
        title: "Быстро",
        desc:
          "Киоск находится близко к покупателю и доступен круглосуточно без очередей и ожиданий",
      },
      {
        icon: yummyIcon,
        title: "Вкусно",
        desc:
          "В наших киосках есть еда на любой прием пищи, а каждый месяц мы обновляем меню ",
      },
      {
        icon: easyIcon,
        title: "Легко устновить",
        desc:
          "Киоск устанавливается за 2 часа, требует одной розетки и занимает всего 1 кв.м.",
      },
      {
        icon: profitableIcon,
        title: "Выгодно покупателю",
        desc: "До 10 утра и после 18 вечера мы делаем скидку 20%",
      },
    ],
  },

  partners: {
    title: "Нас <span>выбирают</span>",
    partnersList: [
      {
        icon: Avon,
        alt: "Avon",
      },
      {
        icon: Adidas,
        alt: "Adidas",
      },
      {
        icon: Deloitte,
        alt: "Deloitte",
      },
      {
        icon: SuperJob,
        alt: "SuperJob",
      },
      {
        icon: Sibur,
        alt: "Сибур",
      },
      {
        icon: Kaspersky,
        alt: "Kaspersky",
      },
      {
        icon: Accenture,
        alt: "Accenture",
      },
      {
        icon: Ing,
        alt: "Ing",
      },
      {
        icon: Ingostrah,
        alt: "Ингострах",
      },
      {
        icon: PhilipMorris,
        alt: "Philip Morris",
      },
      {
        icon: Lamoda,
        alt: "Lamoda",
      },
      {
        icon: Gett,
        alt: "Gett",
      },
    ],
  },

  menu: {
    title:
      'Меню на завтрак, обед, ужин и <span class="dark">легкий перекус</span>',
    tabs: ["Завтраки", "Сэндвичи", "Салаты и вторые блюда", "Десерты"],
    menuItems: [
      [
        {
          img: Profitroles,
          alt: "Профитроли с муссом из лосося",
          title: "Профитроли с муссом из лосося",
          calories: "434 Ккал",
          bzhu: ["Б: 23,2Г ", "Ж: 12Г", "У: 87,2Г"],
        },
        {
          img: Syrniki,
          alt: "Творожные сырники из печи",
          title: "Творожные сырники из печи",
          calories: "434 Ккал",
          bzhu: ["Б: 23,2Г", "Ж: 12Г", "У: 87,2Г"],
        },
        {
          img: CroissantWithNutella,
          alt: "Круассан с нутеллой",
          title: "Круассан с нутеллой",
          calories: "434 Ккал",
          bzhu: ["Б: 23,2Г", "Ж: 12Г", "У: 87,2Г"],
        },
        {
          img: CroissantWithCaramel,
          alt: "Круассан с солёной карамелью",
          title: "Круассан с солёной карамелью",
          calories: "434 Ккал",
          bzhu: ["Б: 23,2Г", "Ж: 12Г", "У: 87,2Г"],
        },
        {
          img: CroissantWithCheese,
          alt: "Круассан с сыром",
          title: "Круассан с сыром",
          calories: "434 Ккал",
          bzhu: ["Б: 23,2Г", "Ж: 12Г", "У: 87,2Г"],
        },
        {
          img: CroissantWithHam,
          alt: "Круассан с ветчиной и сыром",
          title: "Круассан с ветчиной и сыром",
          calories: "434 Ккал",
          bzhu: ["Б: 23,2Г", "Ж: 12Г", "У: 87,2Г"],
        },
        {
          img: Dessert,
          alt: 'Лёгкий десерт "Чиа, манго, маракуйя"',
          title: 'Лёгкий десерт "Чиа, манго, маракуйя"',
          calories: "434 Ккал",
          bzhu: ["Б: 23,2Г", "Ж: 12Г", "У: 87,2Г"],
        },
      ],
      [
        {
          img: Sandwich1,
          alt: "Сэндвич с курицей и соусом песто",
          title: "Сэндвич с курицей и соусом песто",
          calories: "500 Ккал",
          bzhu: ["Б: 21Г ", "Ж: 31Г", "У: 38Г"],
        },
        {
          img: Sandwich2,
          alt: "Сэндвич с ростбифом",
          title: "Сэндвич с ростбифом",
          calories: "500 Ккал",
          bzhu: ["Б: 21Г ", "Ж: 31Г", "У: 38Г"],
        },
        {
          img: Sandwich3,
          alt: "Сэндвич с курицей и сливочным сыром",
          title: "Сэндвич с курицей и сливочным сыром",
          calories: "500 Ккал",
          bzhu: ["Б: 21Г ", "Ж: 31Г", "У: 38Г"],
        },
        {
          img: Sandwich4,
          alt: "Сэндвич с лососем и сливочным сыром",
          title: "Сэндвич с лососем и сливочным сыром",
          calories: "500 Ккал",
          bzhu: ["Б: 21Г ", "Ж: 31Г", "У: 38Г"],
        },
        {
          img: Sandwich5,
          alt: "Сэндвич с запеченной курицей и томатным соусом",
          title: "Сэндвич с запеченной курицей и томатным соусом",
          calories: "500 Ккал",
          bzhu: ["Б: 21Г ", "Ж: 31Г", "У: 38Г"],
        },
      ],
      [
        {
          img: Salat1,
          alt: "Салат весений",
          title: "Салат весений",
          calories: "500 Ккал",
          bzhu: ["Б: 21Г ", "Ж: 31Г", "У: 38Г"],
        },
        {
          img: Salat2,
          alt: "Винигрет",
          title: "Винигрет",
          calories: "500 Ккал",
          bzhu: ["Б: 21Г ", "Ж: 31Г", "У: 38Г"],
        },
        {
          img: Salat3,
          alt: "Салат Греческий",
          title: "Салат Греческий",
          calories: "500 Ккал",
          bzhu: ["Б: 21Г ", "Ж: 31Г", "У: 38Г"],
        },
        {
          img: Salat4,
          alt: "Салат Нисуаз",
          title: "Салат Нисуаз",
          calories: "500 Ккал",
          bzhu: ["Б: 21Г ", "Ж: 31Г", "У: 38Г"],
        },
        {
          img: Salat5,
          alt: "Салат цезарь с курицей",
          title: "Салат цезарь с курицей",
          calories: "500 Ккал",
          bzhu: ["Б: 21Г ", "Ж: 31Г", "У: 38Г"],
        },
      ],
      [
        {
          img: Dessert1,
          alt: "Чизкейк с клубникой",
          title: "Чизкейк с клубникой",
          calories: "500 Ккал",
          bzhu: ["Б: 21Г ", "Ж: 31Г", "У: 38Г"],
        },
        {
          img: Dessert2,
          alt: "Чизкейк шоколадный",
          title: "Чизкейк шоколадный",
          calories: "500 Ккал",
          bzhu: ["Б: 21Г ", "Ж: 31Г", "У: 38Г"],
        },
        {
          img: Dessert3,
          alt: "Пироженое с клубникой",
          title: "Пироженое с клубникой",
          calories: "500 Ккал",
          bzhu: ["Б: 21Г ", "Ж: 31Г", "У: 38Г"],
        },
        {
          img: Dessert4,
          alt: "Взбитые сливки",
          title: "Взбитые сливки",
          calories: "500 Ккал",
          bzhu: ["Б: 21Г ", "Ж: 31Г", "У: 38Г"],
        },
        {
          img: Dessert5,
          alt: "Торт с шоколадной крошкой",
          title: "Торт с шоколадной крошкой",
          calories: "500 Ккал",
          bzhu: ["Б: 21Г ", "Ж: 31Г", "У: 38Г"],
        },
      ],
    ],
  },

  feedbacks: {
    title: "Отзывы <span>клиентов</span>",
    // feedbacks: [
    //   {
    //     photo: Feedback1,
    //     author: 'Дарья Островская',
    //     text: 'Сотрудничаем с Hello Foody больше года. Впечатления только положительные! Любой вопрос решается по звонку, часто online. Специалисты тех.поддержки'
    //   },
    //   {
    //     photo: Feedback2,
    //     author: 'Каденса Шприттен',
    //     text: 'У нас в офисе на кухне установлен продуктовый киоск Hello, Foody!. Очень многие сотрудники увлекаются ПП и фитнесом, и команда Hello, Foody'
    //   },
    //   {
    //     photo: Feedback1,
    //     author: 'Дарья Островская',
    //     text: 'Сотрудничаем с Hello Foody больше года. Впечатления только положительные! Любой вопрос решается по звонку, часто онлайн'
    //   },
    //   {
    //     photo: Feedback2,
    //     author: 'Каденса Шприттен',
    //     text: 'У нас в офисе на кухне установлен продуктовый киоск Hello, Foody!. Очень многие сотрудники увлекаются ПП и фитнесом, и команда Hello, Foody'
    //   },
    // ]
  },

  team: {
    title: "Наша <span>команда</span>",
    teamMembers: [
      {
        photo: member1,
        name: "Ирина Пешнева",
        position: "Основатель проекта",
      },
      {
        photo: member2,
        name: "Марина Подольская",
        position: "Операционный директор",
      },
      {
        photo: member3,
        name: "Арсений Курский",
        position: "Менеджер по закупкам",
      },
      {
        photo: member4,
        name: "Георгий Сергеевич",
        position: "Руководитель отдела логистики",
      },
      {
        photo: member5,
        name: "Александ Павлов",
        position: "Директор по продажам",
      },
      {
        photo: member6,
        name: "Дмитрий Кошелев",
        position: "Менеджер по заботе о клиентах",
      },
    ],
  },

  FAQ: {
    title: "Частые вопросы",
    questions: [
      {
        question: 'Хотим установить киоск "Hello, Foody!" Что для этого нужно?',
        answer:
          "Достаточно оставить заявку на сайте и мы сразу же свяжемся с вами.",
      },
      {
        question:
          "Как вы обеспечиваете безопастность и следите за качеством еды?",
        answer:
          "Достаточно оставить заявку на сайте и мы сразу же свяжемся с вами.",
      },
      {
        question: "Какими способами можно оплачивать еду и кофе в киосках?",
        answer:
          "Достаточно оставить заявку на сайте и мы сразу же свяжемся с вами.",
      },
      {
        question: "Сколько стоит аренда киоска?",
        answer:
          "Достаточно оставить заявку на сайте и мы сразу же свяжемся с вами.",
      },
      {
        question: "Как долго может храниться еда в киоске?",
        answer:
          "Достаточно оставить заявку на сайте и мы сразу же свяжемся с вами.",
      },
      {
        question: "Как организована транспортировка еды?",
        answer:
          "Достаточно оставить заявку на сайте и мы сразу же свяжемся с вами.",
      },
      {
        question: "Что делать, если продукт застрял?",
        answer:
          "Достаточно оставить заявку на сайте и мы сразу же свяжемся с вами.",
      },
      {
        question:
          "Что делать, если деньги списались с карты, а продукт не выпал?",
        answer:
          "Достаточно оставить заявку на сайте и мы сразу же свяжемся с вами.",
      },
    ],
  },

  map: {
    title: "Контакты",
    desc:
      "Мы всегда на связи с нашими покупателями,  а 99% обращений решаются удаленно и моментально.",
    departmentsContacts: [
      {
        department: "Отдел продаж",
        phone: ["+7 (495) 96 841 38"],
        mail: "SALES@HELLOFOODY.RU",
      },

      {
        department: "Для поставщиков",
        phone: ["+7 (929) 98 273 91"],
        mail: "BUYER@HELLOFOODY.RU",
      },

      {
        department: "Горячая линия",
        phone: [
          "+7 (495) 96 841 38",
          "+7 (495) 96 841 38 <span> – WHATSAPP</span>",
        ],
        mail: "FOODY@HELLOFOODY.RU",
      },

      {
        department: "Контакты основателя",
        phone: ["<span>Марина Пешнева-Подольская</span>"],
        mail: "HELLO@HELLOFOODY.RU",
      },
    ],
  },
}

export default data
