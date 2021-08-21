import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default function Header() {
  return (
    <div>
      <AppBar position='fixed' color="transparent">
        <Toolbar >
          <Typography variant="h6" style={{ color: "#ec407a", flexGrow: 1, fontSize: '8px' }}>
            Newsgg
          </Typography>
          <Typography variant="h6" style={{ color: "#ec407a" }} >
            News
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
