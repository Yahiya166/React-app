import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
    {/* <TextField id="standard-basic" label="Standard" /> */}
    </form>
  );
}