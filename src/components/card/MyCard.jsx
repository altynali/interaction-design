import Card from "@mui/material/Card"
import classes from "./MyCard.module.css"
import { CardContent, Typography } from "@mui/material"
import { formattedDate } from "../../utils"

export const MyCard = ({
  title,
  description,
  imageUrl,
  imageAlt,
  hashTag,
  date,
}) => {
  return (
    <Card className={classes.root}>
      {/* <img
        className={classes.media}
        src={imageUrl}
        alt={imageAlt}
      /> */}
      <CardContent className={classes.content}>
        <Typography variant="h5" className={classes.contentChild}>
          {title}
        </Typography>
        <Typography variant="body2" className={classes.contentChild}>
          {description}
        </Typography>
        <Typography variant="body2" className={classes.contentChild}>
          {hashTag}
        </Typography>
        <Typography variant="body1" className={classes.contentChild}>
          {formattedDate(date)}
        </Typography>
      </CardContent>
    </Card>
  )
}
