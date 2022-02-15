import { Box, Typography } from "@material-ui/core";
import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import BookmarkIcon from "@material-ui/icons/Bookmark";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navigation: {
    margin: "50px 0",
  },
  list: {
    display: "flex",
    width: "80%",
    padding: "10px 0",
    color: "#fff",
    cursor: 'pointer'
  },
  navText: {
    fontWeight: "500",
    marginLeft: "30px",
  },
}));

const Navigation = () => {
  const classes = useStyles();
  return (
    <Box className={classes.navigation}>
      <Box className={classes.list}>
        <HomeIcon />
        <Typography className={classes.navText}>Home</Typography>
      </Box>
      <Box className={classes.list}>
        <FavoriteIcon />
        <Typography className={classes.navText}>Favorite tracks</Typography>
      </Box>
      <Box className={classes.list}>
        <BookmarkIcon />
        <Typography className={classes.navText}>My media library</Typography>
      </Box>
    </Box>
  );
};

export default Navigation;
