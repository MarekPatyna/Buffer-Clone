import React, { useState } from "react"
import {
  ArrowRotate,
  BufferLogoMobile,
  Hamburger,
  LoginMobile,
  MobileList,
  RegButtonMobile,
  ToolsList,
} from "../../styles/header/Header-styled"
import MySVG from "../../assets/img"
import StyledBurger from "./StyledBurger"
import { Link } from "react-router-dom"

const HamburgerMenu = ({showMenu, setShowMenu}) => {

    const [rotate, setRotate] = useState(false)
    const onClickRotate = () => setRotate(!rotate)

    return (
        <Hamburger showMenu={showMenu}>
            <BufferLogoMobile>
                <img src={MySVG.BufferLogo} alt="Main logo"/>
                <StyledBurger showMenu={showMenu} setShowMenu={setShowMenu} />
            </BufferLogoMobile>
            <MobileList>
                <li>
                    <div>tools<ArrowRotate rotate={rotate ? 1 : 0} onClick={onClickRotate} /></div>
                    {rotate &&
                        <ToolsList>
                            <li>Publish</li>
                            <li>Analyze</li>
                            <li>Engage</li>
                            <li>Start Page</li>
                        </ToolsList>
                    }
                </li>
                <li>
                    <Link to="/">pricing</Link>
                </li>
                <li>
                    <Link to="/">blog</Link>
                </li>
                <li>
                    <Link to="/">about</Link>
                </li>
                <li>
                    <Link to="/">customers</Link>
                </li>
                <RegButtonMobile to="/">Get started now</RegButtonMobile>
                <LoginMobile to="/">log in</LoginMobile>
            </MobileList>
        </Hamburger>
    )
}

export default HamburgerMenu