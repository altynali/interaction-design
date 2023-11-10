import classes from "./MyButton.module.css"
import { Button, Grid } from "@mui/material"
import { NavLink } from "react-router-dom"

export const MyButton = ({ text, id, path }) => {
  return (
    <Grid
      item
      xs={10}
      md={3}
      justifyContent="center"
      className={classes.gridItem}
      key={id}
    >
      <NavLink to={path} className={classes.myLink}>
        <Button variant="contained" className={classes.myButton}>
          {text}
        </Button>
      </NavLink>
    </Grid>
  )
}
