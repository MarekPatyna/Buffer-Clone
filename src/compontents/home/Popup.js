import React from "react"
import {
  CloseBtn,
  PopupContainer,
  PopupInner,
} from "../../styles/home/Home-styled"

const Popup = (props) => {

    return(props.buttonPopup)
        &&
        (
            <PopupContainer>
                <PopupInner>
                    <CloseBtn onClick={()=> props.setButtonPopup(false)} />
                    { props.children }
                </PopupInner>
            </PopupContainer>
        )

}

export default Popup