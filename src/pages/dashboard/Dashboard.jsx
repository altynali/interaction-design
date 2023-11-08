import { Box, Grid } from "@mui/material"
import { MyCard } from "../../components/card/MyCard"
import classes from "./Dashboard.module.css"
import { cards } from "./data"

const Dashboard = () => {
  return (
    <Box>
      <h1>Dashboard</h1>

      <Grid
        container
        alignItems="center"
        justifyContent="center"
        gap={2}
        className={classes.root}
      >
        {cards.length !== 0
          ? cards?.map((card) => <MyCard {...card} key={card.id} />)
          : "no cards"}
      </Grid>
    </Box>
  )
}

export default Dashboard
