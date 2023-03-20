import React from "react"
import {
  BtnHelp,
  Button,
  Container,
  HelpContainer,
  MarketingPartners,
  SocialContainer,
  SocialHero,
} from "../../styles/help/Help-styled"
import MySVG from "../../assets/img"

const Help = () => {
    return (
        <Container>
            <HelpContainer>
                <SocialContainer>
                    <div>
                        <h1>And we are here to help</h1>
                        <h2>
                            Our customer advocates are standing by 24/7 to support you
                            via email and social media. We also have a comprehensive, regularly
                            updated help center for those who prefer to find help themselves.
                        </h2>
                        <Button>
                            <BtnHelp to="/">Visit our help center</BtnHelp>
                        </Button>
                    </div>
                    <SocialHero>
                        <img src={MySVG.teammap} alt="teammap"/>
                    </SocialHero>
                </SocialContainer>
                <MarketingPartners>
                    <p>An official marketing partner of the industry leaders</p>
                    <div>
                        <img src={MySVG.metabusiness} alt="metabusiness"/>
                        <img src={MySVG.pinterestmarketing} alt="pinterestmarketing"/>
                        <img src={MySVG.linkedinmarketing} alt="linkedinmarketing"/>
                    </div>
                </MarketingPartners>
            </HelpContainer>
        </Container>
    )
}

export default Help