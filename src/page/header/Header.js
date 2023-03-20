import React, { useEffect, useState } from "react"
import MySVG from "../../assets/img"
import StyledBurger from "../../compontents/header/StyledBurger"
import { Link } from "react-router-dom"
import {
  Container,
  BufferLogo,
  MenuLinks,
  BufferStarted,
  Login,
  RegButton,
  HamburgerIcon,
  HeaderContainer,
} from "../../styles/header/Header-styled"
import HamburgerMenu from "../../compontents/header/HamburgerMenu"
import DropMenu from "../../compontents/header/DropMenu"

const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)
    const [showMenu, setShowMenu] = useState(false)
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseOver = () => setIsHovering(true)
    const handleMouseOut = () => setIsHovering(false)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset

            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 425)

            setPrevScrollPos(currentScrollPos)
        }
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)

    },[prevScrollPos, visible])

    return (
        <Container visible={visible}>
            <HeaderContainer>
                <BufferLogo>
                    <Link to="/">
                        <img src={MySVG.BufferLogo} alt="Main logo"/>
                    </Link>
                </BufferLogo>
                <MenuLinks>
                    <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        <span>tools</span>
                        {isHovering && <DropMenu />}
                    </li>
                    <li>
                        <span>pricing</span>
                    </li>
                    <li>
                        <span>blog</span>
                    </li>
                    <li>
                        <span>about</span>
                    </li>
                    <li>
                        <span>customers</span>
                    </li>
                </MenuLinks>
                <BufferStarted>
                    <Login to="/">log in</Login>
                    <RegButton to="/">Get started now</RegButton>
                    <HamburgerIcon>
                        <StyledBurger showMenu={showMenu} setShowMenu={setShowMenu}/>
                    </HamburgerIcon>
                </BufferStarted>
                <HamburgerMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
            </HeaderContainer>
        </Container>
    )
}

export default Header