import { Box } from "@material-ui/core";
import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { makeStyles } from "@material-ui/core/styles";
import NewPlaylist from "./NewPlaylist";
import Profile from "./Profile";
import Tracks from "./Tracks";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    width: "25%",
    paddingLeft: "30px",
    backdropFilter: "brightness(.1)",
    borderRadius: '20px 0 0 20px'
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.sidebar}>
      <Logo />
      <Navigation />
      <NewPlaylist />
      <Tracks/>
      <Profile />
    </Box>
  );
};

export default Sidebar;
