import { Box, Container, Grid, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import classes from "./Footer.module.css"

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "primary.main",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        marginTop: "auto",
        color: "white",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="center" justifyContent="center" gap={1}>
          <Grid item xs={10} md={3}>
            <NavLink to="/about">
              <Typography variant="body2" className={classes.link}>
                O nas
              </Typography>
            </NavLink>
          </Grid>
          <Grid item xs={10} md={3}>
            <NavLink to="/contact">
              <Typography variant="body2" className={classes.link}>
                Kontakty
              </Typography>
            </NavLink>
          </Grid>
          <Grid item xs={10} md={3}>
            <NavLink to="/socialMedia">
              <Typography variant="body2" className={classes.link}>
                Soc site
              </Typography>
            </NavLink>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
