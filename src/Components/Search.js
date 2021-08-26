import React from 'react'
import { Button, makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    root: {
        padding: '2px 4px',
        margin: '3rem 3rem',
        display: 'flex',
    },
    input: {
        marginLeft: theme.spacing(0),
        flex: 1,
    },
    btn: {
        fontWeight: theme.typography.fontWeightLight,
        background: '#00466E',
        color: '#fff',
        width: '20%',
        marginLeft: theme.spacing(2),
    }
}));

export default function Search() {
    const classes = useStyles();
    return (
        <div component="form" className={classes.root}>

            <TextField label="input with url validation" variant="outlined" className={classes.input} />
            <Button variant="contained" className={classes.btn}>
                ADD WEBSITE</Button>

        </div>

    );
}