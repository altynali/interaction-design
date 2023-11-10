import { Box, Button, Container, Grid, Typography } from "@mui/material"
import { MyCard } from "../../components/card/MyCard"
import classes from "./Advertisement.module.css"

const Advertisement = () => {
  return (
    <Box className={classes.root}>
      <Box className={classes.hero}>
        <Container maxWidth="md">
          <Typography variant="h3" align="center" gutterBottom>
            Advertisement page
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
        <MyCard
          text="Card1"
          description="Card1"
          imageUrl="https://picsum.photos/seed/picsum/1000/1000"
          imageAlt="Card1 Alt"
        />
      </Container>
    </Box>
  )
}

export default Advertisement
