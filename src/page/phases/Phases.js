import React from 'react'
import { Container, PhasesImg } from "../../styles/phases/Phases-styled"
import bufferloop from "../../assets/img/bufferloop.svg"

const Phases = () => {
    return (
        <Container>
            <hgroup>
                <h1>Be where your customers are</h1>
                <p>
                    People spend, on average, almost 2.5
                    hours on social media every day. Let them
                    find your brand more easily through these four simple steps:
                </p>
            </hgroup>
            <PhasesImg>
                <img src={bufferloop} alt="buffer-loop"/>
            </PhasesImg>
        </Container>
    )
}

export default Phases