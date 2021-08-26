import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    color: '#00466E',
    flexGrow: 1,
    fontSize: '1rem'
  },
  trackercount: {
    color: "#046D70",
    fontSize: '0.75rem'
  },
  appBar: {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
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
          <Typography variant="h1" className={classes.trackercount} >
            number of website being tracked {n}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
