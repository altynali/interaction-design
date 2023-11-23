import { Box, Button, Container, Grid, Typography } from "@mui/material"
import classes from "./YourLevel.module.css"
import { levels } from "./data"
import { MyButton } from "../../components/button/MyButton"
import { NavLink, useParams } from "react-router-dom"

const YourLevel = () => {
  const { instrument } = useParams()

  return (
    <Box>
      <Container maxWidth="md">
        <Grid
          container
          alignItems="center"
          justifyContent="left"
          gap={1}
          sx={{ marginTop: 3 }}
        >
          <Grid item sx={12}>
            <Button
              variant="contained"
              color="warning"
              className={classes.button}
              sx={{ marginRight: 1 }}
            >
              <NavLink to="/">Zpět</NavLink>
            </Button>
          </Grid>
          <Typography variant="body2">nástroj:</Typography>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            {instrument}
          </Typography>
        </Grid>
      </Container>
      <Container maxWidth="md" className={classes.hero}>
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
