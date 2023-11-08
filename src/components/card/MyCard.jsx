import Card from "@mui/material/Card"
import classes from "./MyCard.module.css"
import { CardContent, CardMedia, Grid, Typography } from "@mui/material"
// import { Button } from "@mui/material"

export const MyCard = ({ text, description, imageUrl, imageAlt }) => {
  return (
    <Grid
      item
      xs={10}
      md={5}
      lg={3}
      className={classes.root}
      justifyContent="center"
    >
      {/* <Card className={classes.card}> */}
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={imageUrl}
          alt={imageAlt}
        />
        {/* <CardContent className={classes.content}> */}
        <CardContent>
          <Typography variant="h5">{text}</Typography>
          <Typography variant="body2">{description}</Typography>
          {/* <div className={classes.buttonWrapper}>
          <Button
            className={classes.button}
            variant="contained"
            color="error"
            onClick={handleButtonClick}
          >
            {buttonText}
          </Button>
        </div> */}
        </CardContent>
      </Card>
    </Grid>
  )
}
