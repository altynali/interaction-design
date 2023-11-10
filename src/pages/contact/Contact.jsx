import { Box, Button, Container, Grid, Typography } from "@mui/material"
import classes from "./Contact.module.css"

const Contact = () => {
  return (
    <Box>
      <Box className={classes.hero}>
        <Container maxWidth="md">
          <Typography variant="h3" align="center" gutterBottom>
            Contact page
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
    </Box>
  )
}

export default Contact
