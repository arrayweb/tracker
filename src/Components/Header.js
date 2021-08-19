import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default function Header() {
  return (
    <div>
  <AppBar position='fixed' color='secondary'>
    <Toolbar >
<Typography variant="h6" align='left' style={{color:'red', flexGrow:1}}>
      Newsgg
    </Typography>
    <Typography variant="h6" style={{color:'green'}}>
      News
    </Typography>
    </Toolbar>
    </AppBar>
    </div>
  )
}
