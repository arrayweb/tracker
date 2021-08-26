import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { alpha, makeStyles } from '@material-ui/core/styles';
import shadows from "@material-ui/core/styles/shadows";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#0c4fff",
    flexGrow: 1,
    fontSize: '10px'
  },
  trackercount: {
    color: "#2e3fff",
    fontSize: '10px'
  },
  appBar: {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    boxShadow: 'none'
  }
}));

export default function Header() {
  const classes = useStyles();
  const n = 4;
  return (
    <div>
      <AppBar position='sticky' className={classes.appBar} >
        <Toolbar >
          <Typography variant="h6" className={classes.title}>
            Live website tracker
          </Typography>
          <Typography variant="h6" className={classes.trackercount} >
            number of website being tracked {n}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
