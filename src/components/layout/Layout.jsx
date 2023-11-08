import { Footer } from "../footer/Footer.jsx"
import { Header } from "../header/Header.jsx"
import classes from "./Layout.module.css"

export const Layout = ({ children }) => {
  return (
    <div className={classes.root}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
