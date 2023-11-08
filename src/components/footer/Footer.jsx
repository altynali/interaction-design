import { Box, Container, Grid, Typography } from "@mui/material"

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
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h5">React App</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">Interakcni design 2023</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
