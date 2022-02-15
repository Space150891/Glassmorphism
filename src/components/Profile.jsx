import React from "react";
import { Avatar, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SectionTitle from "./SectionTitle";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "10px",
  },
  box: {
    display: "flex",
    alignItems: "center",
  },
  profile: {
    marginLeft: "18px",
    color: "#fff",
    fontSize: "14px",
  },
}));

const Profile = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.box}>
        <Avatar alt="Remy Sharp" src="../../person.jpeg" />
        <Typography className={classes.profile}>My profile</Typography>
      </Box>
    </Box>
  );
};

export default Profile;
