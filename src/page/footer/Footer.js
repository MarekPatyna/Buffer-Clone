import React from "react"
import {
  AppleIcon,
  Container,
  CopyRight,
  FooterApps,
  FooterButtons,
  FooterContainer,
  FooterIcons,
  FooterList,
  FooterListLink,
  GoogleIcon,
  MobileStore,
} from "../../styles/footer/Footer-styled"
import { FaInstagram } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaTiktok } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaPinterest } from "react-icons/fa"

const Footer = () => {
    return (
        <Container>
            <FooterContainer>
                <FooterApps>
                    <h1>Buffer</h1>
                    <FooterIcons>
                        <FaInstagram />
                        <FaFacebookF />
                        <FaTwitter />
                        <FaTiktok />
                        <FaLinkedin />
                        <FaPinterest />
                    </FooterIcons>
                    <h2>Download</h2>
                    <FooterButtons>
                        <MobileStore to="/"><AppleIcon />App Store</MobileStore>
                        <MobileStore to="/"><GoogleIcon />Google Play</MobileStore>
                    </FooterButtons>
                    <CopyRight>
                        Copyright ©2022
                        Buffer
                        <span>|</span>
                        <a href="/">Privacy</a>
                        <span>|</span>
                        <a href="/">Terms</a>
                        <span>|</span>
                        <a href="/">Security</a>
                    </CopyRight>
                </FooterApps>
                <FooterList>
                    <li>
                        <p>Tools</p>
                        <FooterListLink to="/">Publishing</FooterListLink>
                        <FooterListLink to="/">Analytics</FooterListLink>
                        <FooterListLink to="/">Engagement</FooterListLink>
                        <FooterListLink to="/">Start Page</FooterListLink>
                        <FooterListLink to="/">Extras</FooterListLink>
                    </li>
                    <li>
                        <p>Resources</p>
                        <FooterListLink to="/">Blog</FooterListLink>
                        <FooterListLink to="/">Content Library</FooterListLink>
                        <FooterListLink to="/">Browser Extension</FooterListLink>
                        <FooterListLink to="/">Free Image Editor</FooterListLink>
                    </li>
                    <li>
                        <p>Support</p>
                        <FooterListLink to="/">Help Center</FooterListLink>
                        <FooterListLink to="/">Status</FooterListLink>
                        <FooterListLink to="/">Changelog</FooterListLink>
                        <FooterListLink to="/">Product Roadmap</FooterListLink>
                    </li>
                    <li>
                        <p>Company</p>
                        <FooterListLink to="/">About</FooterListLink>
                        <FooterListLink to="/">Transparency</FooterListLink>
                        <FooterListLink to="/">Careers</FooterListLink>
                        <FooterListLink to="/">Accessibility</FooterListLink>
                        <FooterListLink to="/">Press</FooterListLink>
                        <FooterListLink to="/">Sitemap</FooterListLink>
                    </li>
                </FooterList>
            </FooterContainer>
        </Container>
    )
}

export default Footer