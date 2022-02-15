import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "block",
    marginTop: "20px",
  },
  textField: {
    position: "relative",
    width: "70%",
  },
  input: {
    border: "none",
    fontSize: "14px",
    background: "rgb(49 54 120 / 43%)",
    borderRadius: "20px",
    padding: "12px 0px 12px 20px",
    width: "100%",
    color: '#fff'
  },
  icon: {
    position: "absolute",
    right: "-10px",
    top: "7px",
    color: "#eee",
  },
  action: {
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
    paddingBottom: "20px",
    color:"#fff"
  },
  button: {
    minWidth: "10px",
    minHeight: "2px",
    color: "#fff",
    background: "rgb(49 54 120 / 83%)",
    borderRadius: "50%",
    fontSize: "19px",
    height: "25px",
    padding: "10px",
    marginRight: "20px",
  },
}));

const NewPlaylist = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Box className={classes.textField}>
        <input className={classes.input} type="text" placeholder="Search" />
        <SearchIcon className={classes.icon} />
      </Box>
      <Box className={classes.action}>
        <Button className={classes.button}>+</Button>
        <Typography>Create new playlist</Typography>
      </Box>
    </Box>
  );
};

export default NewPlaylist;
