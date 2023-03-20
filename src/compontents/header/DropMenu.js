import { DDContent, DDInside } from "../../styles/header/Header-styled"
import React from "react"
import { menuData } from "../../data/data"

const DropMenu = () => {
    return (
        <DDContent>
            <DDInside>
                {menuData.map((item) => {
                    const { img, header, text , id } = item
                    return <li key={id}>
                        <img src={img} alt="svg"/>
                        <h1>{header}<p>{text}</p></h1>
                    </li>
                })}
            </DDInside>
        </DDContent>
    )
}

export default DropMenu