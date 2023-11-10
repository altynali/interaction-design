import Card from "@mui/material/Card"
import classes from "./MyCard.module.css"
import { Box, CardContent, CardMedia, Typography } from "@mui/material"

export const MyCard = ({ text, description, imageUrl, imageAlt }) => {
  return (
    <Card className={classes.root}>
      <img
        // component="img"
        className={classes.media}
        src={imageUrl}
        alt={imageAlt}
      />
      <CardContent className={classes.content}>
        <Typography variant="h5">{text}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  )
}
