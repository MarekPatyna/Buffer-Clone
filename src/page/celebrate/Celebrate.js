import React from "react"
import {
  About,
  AnimatedContainer,
  Container,
} from "../../styles/celebrate/Celebrate-styled"
import { CelebrateMap } from "../../compontents/celebrate/CelebrateMap"

const Celebrate = () => {
    return (
        <Container>
            <hgroup>
                <h1>4. celebrate</h1>
                <p>Businesses all over the world trust Buffer to build their brand</p>
            </hgroup>
            <AnimatedContainer>
                <section className="box">
                    <div className='item'>{CelebrateMap}</div>
                    <div className='item'>{CelebrateMap}</div>
                </section>
            </AnimatedContainer>
            <About>
                <li>
                    <span>10 years</span>
                    <p>in business</p>
                </li>
                <li>
                    <span>140,000</span>
                    <p>users</p>
                </li>
                <li>
                    <span>100k+</span>
                    <p>monthly blog readers</p>
                </li>
                <li>
                    <span>1.2m+</span>
                    <p>social followers</p>
                </li>
            </About>
        </Container>
    )
}

export default Celebrate