import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logo: {
      margin: '20px 0',
      color: '#fff',
      fontSize: '32px',
      fontWeight: '700'
  }
}));

const Logo = () => {
  const classes = useStyles();
  return <Typography className={classes.logo}>Spotiray</Typography>;
};

export default Logo;
