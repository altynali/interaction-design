import { Box, Button, Container, Grid, Typography } from "@mui/material"
import classes from "./Advertisement.module.css"
import { cards, guitarAmaters } from "../advertisementList/data"
import { NavLink, useParams } from "react-router-dom"
import { AdvertisementCard } from "../../components/advertisementCard/AdvertisementCard"
import picture1 from "../../assets/picture1.PNG"
import picture2 from "../../assets/picture2.PNG"
import picture3 from "../../assets/picture3.PNG"
import picture4 from "../../assets/picture4.PNG"

const Advertisement = () => {
  const { id, instrument, level } = useParams()
  let arr
  if (instrument === "Kytara" && level === "Amatér") {
    arr = guitarAmaters
  } else {
    arr = cards
  }

  const advertisement = arr[id - 1]
  let img

  if (instrument === "Kytara" && level === "Amatér") {
    img = picture1
  } else {
    switch (advertisement.id) {
      case 1:
        img = picture1
        break
      case 2:
        img = picture2
        break
      case 3:
        img = picture3
        break
      case 4:
        img = picture4
        break

      default:
        img = picture1
        break
    }
  }

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <AdvertisementCard
          key={advertisement.id}
          title={advertisement.title}
          description={advertisement.description}
          imageUrl={img}
          imageAlt={advertisement.imageAlt}
          hashTag={advertisement.hashTag}
          date={advertisement.date}
          phoneNumber={advertisement.phoneNumber}
          instrument={instrument}
          level={level}
          email={advertisement.email}
        />
      </Container>
    </Box>
  )
}

export default Advertisement
