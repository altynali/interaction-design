import { Box, Container, Typography } from "@mui/material"
import classes from "./About.module.css"

const About = () => {
  return (
    <Box>
      <Box className={classes.hero}>
        <Container maxWidth="md">
          <Typography variant="h5" align="center" gutterBottom>
            Vítejte na Band-Mate,
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Jsme místo, které propojuje různé hudební talenty a kde vznikají
            nová přátelství. Naše stránka vznikla s jediným cílem – propojit
            hudební nadšence na základě jejich vášně k určitému nástroji a
            úrovni dovedností.
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Bez ohledu na to, zda jste začátečník hrající první tóny na kytaru,
            profesionální klávesista nebo vášnivý bubeník, zde najdete komunitu
            lidí se stejným zaujetím. Co nás odlišuje? Naše platforma vám
            umožňuje procházet inzeráty hudebníků podle konkrétních nástrojů a
            úrovně dovedností. To vám usnadní najít ty správné parťáky pro vaše
            hudební projekty nebo jednoduše pro neformální jamování.
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Věříme, že hudba je univerzálním jazykem spojujícím lidi po celém
            světě. Připojte se k nám na naší cestě při propojování hudebního
            světa. Naše komunita je otevřená, přátelská a plná inspirace. Buďte
            součástí této hudební rodiny na naší stránce, kde se snoubí vášeň,
            talent a nekonečné možnosti.
          </Typography>
          <Typography variant="body2" align="center" paragraph>
            #HudebníRodina #SpolečněHrajeme
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

export default About
