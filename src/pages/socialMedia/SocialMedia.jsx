import { Box, Button, Container, Grid, Typography } from "@mui/material"
import classes from "./SocialMedia.module.css"

const SocialMedia = () => {
  return (
    <Box>
      <Box className={classes.hero}>
        <Container maxWidth="md">
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold" }}
            align="center"
            gutterBottom
          >
            Facebook:&nbsp;
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              https://www.facebook.com
            </a>
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold" }}
            align="center"
            gutterBottom
          >
            Instagram:&nbsp;
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com
            </a>
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold" }}
            align="center"
            gutterBottom
          >
            Twitter:&nbsp;
            <a
              href="https://twitter.com/?lang=cs"
              target="_blank"
              rel="noreferrer"
            >
              https://twitter.com/?lang=cs
            </a>
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Nenechte si ujít žádnou novinku a buďte v kontaktu s naší hudební
            komunitou prostřednictvím našich sociálních sítí. Sledujte nás a
            buďte první, kdo se dozví o našich akcích a novinkách. Jsme rádi, že
            vás máme v naší hudební rodině!
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

export default SocialMedia
