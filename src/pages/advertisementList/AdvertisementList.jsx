import { Box, Button, Container, Grid, Select, Typography } from "@mui/material"
import { MyCard } from "../../components/card/MyCard"
import classes from "./AdvertisementList.module.css"
import { cards, guitarAmaters } from "./data"
import { NavLink, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const AdvertisementList = () => {
  const { instrument, level } = useParams()
  const [myArr, setMyArr] = useState(cards)

  useEffect(() => {
    if (instrument === "Kytara" && level === "Amatér") {
      setMyArr(guitarAmaters)
    } else {
      setMyArr(cards)
    }
  }, [instrument, level])

  const handleFilterNewFirst = () => {
    const newArr = [...myArr].sort((x, y) => {
      return new Date(x.date) - new Date(y.date)
    })
    setMyArr(newArr)
  }

  const handleFilterOldFirst = () => {
    const newArr = [...myArr].sort(
      (x, y) => new Date(y.date) - new Date(x.date)
    )
    setMyArr(newArr)
  }

  return (
    <Box>
      <Grid container alignItems="center" justifyContent="left" gap={1}>
        <Button
          variant="contained"
          color="warning"
          className={classes.button}
          sx={{ margin: 2 }}
        >
          <NavLink to={`/${instrument}`}>Zpet</NavLink>
        </Button>
        {/* <Grid container alignItems="center" justifyContent="left" gap={1}> */}
        <Typography variant="body2">nástroj:</Typography>
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          {instrument}
        </Typography>
        <Typography variant="body2">úroveň:</Typography>
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          {level}
        </Typography>
        {/* </Grid> */}
      </Grid>
      <Box className={classes.hero}>
        <Container maxWidth="md">
          <Typography variant="h6" align="center" gutterBottom>
            Zde jsou inzeráty dle tvých předchozích požadavků a preferencí.
            Zaujal tě některý? Klikni na inzerat.
          </Typography>
          {/* <Typography
            variant="body1"
            sx={{ fontWeight: "bold", marginTop: 5 }}
            align="center"
            gutterBottom
          >
            Stačí pouze jeden klik a dozvíš se více:
          </Typography> */}
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          gap={2}
          sx={{ marginTop: 5 }}
        >
          <Typography>Seradit podle:</Typography>
          <Button
            variant="contained"
            className={classes.button}
            onClick={handleFilterOldFirst}
          >
            Nejnovejsi
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            onClick={handleFilterNewFirst}
          >
            Nejstarsi
          </Button>
        </Grid>

        <Grid
          container
          alignItems="center"
          justifyContent="center"
          gap={2}
          className={classes.root}
        >
          {myArr.length !== 0
            ? myArr?.map((card) => (
                <Grid item xs={10} md={8} key={card.id}>
                  <NavLink
                    to={`/advertisement/${card.id}/${instrument}/${level}`}
                  >
                    <MyCard {...card} />
                  </NavLink>
                </Grid>
              ))
            : "no cards"}
        </Grid>
      </Container>
    </Box>
  )
}

export default AdvertisementList
