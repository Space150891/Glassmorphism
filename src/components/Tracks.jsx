import React from "react";
import { Box,  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    height: '33%'
  },
 
}));

const Tracks = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
     
    </Box>
  );
};

export default Tracks;
