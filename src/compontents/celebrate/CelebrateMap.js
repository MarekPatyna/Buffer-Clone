import { celebrateData } from "../../data/data"
import {
  Avatar,
  Logo,
  MapAbout,
  MapContainer,
} from "../../styles/celebrate/Celebrate-styled"

export const CelebrateMap = celebrateData.map((person) => {
    const { id, avatar, info, logo, about } = person
    return <MapContainer key={id}>
        <Avatar>
            <img src={avatar} alt="avatar"/>
        </Avatar>
        <MapAbout>
            {info}
        </MapAbout>
        <Logo>
            <img src={logo} alt="logo"/>
            <p>{about}</p>
        </Logo>
    </MapContainer>
})