import { AppBar, Toolbar } from "@mui/material"

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div>Logo</div>
        <div>Header</div>
      </Toolbar>
    </AppBar>
  )
}
