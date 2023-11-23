import { AppBar, Toolbar } from "@mui/material"
import { NavLink } from "react-router-dom"
import classes from "./Header.module.css"
import logo_band from "../../assets/logo_band.png"

export const Header = () => {
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar
        sx={{
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <NavLink to="/" className={classes.link}>
          Domů
        </NavLink>
        <div>
          <img
            src={logo_band}
            alt="Logo"
            style={{
              width: 150,
              height: 80,
            }}
          />
        </div>
        <NavLink
          to="https://jpband.cz/"
          target="_blank"
          className={classes.link}
        >
          JP Band
        </NavLink>
      </Toolbar>
    </AppBar>
  )
}
