import React from "react"
import {
  Buttons,
  Container,
  LearnButton,
  PathContainer,
  RegButton,
  SocialHero,
  SocialStarted,
} from "../../styles/path/Path-styled"
import { pathData } from "../../data/data"

const Path = () => {
    return (
        <Container>
            {pathData.map((item) => {
                const { text1, text2, text3, img, id } = item
                return <PathContainer key={id}>
                    <SocialStarted>
                        <h1>{text1}</h1>
                        <h2>{text2}</h2>
                        <p>{text3}</p>
                        <Buttons>
                            <RegButton to="/">Get started now</RegButton>
                            <LearnButton to="/">Learn more</LearnButton>
                        </Buttons>
                    </SocialStarted>
                    <SocialHero>
                        <img src={img} alt="hero"/>
                    </SocialHero>
                </PathContainer>
            })}
        </Container>
    )
}

export default Path