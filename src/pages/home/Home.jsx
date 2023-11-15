import { Box, Container, Grid, Typography } from "@mui/material"
import classes from "./Home.module.css"
import { instruments } from "./data"
import { MyButton } from "../../components/button/MyButton"

const Home = () => {
  return (
    <Box>
      <Box className={classes.hero}>
        <Container maxWidth="md">
          <Typography variant="h5" align="center" gutterBottom>
            Vítejte na Band-Mate – místě, kde najdeš různé hudební nadšence a
            možné parťáky!
          </Typography>
          <Typography variant="body2" align="center" gutterBottom>
            Jsme váš digitální hudební koutek, kde můžete najít svého hudebního
            parťáka pro společné vytvoření kapely, nebo pouhé jamovácí chvíle.
            Chceš najít svého hudebního parťáka?
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold" }}
            align="center"
            gutterBottom
          >
            Vyber který nástroj ti v tvém hudebním životě schází a pokračuj dál:
          </Typography>
        </Container>
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
                <MyButton
                  {...instrument}
                  path={`/${instrument.text}`}
                  key={instrument.id}
                />
              ))
            : "no cards"}
        </Grid>
      </Container>
    </Box>
  )
}

export default Home
