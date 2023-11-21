import Card from "@mui/material/Card"
import classes from "./AdvertisementCard.module.css"
import { Button, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import { formattedDate } from "../../utils"

export const AdvertisementCard = ({
  title,
  description,
  imageUrl,
  imageAlt,
  hashTag,
  date,
  phoneNumber,
  instrument,
  level,
  email,
}) => {
  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        className={classes.media}
        src={imageUrl}
        alt={imageAlt}
      />
      <CardContent className={classes.content}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <Typography variant="body2">{formattedDate(date)}</Typography>
          <Typography variant="body2">{phoneNumber}</Typography>
          <Typography variant="body2">{email}</Typography>
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <Typography variant="body2">{hashTag}</Typography>
          <Button variant="contained" className={classes.button}>
            <NavLink to={`/${instrument}/${level}`}>Zpět</NavLink>
          </Button>
        </Grid>
      </CardContent>
    </Card>
  )
}
