import React from "react"
import { BurgerContainer } from "../../styles/header/Header-styled"

const StyledBurger = ({showMenu, setShowMenu}) => {

    const handleClick = () => {
        setShowMenu(!showMenu)
        showMenu ? document.querySelector('html').style.overflowX = 'clip' : document.querySelector('html').style.overflowX = 'hidden'
    }

    return (
        <BurgerContainer showMenu={showMenu} onClick={handleClick}>
            <div />
            <div />
            <div />
        </BurgerContainer>
    )
}

export default StyledBurger


