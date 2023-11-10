import { AppBar, Toolbar } from "@mui/material"
import { NavLink } from "react-router-dom"
import classes from "./Header.module.css"

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <NavLink to="/" className={classes.link}>
          <div>Home</div>
        </NavLink>
        <div>Logo</div>
        <div>Interakcni design 2023</div>
      </Toolbar>
    </AppBar>
  )
}
