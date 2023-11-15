import { Box, Button, Container, Grid, Typography } from "@mui/material"
import classes from "./Contact.module.css"

const Contact = () => {
  return (
    <Box>
      <Box className={classes.hero}>
        <Container maxWidth="md">
          <Typography variant="body1" align="center" paragraph>
            Chcete být součástí naší hudební revoluce a přispět svými
            dovednostmi a nadšením k vývoji této inovativní platformy?
            Kontaktujte naše vývojáře a přidejte se k nám v našem úsilí o
            transformaci hudebního světa! Kontaktní údaje na vývojářský tým:
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold" }}
            align="center"
            gutterBottom
          >
            ✉️ E-mail: xalta008@studenti.czu.cz
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold" }}
            align="center"
            gutterBottom
          >
            ✉️ E-mail: xrasj009@studenti.czu.cz
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold" }}
            align="center"
            gutterBottom
          >
            ✉️ E-mail: xjand025@studenti.czu.cz
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Buďte tvůrcem změn a přidejte se k nám na cestě k vytváření lepšího
            prostoru pro hudební nadšence. Těšíme se na vaši kreativitu a
            energii, kterou můžete přinést do naší rostoucí hudební komunity!
            #HudebníRevolution #VývojářskáKomunita
          </Typography>
          {/* <Grid container alignItems="center" justifyContent="center" gap={2}>
            <Button variant="contained" className={classes.leftButton}>
              Main call to action
            </Button>
            <Button variant="outlined">Secondary action</Button>
          </Grid> */}
        </Container>
      </Box>
    </Box>
  )
}

export default Contact
