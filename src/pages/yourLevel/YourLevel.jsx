import { Box, Button, Container, Grid, Typography } from "@mui/material"
import classes from "./YourLevel.module.css"
import { levels } from "./data"
import { MyButton } from "../../components/button/MyButton"
import { NavLink, useParams } from "react-router-dom"

const YourLevel = () => {
  const { instrument } = useParams()

  return (
    <Box>
      <Grid container alignItems="center" justifyContent="left" gap={1}>
        <Button
          variant="contained"
          color="warning"
          className={classes.button}
          sx={{ margin: 2 }}
        >
          <NavLink to="/">Zpět</NavLink>
        </Button>
        {/* <Grid container alignItems="center" justifyContent="left" gap={1}> */}
        <Typography variant="body2">nástroj:</Typography>
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          {instrument}
        </Typography>
        {/* </Grid> */}
      </Grid>
      <Box className={classes.hero}>
        <Container maxWidth="md">
          <Typography variant="h6" align="center" gutterBottom>
            Chápeme že i když jsme všichni hudební nadšenci, tak naše schopnosti
            se mohou lišit.
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold" }}
            align="center"
            gutterBottom
          >
            Vyber svou hudební úroveň, popřípadě úroveň která by ti vyhovovala a
            pokračuj dál k inzerátům:
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
          {levels.length !== 0
            ? levels?.map((level) => (
                <MyButton
                  {...level}
                  path={`/${instrument}/${level.text}`}
                  key={level.id}
                />
              ))
            : "no cards"}
        </Grid>
      </Container>
    </Box>
  )
}

export default YourLevel
