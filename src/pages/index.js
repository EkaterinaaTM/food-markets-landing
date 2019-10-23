import React, { Fragment } from "react"
import "../styles/index.scss"
import { ParallaxProvider } from "react-scroll-parallax"

import Head from "../components/head/head"
import Header from "../components/header/header"
import Main from "../components/main/main"
import Achievements from "../components/achievements/achievements"
import Kiosks from "../components/kiosks/kiosks"
import FounderComment from "../components/founderComment/founderComment"
import Benefits from "../components/benefits/benefits"
import Partners from "../components/partners/partners"
import Menu from "../components/menu/menu"
import Form from "../components/form/form"
import Feedbacks from "../components/feedbacks/feedbacks"
import Team from "../components/team/team"
import Faq from "../components/faq/faq"
import BottomForm from "../components/bottomForm/bottomForm"
import MyFancyComponent from "../components/map/map"
import ContactsBlock from "../components/map/contactsBlock"

const IndexPage = () => (
  <Fragment>
    <Head />
    <ParallaxProvider>
      <div className="app-wrapper">
        <Header />

        <div className="bg_1">
          <Main />
          <Achievements />
          <Kiosks />
          <FounderComment />
          <Benefits />
        </div>

        <div className="bg_2">
          <Partners />
          <Menu />
          <Form />
        </div>

        <Feedbacks />

        <div className="bg_3">
          <Team />
          <Faq />
          <BottomForm />
          <ContactsBlock />
          <MyFancyComponent />
        </div>
      </div>
    </ParallaxProvider>
  </Fragment>
)

export default IndexPage
