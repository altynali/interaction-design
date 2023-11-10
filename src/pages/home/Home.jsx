import { Box, Container, Grid, Typography } from "@mui/material"
import classes from "./Home.module.css"
import { instruments } from "./data"
import { MyButton } from "../../components/button/MyButton"

const Home = () => {
  return (
    <Box>
      <Box className={classes.hero}>
        {/* <Container maxWidth="md"> */}
        <Typography variant="h3" align="center" gutterBottom>
          Home page
        </Typography>
        {/* <Typography variant="h5" align="center" paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            facilis earum, illo, ipsam eos aliquam corporis mollitia maiores ad
            totam minus voluptatem quasi nam natus ullam sit quisquam animi vel.
          </Typography>
          <Grid container alignItems="center" justifyContent="center" gap={2}>
            <Button variant="contained" className={classes.leftButton}>
              Main call to action
            </Button>
            <Button variant="outlined">Secondary action</Button>
          </Grid> */}
        {/* </Container> */}
      </Box>

      <Container maxWidth="lg">
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          gap={1}
          className={classes.root}
        >
          {instruments.length !== 0
            ? instruments?.map((instrument) => (
                <MyButton {...instrument} path="/yourLevel" />
              ))
            : "no cards"}
        </Grid>
      </Container>
    </Box>
  )
}

export default Home
