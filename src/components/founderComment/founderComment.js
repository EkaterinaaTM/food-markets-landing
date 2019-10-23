import React, { Fragment, useState } from "react"

import Container from "../container/container"
import PopUp from "../popUp/popUp"
import founder from "../../images/founder.png"
import quote from "../../images/quote.svg"
import playIcon from "../../images/play-icon.svg"
import YouTube from "react-youtube"

import data from "../../data"

const FounderComment = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false)

  const handlePopUpClick = () => {
    isPopUpOpen ? setIsPopUpOpen(false) : setIsPopUpOpen(true)
  }

  return (
    <Fragment>
      <PopUp
        isPopUpOpen={isPopUpOpen}
        handlePopUpClick={handlePopUpClick}
        text={<YoutubeVideo />}
      />
      <Container>
        <section className="founder" id="founderComment">
          <div className="founder_img-wrapper">
            <img src={founder} alt="основатель" />
          </div>
          <div className="founder_info_wrapper">
            <img src={quote} alt="quote icon" />
            <p className="founder_info_comment text text--black">
              {data.founderComment.text}
            </p>
            <p className="subtitle subtitle--black mb-8">
              {data.founderComment.author}
            </p>
            <p className="text">{data.founderComment.position}</p>

            <div className="founder_info_line" />

            <div className="founder_info_preview_link" onClick={setIsPopUpOpen}>
              <img src={playIcon} alt="play icon" />
              <p className="link founder_info_preview_text">
                ПОСМОТРЕТЬ РОЛИК О ПРОЕКТЕ
              </p>
            </div>
          </div>
        </section>
      </Container>
    </Fragment>
  )
}

class YoutubeVideo extends React.Component {
  render() {
    const opts = {
      height: "590",
      width: "1000",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    }

    return <YouTube videoId="qbyfsDCZqmw" opts={opts} onReady={this._onReady} />
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }
}

export default FounderComment
