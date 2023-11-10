import { Box, Button, Container, Grid, Typography } from "@mui/material"
import { MyCard } from "../../components/card/MyCard"
import classes from "./AdvertisementList.module.css"
import { cards } from "./data"
import { NavLink } from "react-router-dom"

const AdvertisementList = () => {
  return (
    <Box>
      <Box className={classes.hero}>
        <Container maxWidth="md">
          <Typography variant="h3" align="center" gutterBottom>
            Advertisement list page
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            facilis earum, illo, ipsam eos aliquam corporis mollitia maiores ad
            totam minus voluptatem quasi nam natus ullam sit quisquam animi vel.
          </Typography>
          <Grid container alignItems="center" justifyContent="center" gap={2}>
            <Button variant="contained" className={classes.leftButton}>
              Main call to action
            </Button>
            <Button variant="outlined">Secondary action</Button>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          gap={2}
          className={classes.root}
        >
          {cards.length !== 0
            ? cards?.map((card) => (
                <Grid item xs={10} md={8}>
                  <NavLink to="/advertisement">
                    <MyCard {...card} key={card.id} />
                  </NavLink>
                </Grid>
              ))
            : "no cards"}
        </Grid>
      </Container>
    </Box>
  )
}

export default AdvertisementList
