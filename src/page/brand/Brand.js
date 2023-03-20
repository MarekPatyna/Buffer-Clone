import React from "react"
import { Container } from "../../styles/brand/Brand-styled"
import { brandData } from "../../data/data"

const Brand = () => {

    return (
        <Container>
            {brandData.map((item) => {
                const { id, img } = item
                return <div key={id}>
                    <img src={img} alt="brand"/>
                </div>
            })}
        </Container>
    )
}

export default Brand