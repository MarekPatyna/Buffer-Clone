import React, { useState } from "react"
import {
  Container,
  SocialStarted,
  Buttons,
  WatchButton,
  PlayIcon,
  RegButton,
  HomeContainer,
} from "../../styles/home/Home-styled"
import sch from "../../assets/img/sch.webp"
import Popup from "../../compontents/home/Popup"
import { Player } from "video-react"

const Home = () => {

    const [buttonPopup, setButtonPopup] = useState(false)

    return (
        <Container>
            <HomeContainer>
                <SocialStarted>
                    <h1>Grow your audience on social and beyond</h1>
                    <h2>
                        Buffer helps you build an audience organically.
                        We’re a values-driven company that provides affordable,
                        intuitive, marketing tools for ambitious people and teams.
                    </h2>
                    <Buttons>
                        <RegButton to="/">Get started now</RegButton>
                        <WatchButton onClick={()=> setButtonPopup(true)}>
                            <PlayIcon />
                            Watch video
                        </WatchButton>
                        <Popup buttonPopup={buttonPopup} setButtonPopup={setButtonPopup}>
                            <Player autoPlay muted loop src="https://buffer.com/static/animation/SocialMedia.mp4" />
                        </Popup>
                    </Buttons>
                </SocialStarted>
                <div>
                    <img src={sch} alt="social"/>
                </div>
            </HomeContainer>
        </Container>
    )
}

export default Home